import { Fragment, useReducer, useState } from 'react';

export default function UseReducerOverview() {
    return (<>
        <UseReducerSimpleDemo />
    </>);
};

type MovieState = {
    movies: string[]
};

const initialState: MovieState = {
    movies: [] as string[]
};

function createMovieState(names: string[]): MovieState {
    return { movies: names };
};

type MovieAction = | 
    { type: 'add', name: string } | 
    { type: 'delete', name: string } | 
    { type: 'deleteAll' } |
    { type: 'reset' }
    ;

function movieReducer(state: MovieState, action: MovieAction): MovieState {
    switch(action.type) {
        case 'add':
            return { ...state, movies: [...state.movies, action.name] };
        case 'delete':
            return { ...state, movies: [ ...state.movies.filter(m => m !== action.name) ] };
        case 'deleteAll':
            return { ...state, movies: [] };
        case 'reset': 
            return createMovieState(['Snatch']);
        default:
            throw new Error();
    }
};

function UseReducerSimpleDemo() {

    // const [ state, dispatch ] = useReducer(movieReducer, initialState);
    const [ state, dispatch ] = useReducer(movieReducer, ['Snatch'], createMovieState);

    const [ movie, setMovie ] = useState('');
    
    return (
        <Fragment>

            <input type='text'
                value={movie}
                onChange={event => setMovie(event.target.value)}
                />

            <input type='button' 
                onClick={() => {
                        dispatch({ type: 'add', name: movie });
                        setMovie('');
                    }} 
                value='add' />
            <input type='button' 
                onClick={() => {
                        dispatch({ type: 'deleteAll' });
                    }} 
                value='reset' />

            <div>
                {state.movies.map((movie) => {
                    return (
                        <tr>
                        <td>{movie}</td>
                        <td><input type='button' value='Löschen'
                            onClick={() => dispatch({ type: 'delete', name: movie })} /></td>
                        </tr>
                        );
                })}
            </div>

        </Fragment>
    );
};
