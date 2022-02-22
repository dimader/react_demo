import React from 'react';
import {
    HashRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
// Import der Komponenten
import { Effect } from './demos/Effect';
import { Converter } from './demos/ExampleConverter';
import HookStateOverview from './demos/HookStateDemo';
import { EventTypedLoop2 } from './demos/State';
import UseStateOverview from './demos/UseStateDemo';
import UseEffectOverview from './demos/UseEffectDemo';
import { TasksView } from './task/TaskExample';
import { TasksViewUncontrolled } from './task/TaskExampleUncontrolled';
import MemoOverview from './demos/MemoDemo';
import UseReducerOverview from './demos/UseReducer';
import ContextDemo from './demos/UseContextDemo';
import RefCallbackOverview from './demos/RefCallbackDemo';

export default Overview;

const components = [
    {decs: "Task Verwaltung", path:"/task/", Component: TasksView},
    {decs: "Task Verwaltung (Uncontrolled)", path:"/taskuncontrolled/", Component: TasksViewUncontrolled},
    {decs: "Converter", path:"/converter/", Component: Converter},
    {decs: "Event Demo", path:"/events/", Component: EventTypedLoop2},
    {decs: "Effect Demo", path:"/effect/", Component: Effect},
    {decs: "Hook State Demos", path:"hookoverview/", Component: HookStateOverview},
    {decs: "useState Demos", path:"/usestate/", Component: UseStateOverview},
    {decs: "useEffect Demos", path:"/useEffect/", Component: UseEffectOverview},
    {decs: "useReducer Demo", path:"/usereducer/", Component: UseReducerOverview},
    {decs: "Context Demo", path:"/useContext/", Component: ContextDemo},
    {decs: "Memo Demo", path:"/memo/", Component: MemoOverview},
    {decs: "Ref Callback Demo", path:"/refcallback/", Component: RefCallbackOverview},
];

function Overview() {

    return (<>
        <React.Fragment>
            <Router>
                <p/><Link to="/">Zurück zur Übersicht</Link>

                <Routes>
                    
                    {
                        components.map(eachComponent => {
                            return <Route path={eachComponent.path + '*'} element={<eachComponent.Component />} />
                        })
                    }

                    <Route path="/" element={<Links />} />

                </Routes>
            </Router>
        </React.Fragment>
    </>);
};

function Links() {
    return (<>
        <h1>Übersicht</h1>

        <div>
            <nav>

                {
                    components.map(eachComponent => {
                        return <><p/><Link to={eachComponent.path}>{eachComponent.decs}</Link> </>
                    })
                }

            </nav>
        </div>
    </>);
};