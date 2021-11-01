import {
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Fragment, useState } from 'react';

export default function HookStateOverview() {
    return (<>
        <p/><Link to="/hookoverview">Zurück zu Hooks</Link>

        <Switch>
            <Route path="/hookoverview/counter" component={Counter} />
            <Route path="/hookoverview/multicounter" component={CounterMultiple} />
            <Route path="/hookoverview/flexcounter" component={CounterChooser} />
            <Route path="/hookoverview/switchflexcounter" component={AntiCounterChooser} />
            
            <Route path="/hookoverview" component={HookOverviewLinks} />
        </Switch>
    </>);
};

function HookOverviewLinks() {
    return (<>
        <div><nav>

            <p/><Link to="/hookoverview/counter">Einfacher Zähler</Link>
            <p/><Link to="/hookoverview/multicounter">Mehrere einfache Zähler</Link>
            <p/><Link to="/hookoverview/flexcounter">Flexibele Anzahl Zähler</Link>
            <p/><Link to="/hookoverview/switchflexcounter">Umschaltbarer Flexibeler Zähler</Link>
            
        </nav></div>
    </>);
};

function Counter() {
    const [ count, setCount ] = useState(0);
    return (
        <Fragment>

            <p>Zähler: {count}</p>

            <input type="button" onClick={() => setCount(count - 1)} value="c--" />
            <input type="button" onClick={() => setCount(count + 1)} value="c++" />

        </Fragment>
    );
};

// Mehrere Counter...
function CounterMultiple() {
    return (<>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
    </>);
};

// Flexible Anzahl an Countern...
function CounterChooser() {
    const [ count, setCount ] = useState(0);

    let content = [];
    for (let i=0; i < count; i++) {
        content.push(<Counter />);
    }

    return (
        <Fragment>

            <p>Anzahl: {count}</p>

            <input type="button" onClick={() => setCount(count - 1)} value="Anzahl --" />
            <input type="button" onClick={() => setCount(count + 1)} value="Anzahl ++" />

            {content}

        </Fragment>
    );
};

// Counter mit String statt mit Number
function AntiCounter() {
    const [ count, setCount ] = useState("0");
    return (
        <Fragment>

            <p>Zähler: {count}</p>

            <input type="button" onClick={() => setCount(count + "-")} value="c--" />
            <input type="button" onClick={() => setCount(count + "+")} value="c++" />

        </Fragment>
    );
};

// Umschaltbar ob Counter oder AntiCounter ausgegeben werden sollen. 
function AntiCounterChooser() {
    const [ count, setCount ] = useState(0);
    const [ kind, setKind ] = useState(false);

    let content = [];
    for (let i=0; i < count; i++) {
        if (kind) {
            content.push(<AntiCounter />);
        } else {
            content.push(<Counter />);
        }
    }

    return (
        <Fragment>

            <p>Anzahl: {count} --- Komponenten-Art: {kind ? "string" : "number"} </p>

            <input type="button" onClick={() => setCount(count - 1)} value="c--" />
            <input type="button" onClick={() => setCount(count + 1)} value="c++" />

            <input type="button" onClick={() => setKind(!kind)} value="Switch" />

            {content}

        </Fragment>
    );
};
