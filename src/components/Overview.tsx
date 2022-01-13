import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
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

export default Overview;

const components = [
    {decs: "Task Verwaltung", path:"/task", component: TasksView},
    {decs: "Task Verwaltung (Uncontrolled)", path:"/taskuncontrolled", component: TasksViewUncontrolled},
    {decs: "Converter", path:"/converter", component: Converter},
    {decs: "Event Demo", path:"/events", component: EventTypedLoop2},
    {decs: "Effect Demo", path:"/effect", component: Effect},
    {decs: "Hook State Demos", path:"/hookoverview", component: HookStateOverview},
    {decs: "useState Demos", path:"/usestate", component: UseStateOverview},
    {decs: "useEffect Demos", path:"/useEffect", component: UseEffectOverview},
];

function Overview() {

    return (<>
        <React.Fragment>
            <Router>
                <p/><Link to="/">Zurück zur Übersicht</Link>

                <Switch>
                    
                    {
                        components.map(eachComponent => {
                            return <Route path={eachComponent.path} component={eachComponent.component} />
                        })
                    }

                    <Route path="/">
                        <Links />
                    </Route>

                </Switch>
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