import {
    Routes,
    Route,
    Link,
    Outlet
} from "react-router-dom";
import React, { Fragment, useState } from 'react';

export default function HookStateOverview() {
    return (<>
        <p/><Link to="">Zurück zu Hooks</Link>

        <Routes>
            <Route path="counter" element={<Counter />} />
            <Route path="multicounter" element={<CounterMultiple />} />
            <Route path="flexcounter" element={<CounterChooser />} />
            <Route path="switchflexcounter" element={<AntiCounterChooser />} />

            <Route path="/" element={<HookOverviewLinks />} />
        </Routes>

        <Outlet />
    </>);
};

function HookOverviewLinks() {
    return (<>
        <div><nav>

            <p/><Link to="counter">Einfacher Zähler</Link>
            <p/><Link to="multicounter">Mehrere einfache Zähler</Link>
            <p/><Link to="flexcounter">Flexibele Anzahl Zähler</Link>
            <p/><Link to="switchflexcounter">Umschaltbarer Flexibeler Zähler</Link>
            
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
