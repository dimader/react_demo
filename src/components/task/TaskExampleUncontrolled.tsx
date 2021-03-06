import React, { FormEvent, useRef } from 'react';
import {
    Routes,
    Route,
    Link,
    useNavigate
} from "react-router-dom";
import "./Tasks.css";

interface Task {
    id: number,
    description: string,
    dueDate: Date,
    prio: number,
    done: boolean
};

function createTask(id: number, desc: string, prio: number): Task {
    console.log("create Task");
    return {
        id: id,
        description: desc,
        dueDate: new Date(),
        prio: prio,
        done: false
    };
};

function readInitialData(): Task[] {
    // console.log("--readInitialData");
    return [
        createTask(-1, "React Kurs Erstellen", 1),
        createTask(-2, "Kaffee trinken", 2)
    ];
};

export function TasksViewUncontrolled() {

    // Datenhaltung auf der höchsten gemeinsamen Ebene
    const [ data, setData ] = React.useState<Task[]>([]);
    const [ nextId, setNextId ] = React.useState(0);

    React.useEffect(() => {
        setData(readInitialData());
    }, []);

    const saveTask = (task: Task) => {
        // console.log("Speichern! " + task.description);
        task.id = nextId;
        setNextId(nextId + 1);

        setData( [...data, task] ); // Kopie Erstellen
    };

    const handleDelete = (task: Task) => {
        setData( data.filter(eachTask => eachTask.id !== task.id) ); // alle Tasks übernehmen die nicht die übergebene Task sind (abgleich über id)
    };

    const handleDone = (task: Task) => {
        // Kopie des arrays erstellen und die Kopie bearbeiten.
        const copy = [...data];

        const index = copy.findIndex(element => element.id === task.id);
        copy[index].done = true;

        setData(copy);
    };

    return (
        <React.Fragment>
            {/* <Router> // Hier wegelassen da Router bereits in Overview enthalten ist. */}
            <Navigation />
            <Content 
                tableData={data} 
                onSave={saveTask} 
                onDelete={handleDelete}
                onDone={handleDone}
            />
        </React.Fragment>
    );
};

function Navigation() {
    return (
        <div>
            <nav>
                ----
                <Link to="Tabelle">Tabelle</Link>
                ----
                <Link to="Neu">Erfassung</Link>
            </nav>
        </div>
    );
};

interface ContentProps {
    tableData: Task[],
    onSave: (task: Task) => void        // Event Handler
    onDone: (task: Task) => void        // Event Handler
    onDelete: (task: Task) => void      // Event Handler
};

function Content(props: ContentProps) {
    return (
        <Routes>
            <Route path="Tabelle" element={
                <TasksTable 
                    tableData={props.tableData}
                    onDelete={props.onDelete}
                    onDone={props.onDone} 
                />
                }>
            </Route>

            <Route path="Neu" element={<TaskCreate onSave={props.onSave} />}>
                
            </Route>
            
            <Route path="/" element={ /* Default nicht vergessen, dass ist der Start-Pfad. */
                <TasksTable 
                    tableData={props.tableData}
                    onDelete={props.onDelete}
                    onDone={props.onDone} 
                />
                }>
            </Route>
        </Routes>
    );
};

interface TasksTableProps {
    tableData: Task[],
    onDone: (task: Task) => void        // Event Handler
    onDelete: (task: Task) => void      // Event Handler
};

function TasksTable(props: TasksTableProps) {
    return (
        <React.Fragment>
            <h1>Aufgaben Tabelle</h1>

            <table>

                <th>ID</th>
                <th>Aufgabe</th>
                <th>Prio</th>
                <th>Ziel Datum</th>
                <th>Erledig?</th>
                
                <th>Aktionen</th>
                <th>Aktionen</th>

                {props.tableData.map(eachTask => {
                    return (
                        <TaskRow key={eachTask.id} task={eachTask} onDeleteClick={props.onDelete} onDoneClick={props.onDone} />
                    )
                })}
            </table>

        </React.Fragment>
    );
};

