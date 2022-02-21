import React, { useState } from 'react';

export default function RefCallbackOverview() {
    return (<>
        <RefDemo />
    </>);
};

interface InputBlockProps {
    refCallback: (node: HTMLInputElement) => void
};
function InputBlock(props: InputBlockProps) {
    const [visible, setVisible] = useState(true);

    return (<>
        
        <p>InputBlock</p>
        <input type="button" onClick={() => {
            setVisible(prev => !prev);
            }} value="Sichtbarkeit umschalten" />
        <p/>
        {visible && 
            <input ref={props.refCallback} type="search" />
        }
    </>);
};

function RefDemo() {
    
    const input = React.useRef<HTMLInputElement | null>(null);

    const inputElementCallback = (node: HTMLInputElement) => {
        console.log("inputElement changed: " + node);
        
        input.current = node;
        // node.getBoundingClientRect().height
    };

    return (<>
        <p>Konsolenausgabe öffnen um Effekt zu sehen.</p>
        
        <input type="button" onClick={() => {
            input.current?.focus();
            }} value="Fokus auf Input" />
        <p/>

        <div style={{ backgroundColor: "lightgray" }}>
            <InputBlock refCallback={inputElementCallback} />
        </div>

    </>);
};
