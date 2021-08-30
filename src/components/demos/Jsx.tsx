
export function JsxLiteral() {

    const element = (
        <h1>
            Hello, world!
        </h1>);

    return element;
};

export function JsxLiteral2() {
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) => <li>{number}</li>);

    const element = (
        <ul>
            {listItems}
        </ul>);

    return element;
};

export function JsxTest() {
    const wrld = "Hallo Welt";
    const jsx2 = <span>{wrld}!</span>;
    
    const jsx3 = (
        <span>
            Hallo Welt!
        </span>);

    const jsx = <h1>{jsx2} {jsx3}</h1>;
    return jsx;
};

export function JsxTestMultiline() {
    const element = (
        <h1>
            Hello, world!
        </h1>);

    return (<h1>
        Hallo Welt.
    </h1>);
};

export function JsxTestComment() {
    // comment
    /* comment */
    const element = (
        <h1>
            { /* comment */ }
            Hello world! /* kein Kommentar! */
        </h1>);

    return element;
};

export default function JsxTestCode() {
    const element = (
        <h1>
            Hallo { format("Welt") } !
        </h1>);
    return element;
};

function format(text: string): JSX.Element {
    return <span>{text}</span>;
};
