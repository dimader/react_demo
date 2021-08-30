import React, { useState } from "react";
// import '../App.css';

/**
 * Das Erste Beispiel eines einfachen Wechselkurs-Rechners.
 * Es werden die notwendigen Daten im lokalen State abgelegt, eine Umrechnungsfunktion bereitgestellt
 * und mit JSX das Aussehen der App definiert.
 */
export function Converter() {

    const [name, setName] = useState("Bitcoin");
    const [exchange, setExchange] = useState("1.0");
    const [value, setValue] = useState("1.0");
    const [result, setResult] = useState("");

    const convert = () => {
        const newValue = parseFloat(exchange) * parseFloat(value);
        setResult(newValue.toString());
    };
    
    return ( <React.Fragment>
        <div className="Converter">
            
            <label>
                Crypto-Name:
            </label>
            <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
            
            <label>
                aktueller Wechselkurs:
            </label>
            <input type="text" name="kurs" value={exchange} onChange={e => setExchange(e.target.value)} />
            
            <label>
                Anzahl Coins:
            </label>
            <input type="text" name="name" value={value} onChange={e => setValue(e.target.value)} />
            
            <button onClick={() => convert()}>
                Berechnen
            </button>

        </div>

        <p />
        <label>Mit dem Wechselkurs von {exchange} sind deine {name}-Coins heute {result}€ Wert.</label>
    </React.Fragment>
    );
};


























export function Converter2() {

    const [name, setName] = useState("Bitcoin");
    const [exchange, setExchange] = useState("1.0");
    const [value, setValue] = useState("1.0");
    const [result, setResult] = useState("");

    const convert = () => {
        const newValue = parseFloat(exchange) * parseFloat(value);
        setResult(newValue.toString());
    };

    const valueNameChanged = (newValue: string) => {
        setName(newValue);
    };
    
    return ( <React.Fragment>
        <div className="Converter">
            
            {/* <label>
                Crypto-Name:
            </label>
            <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} /> */}
            <ConverterInputText text="Crypto-Name" onValueChanged={valueNameChanged} currentValue={name} />
            
            <label>
                aktueller Wechselkurs:
            </label>
            <input type="text" name="kurs" value={exchange} onChange={e => setExchange(e.target.value)} />
            
            <label>
                Anzahl Coins:
            </label>
            <input type="text" name="name" value={value} onChange={e => setValue(e.target.value)} />
            
            <button onClick={() => convert()}>
                Berechnen
            </button>

        </div>

        <p />
        <label>Mit dem Wechselkurs von {exchange} sind deine {name}-Coins heute {result}€ Wert.</label>
    </React.Fragment>
    );
};

interface ConverterInputTextProps {
    text: string,
    onValueChanged: (newValue: string) => void,
    currentValue: string
}
function ConverterInputText(props: ConverterInputTextProps) {
    // const [value, setValue] = useState("1.0");
    return (<React.Fragment>
        <label>
            {props.text}:
        </label>
        {/* <input type="text" name="name" value={value} onChange={e => setValue(e.target.value)} /> */}
        <input type="text" name="name" /*value={value}*/ value={props.currentValue} onChange={e => props.onValueChanged(e.target.value)} />
    </React.Fragment>
    );
};