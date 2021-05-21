
// Einfache Komponente
export function HalloWelt() {
    return <h1>Hallo Welt.</h1>;
}

export function HalloEarth() {
    return <h1>Hallo Earth.</h1>;
}

// interface für Komponente mit Übergabeparametern
interface IProps {
    name: string,
    sprache?: string
}
// Einfache Komponente mit Übergabeparametern
export function Hallo(props: IProps) {
    return <h1>Hallo {props.name}.</h1>;
}

// Kurzschreibweisen
export const Hallo2 = () => { return <h2>Hallo kleine Welt.</h2> };

export const Hallo3 = () => <h3>Hallo nochmal.</h3>;

