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
            <Route path="/hookoverview/prevcounter" component={CounterPrevStateTest} />

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
            <p/><Link to="/hookoverview/prevcounter">"Previous State" Zähler</Link>

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

function CounterPrevStateTest() {

    console.log("--called--");

    // Mit diesem Afruf werden die State Updates erst ausgeführt (wenn diese als Funktionen übergeben werden).
    const [ count, setCount ] = useState(1);

    console.log("--current count: " + count);

    return (
        <Fragment>
            <p>Konsole öffnen um die Reihenfolge der Aufrufe zu sehen.</p>

            <p>Zähler: {count}</p>

            <input type="button" onClick={() => {
                console.log("0_current count: " + count);
                setCount(count + 1);
            }} value="c+ (normaler Event-Handler)" />

            <input type="button" onClick={() => setCount(prev => {
                console.log("1_current count: " + count);
                console.log("1_prev count: " + prev);
                return prev + 1;
                })} value="c++ (Event-Handler verwendet previous value)" />

            <input type="button" onClick={() => {
                
                console.log("2_current count: " + count);

                setCount(prev => {
                    console.log("3_prev count: " + prev);
                    console.log("3_current count: " + count);
                    return prev+1;
                });
                setCount(prev => {
                    console.log("4_prev count: " + prev);
                    console.log("4_current count: " + count);
                    return prev+1;
                });

            }} value="c++++ (Event-Handler mit doppelter State aktualisierung und previous value)" />

        </Fragment>
    );
};