interface TaskRowProps {
    task: Task,
    onDeleteClick: (task: Task) => void,
    onDoneClick: (task: Task) => void,
};

function TaskRow(props: TaskRowProps) {
    return (<tr>
        <td>{props.task.id}</td>
        <td>{props.task.description}</td>
        <td>{props.task.prio}</td>
        <td>{formatDateToString(props.task.dueDate)}</td> {/* HINWEIS: dueDate DARF hier NICHT als "kind" angegeben werden. Es muss zu string umgewandelt werden. */}
        <td>{String(props.task.done)}</td>
        
        <td><input type="button" onClick={() => props.onDeleteClick(props.task)} value="Löschen" /></td>
        <td><input type="button" onClick={() => props.onDoneClick(props.task)} value="Erledigt" /></td>
    </tr>);
};

interface TaskCreateProps {
    onSave: (task: Task) => void    // Event Handler
};

function TaskCreate(props: TaskCreateProps) {

    const navigate = useNavigate();

    // const [data, setData] = useState<Task>(() => createTask(0, "", 3));

    const descElementRef = useRef<HTMLInputElement>(null); // Ohne das null wird ein inkompatibler Typ zurück gegeben.
    const prioElementRef = useRef<HTMLSelectElement>(null); // Kein HTMLInputElement !
    const dateElementRef = useRef<HTMLInputElement>(null);
    const doneElementRef = useRef<HTMLInputElement>(null);

    const saveTask = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Sorgt dafür das das Submit die Seite nicht neu lädt.

        let task = createTask(0, "", 3);

        task.description = descElementRef.current?.value || "";
        task.prio = parseInt( prioElementRef.current?.value || "3");
        task.dueDate = new Date(dateElementRef.current?.value || "");
        task.done = doneElementRef.current?.checked || false;

        props.onSave(task);

        // Navigieren zur Erf. Seite
        navigate('/taskuncontrolled/Tabelle');
    };

    return (
        <React.Fragment>
            <h1>Aufgabe Erfassung (Uncontrolled)</h1>
            <form onSubmit={saveTask}>

                <label htmlFor="desc">Aufgabe</label> {/* The for attribute is called htmlFor for consistency with the DOM property API. */}
                <input id="desc" type="text" name="description" placeholder="Deine Aufgabe..."
                    // value={data?.description}
                    // onChange={handleInputChange} 
                    ref={descElementRef}
                    />

                <label htmlFor="prio">Priorität</label>
                <select 
                    id="prio" 
                    // value={data?.prio} 
                    // onChange={e => setData({...data, prio: parseInt(e.target.value)} as Task)}
                    ref={prioElementRef}
                >
                    <option value="1">1 - Wichtig</option>
                    <option value="2">2 - Irgendwie schon wichtig</option>
                    <option value="3">3 - Muss nicht, kann aber</option>
                </select>

                <label htmlFor="dueDate">Ziel-Datum</label>
                <input
                    name="dueDate"
                    type="date"
                    id="dueDate"
                    // value={formatDateToString(data?.dueDate)}
                    // onChange={handleInputChange} 
                    ref={dateElementRef}
                />

                <label htmlFor="done">Erledigt?</label>
                <input
                    name="done"
                    type="checkbox"
                    id="done"
                    // checked={data?.done}
                    // onChange={handleInputChange} 
                    ref={doneElementRef}
                />

                <p />
                <input type="submit" value="Erstellen" />

                <p />
                {
                    /* bedingtes rendern */
                    // isDebug && <span>Debug: {data?.description} - {data?.prio} - {String(data?.done)} </span>
                }
                {/* String(data?.done) - String umwandlung muss sein, sonst erfolgt keine Ausgabe */}

            </form>
        </React.Fragment>
    );
};

function formatDateToString(date: Date): string {

    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!
    var yyyy = date.getFullYear();
    
    return yyyy + '-' + mm + '-' + dd;
};