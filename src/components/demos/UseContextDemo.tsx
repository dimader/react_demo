import React, { useState, useReducer, useContext, ChangeEvent } from 'react';

/*
 * Einfaches Beispiel für einen Context mit einem Reducer.
 */

type StateType = {
    infos: string[]
};

/**
 * Discriminated union type.
 * https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types
 */
type ActionType =
    | { type: "add", data: string }
    | { type: "pop" }
    ;

function reducer(state: StateType, action: ActionType): StateType {
    switch (action.type) {
        case "add":
            return {
                ...state,
                infos: [ ...state.infos, action.data ]
            };
        case "pop":
            const copy = 
            {
                ...state,
                infos: [ ...state.infos ]
            };
            copy.infos.pop();
            return copy;
        default:
            return state;
    }
};

const initialState: StateType = {
    infos: []
};

type InfoContextType = {
    state: StateType,
    dispatch: React.Dispatch<any>
};

export const InfoContext = React.createContext<InfoContextType>({
    state: initialState,
    dispatch: () => null
});

// Mit Null Type
// export const InfoContext = React.createContext<InfoContextType | null>(null);

// Ohne Typangabe
// export const InfoContext = React.createContext({
//     state: initialState,
//     dispatch: () => null
// });

const InfoContextProvider = (props: React.PropsWithChildren<{}>) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    return (
        <InfoContext.Provider value={{state, dispatch}}>
          {props.children}
        </InfoContext.Provider>
        );
};

export default ContextDemo;

/**
 * Demo Anwendung für Context.
 * @returns Anwendungsgerüst
 */
function ContextDemo() {
    return (<>
        <InfoContextProvider>
            <InfosOverview />
        </InfoContextProvider>
    </>);
};

function InfosOverview() {

    const { state, dispatch } = useContext(InfoContext);

    const [ newItem, setNewItem ] = useState("");

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNewItem(event.target.value);
    };
    const handleCreateNew = () => {
        dispatch( { type: "add", data: newItem } );
        setNewItem(""); // zurücksetzen nach der Neuanlage
    };
    const handlePop = () => {
        dispatch( { type: "pop" } );
    };

    return (<>
        <p>Übersicht:</p>

        <input id="info" type="text" name="info" placeholder="Neuen Eintrag anlegen..."
            value={newItem}
            onChange={handleInputChange}
            />
        <input type="button" onClick={handleCreateNew} value="Anlegen" />
        <input type="button" onClick={handlePop} value="Pop" />

        <p/>

        { state.infos.map(each => {
            return <> <p/> {each} </>;
        })}

    </>);
};
