import {
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Fragment, useState, useEffect } from 'react';

export default function UseEffectOverview() {
    return (<>
        <p/><Link to="/useEffect">Zurück zu useEffect</Link>

        <Switch>
            <Route path="/useEffect/useeffect" component={UseEffectLifeCycle} />
            <Route path="/useEffect/useeffectdependencies" component={UseEffectDependencies} />
            
            <Route path="/useEffect" component={UseEffectOverviewLinks} />
        </Switch>
    </>);
};

function UseEffectOverviewLinks() {
    return (<>
        <div><nav>

            <p/><Link to="/useEffect/useeffect">useEffect Lifecycle</Link>
            <p/><Link to="/useEffect/useeffectdependencies">useEffect Dependencies</Link>
            
        </nav></div>
    </>);
};

function UseEffectLifeCycle() {
    console.log("-- UseEffectLifeCycle");

    const [ count, setCount ] = useState(0);
    const [ secondCount, setSecondCount ] = useState(100);

    const handleClick = () => {
        console.log("-- UseEffectLifeCycle - handleClick");
        setCount(count + 1);
    };
    const handleClickSecond = () => {
        console.log("-- UseEffectLifeCycle - handleClick-Second");
        setSecondCount(secondCount + 1);
    };

    useEffect(() => {
        console.log("-- UseEffectLifeCycle - useEffect");
    });

    useEffect(() => {
        console.log("-- UseEffectLifeCycle - useEffect []");
    }, []);

    useEffect(() => {
        console.log("-- UseEffectLifeCycle - useEffect [ count ]");
    }, [ count ]);

    console.log("-- UseEffectLifeCycle - return");
    return (
        <Fragment>
            <p>Konsole öffnen um Ausgabe zu sehen.</p>

            <p>Zähler: {count} - Zweiter Zähler: {secondCount}</p>
            <input type="button" onClick={handleClick} value="1 Count hochzählen" />
            <input type="button" onClick={handleClickSecond} value="2 Keine Änderung der Abhängigkeiten" />

        </Fragment>
    );
};

function UseEffectDependencies() {
    console.log("-- UseEffectLifeCycle");

    const [ count, setCount ] = useState(0);

    const updateCount = () => {
        console.log("-- UseEffectLifeCycle - updateCount");
        setCount(count + 1);
    };
    
    console.log("-- UseEffectLifeCycle - return");
    return (
        <Fragment>
            <p>Konsole öffnen um Ausgabe zu sehen.</p>

            <p>Zähler: {count}</p>
            {/* <p>Text: {text}</p> */}
            <input type="button" onClick={updateCount} value="1 Count außen hochzählen" />
            
            <UseEffectDependenciesInner id={count} />

        </Fragment>
    );
};

interface Props {
    id: number
};
function UseEffectDependenciesInner(props: Props) {
    console.log("-- UseEffectLifeCycle");

    const [ count, setCount ] = useState(0);
    const [ text, setText ] = useState("");

    const updateCount = () => {
        console.log("-- UseEffectLifeCycle - updateCount");
        setCount(count + 1);
    };
    
    // Funktion ohne Abhängigkeiten nach außen, set* Funktionen dürfen gefahrlos verwendet werden.
    const updateText = (updateText: number) => {
        setText("" + updateText);
    };

    useEffect(() => {
        console.log("-- UseEffectLifeCycle - useEffect [ count ]");
        // setText("" + count);
        // Funktionen können ohne Gefahr verwendent werden wenn diese keine Abhängigkeiten haben
        updateText(count);

    }, [count]); // Von count Abhängig

    useEffect(() => {
        // innere Funktion, nur innerhalb dieses useEffect verwendetbar
        const myUpdateText = () => {
            setText("" + count);
        };

        console.log("-- UseEffectLifeCycle - useEffect [ props.id ]");
        // setText("" + count);
        myUpdateText();

    }, [props.id]); // WARNUNG: Abhängigkeit count fehlt

    console.log("-- UseEffectLifeCycle - return");
    return (
        <Fragment>
            <p>Zähler (innen): {count}</p>
            <p>Text (innen): {text}</p>
            <input type="button" onClick={updateCount} value="1 Count innen hochzählen" />
            
        </Fragment>
    );
};
