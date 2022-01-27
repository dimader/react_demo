import React, { useState } from 'react';

export default function MemoOverview() {
    return (<>
        <SimpleStateDemo />
    </>);
};

interface SimpleBlockProps {
    name: string
};
function SimpleStateBlock(props: SimpleBlockProps) {
    console.log("--called SimpleStateBlock: " + props.name);

    const [ count, setCount ] = useState(1);

    return (<>
        
        <p>SimpleBlock für {props.name}</p>
        <p>Count {count}</p>

        <input type="button" onClick={() => {
            setCount(prev => prev+1);
            }} value="Count" />
        <p/>
    </>);
};

const MemoizedSimpleStateBlock = React.memo(SimpleStateBlock);

// const MemoizedSimpleStateBlock = React.memo(SimpleStateBlock, areEqual);
// function areEqual(
//     prevProps: Readonly<SimpleBlockProps>, 
//     nextProps: Readonly<SimpleBlockProps>): boolean {
//     // code...
//     return false;
// };

function SimpleStateDemo() {
    const [ count, setCount ] = useState(1);
    const [ memoCount, setMemoCount ] = useState(1);

    return (<>
        <p>Konsolenausgabe öffnen um Effekt zu sehen.</p>
        <p>Zähler: {count}</p>
        <input type="button" onClick={() => {
            setCount(prev => prev+1);
            }} value="Count ++" />
        <p/>
        <input type="button" onClick={() => {
            setMemoCount(prev => prev+1);
            }} value="Memo Count ++" />
        <p/>
        <div style={{backgroundColor:"lightgray"}}>
            <SimpleStateBlock name={`SimpleStateBlock Zähler ${memoCount}`} /></div>
        <div style={{backgroundColor:"lightblue"}}>
            <MemoizedSimpleStateBlock name={`MemoizedSimpleStateBlock Zähler ${memoCount}`} /></div>
    </>);
};
