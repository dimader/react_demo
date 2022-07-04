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
import RoutingDemo from "./demos/RoutingDemo";

export default Overview;

/**
 * Array aller Demos.
 * Wichtig hier ist das das "Component"-Attribut Großgeschrieben ist. Damit kann es als JSX-Element
 * verwendet werden.
 */
const components = [
    {desc: "Task Verwaltung", path:"/task/", Component: TasksView},
    {desc: "Task Verwaltung (Uncontrolled)", path:"/taskuncontrolled/", Component: TasksViewUncontrolled},
    {desc: "Converter", path:"/converter/", Component: Converter},
    {desc: "Event Demo", path:"/events/", Component: EventTypedLoop2},
    {desc: "Effect Demo", path:"/effect/", Component: Effect},
    {desc: "Hook State Demos", path:"/hookoverview/", Component: HookStateOverview},
    {desc: "useState Demos", path:"/usestate/", Component: UseStateOverview},
    {desc: "useEffect Demos", path:"/useEffect/", Component: UseEffectOverview},
    {desc: "useReducer Demo", path:"/usereducer/", Component: UseReducerOverview},
    {desc: "Context Demo", path:"/useContext/", Component: ContextDemo},
    {desc: "Memo Demo", path:"/memo/", Component: MemoOverview},
    {desc: "Ref Callback Demo", path:"/refcallback/", Component: RefCallbackOverview},
    {desc: "Routing Demo", path:"/routing/", Component: RoutingDemo},
];

function Overview() {

    return (<>
        <Router>
            <p/><Link to="/">Zurück zur Übersicht</Link>

            <Routes>
                
                {
                    components.map(eachComponent => {
                        // Component-Attribut wird direkt als JSX-Element gesetzt.
                        // Das '*' wird für die Nested-Navigation benötigt.
                        return <Route path={eachComponent.path + '*'} element={<eachComponent.Component />} />
                    })
                }

                <Route path="/" element={<Links />} />

            </Routes>
        </Router>
    </>);
};

/**
 * Auflistung der Links zu allen Demos.
 * @returns JSX
 */
function Links() {
    return (<>
        <h1>Übersicht</h1>

        <div>
            <nav>

                {
                    components.map(eachComponent => {
                        return <><p/><Link to={eachComponent.path}>{eachComponent.desc}</Link> </>
                    })
                }

            </nav>
        </div>
    </>);
};