import {
    Routes,
    Route,
    Link,
    Outlet,
    useParams,
    useSearchParams
} from "react-router-dom";

export default function RoutingDemo() {
    return (<>
        <RoutingDemoLinks />

        <Routes>
            <Route path="/" element={<RoutingDemoApp />}>
                <Route index element={<Table />} />
                <Route path=":dataId" element={<Detail />} />
                <Route path="about" element={<About />} />
                <Route path="data" element={<DetailQuery />} />
                <Route path="querydemo" element={<QueryDemo />} />
            </Route>
        </Routes>
    </>);
};

function RoutingDemoLinks() {
    return (<>
        <div style={{backgroundColor: "#F9F9F9", margin: "1rem"}}><nav>
            Links:
            {/* Unterscheidung zwischen to=/ und to="" (Leerstring): */}
            <p/><Link to="/">Home</Link>
            <p/><Link to="">Routing Demo Tabelle</Link>
            <p/><Link to="about">About</Link>
            <p/><Link to="querydemo">Query Demo</Link>
        </nav></div>
    </>);
};

function RoutingDemoApp() {
    return (<div style={{backgroundColor: "#f7a5a5", margin: "1rem"}}>
        Routing Demo App
        <p/>
        <Outlet />
    </div>);
};

function Table() {
    return (<div style={{backgroundColor: "#d7f69f", margin: "1rem"}}>
        Table
        <p/>
        <table>
        {
			[1,2,3,4,5,6].map(each => {
				return <tr>
                    <td>Zeile {each}</td>
                    <td><Link to={`${each}`}>Link</Link></td>
                    <td><Link to={`data?id=${each}`}>Query-Link</Link></td>
				</tr>
			})
		}
        </table>
    </div>);
};

function Detail() {
    // URL-Parameter auslesen
    const params = useParams();

    return (<div style={{backgroundColor: "#b3f8ee", margin: "1rem"}}>
        Detail for {params.dataId}
    </div>);
};

function DetailQuery() {
    // Query-Parameter auslesen
    const [searchParams] = useSearchParams();
    const queryId = searchParams.get("id");

    return (<div style={{backgroundColor: "#b3f8ee", margin: "1rem"}}>
        Query-Detail for {queryId}
    </div>);
};

function About() {
    return (<div style={{backgroundColor: "#f1c5f9", margin: "1rem"}}>
        About
    </div>);
};

/**
 * Demonstriert den Umgang mit setSearchParams.
 * @returns JSX
 */
function QueryDemo() {
    
    const [searchParams, setSearchParams] = useSearchParams();

    return (<div>
        <label htmlFor="filter">Filter:</label>
        <input
          id="filter"
          type="text"
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            const filter = event.target.value;
            if (searchParams.has("filter")) {
                searchParams.set("filter", filter);
            } else {
                searchParams.append("filter", filter);
            }
            setSearchParams(searchParams);
          }}
        />
        <label htmlFor="search">Suche:</label>
        <input
          id="search"
          type="text"
          value={searchParams.get("mysearch") || ""}
          onChange={(event) => {
            const mysearch = event.target.value;
            if (searchParams.has("mysearch")) {
                searchParams.set("mysearch", mysearch);
            } else {
                searchParams.append("mysearch", mysearch);
            }
            setSearchParams(searchParams);
          }}
        />
    </div>);
};
