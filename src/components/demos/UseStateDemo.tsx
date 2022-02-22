import {
    Routes,
    Route,
    Link
} from "react-router-dom";
import { Fragment, useState } from 'react';

export default function UseStateOverview() {
    return (<>
        <p/><Link to="">Zurück zu useState</Link>

        <Routes>
            <Route path="prevcounter" element={<CounterPrevStateTest />} />
            <Route path="statechange" element={<StateChangeTest />} />
            <Route path="lazy" element={<LazyStateTest />} />
            
            <Route path="/" element={<UseStateOverviewLinks />} />
        </Routes>
    </>);
};

function UseStateOverviewLinks() {
    return (<>
        <div><nav>

            <p/><Link to="prevcounter">Zähler mit funktionaler Aktualisierung</Link>
            <p/><Link to="statechange">Aktualisierung mit komplexen Daten</Link>
            <p/><Link to="lazy">Lazy initialisierung</Link>
            
        </nav></div>
    </>);
};

function CounterPrevStateTest() {

    console.log("--called--");

    const [ count, setCount ] = useState(1);
    
    console.log("--Aktueller Count: " + count);

    return (
        <Fragment>
            <p>Konsole öffnen um Ausgabe zu sehen.</p>

            <p>Zähler: {count}</p>

            <input type="button" onClick={() => {
                console.log("Event-Handler aktueller Count: " + count);
                setCount(count + 1);
            }} value="1 setCount +1" />

            <input type="button" onClick={() => setCount(prev => {
                console.log("Event-Handler aktueller Count: " + count);
                console.log("Event-Handler prev count: " + prev);
                return prev + 1;
                })} value="2 setCount prev +1" />

            <input type="button" onClick={() => {
                
                console.log("Event-Handler aktueller Count: " + count);

                setCount(prev => {
                    console.log("Event-Handler prev count: " + prev);
                    console.log("Event-Handler current count: " + count);
                    return prev+1;
                });
                setCount(prev => {
                    console.log("Event-Handler prev count: " + prev);
                    console.log("Event-Handler current count: " + count);
                    return prev+1;
                });

            }} value="3 doppelter setCount prev +1" />

            <input type="button" onClick={() => setCount(prev => {

                console.log("Event-Handler aktueller Count: " + count);
                return prev;

                })} value="4 setCount prev ohne Änderung" />

        </Fragment>
    );
};

interface TestData {
    first: string
    second: string
};
function StateChangeTest() {

    console.log("--called--");

    const [ data, setData ] = useState<TestData>(
        {
            first: "1",
            second: "2"
        }
    );

    console.log("--Aktueller Zustand: data.first: " + data.first);

    return (
        <Fragment>
             <p>Konsole öffnen um Ausgabe zu sehen.</p>

            <p>Änderungen am Zustand, eine Kopie wird erzeugt.</p>
            <input type="button" onClick={() => {

                setData( { ...data, first: data.first + "1"} );

            }} value="1 - Zustand kopieren / +1" />
            

            <p>Änderungen am Zustand ohne eine Kopie zu erzeugen.</p>
            <input type="button" onClick={() => {

                // Änderungen werden nicht immer in die UI übernommen, sind aber im State korrekt gesetzt
                data.first = data.first + "2";
                setData( data );

            }} value="2 - Zustand direkt bearbeiten / +2" />

            <input type="button" onClick={() => {

                // Ein re-render wird nur einmalig ausgelöst.
                setData( data );

            }} value="3 - Zustand direkt bearbeiten / ohne Änderungen" />


            <input type="button" onClick={() => {
                
                let newData = {
                    first: data.first,
                    second: data.second
                };
                setData( newData );

            }} value="4 - Zustand kopieren komplett ohne Änderungen" />


            <p>Funktionale Aktualisierung</p>
            <input type="button" onClick={() => setData(prev => {

                return { ...prev };

                })} value="5 - Funktionale Aktualisierung / Neues Objekt ohne Änderungen" />
            <input type="button" onClick={() => setData(prev => {

                return prev;

                })} value="6 - Funktionale Aktualisierung / Original Objekt ohne Änderungen" />
            <input type="button" onClick={() => setData(prev => {

                prev.first = prev.first + "7";
                return prev;

                })} value="7 - Funktionale Aktualisierung / Original Objekt mit Änderung" />


        </Fragment>
    );
};

function LazyStateTest() {
    console.log("--called LazyStateTest--");

    const [ show, setShow ] = useState(false);

    return (<>
        <input type="button" onClick={() => {
            setShow(prev => !prev);
            }} value="Toggle" />
        <p/>

        { show && <LazyState /> }
        { !show && <p>Komponente ausgeblendet</p> }
    </>);
};

function LazyState() {
    console.log("--called LazyState--");

    const [ count, setCount ] = useState(1);

    const [ data, setData ] = useState(() => {
        console.log("-- lazy state init");
        return [
            { name: "N1", age: 41 },
            { name: "N2", age: 42 },
            { name: "N3", age: 43 },
            { name: "N4", age: 44 }
        ];
    });

    return (<>
        <p>Konsole öffnen um Ausgabe zu sehen.</p>
        <p>Zähler: {count}</p>

        <input type="button" onClick={() => {
            setCount(prev => prev+1);
            }} value="Count" />
        <p/>

        { data && data.map(each => {
            return <> <p/> <span>{each.name}</span> <span>{each.age}</span> </>;
            }) 
        }
    </>);
};