import { useState, useEffect } from 'react';

export function Effect() {
    const [count, setCount] = useState(0);

    // Lifecycle Funktion, wird bei jeder Änderung aufgerufen.
    useEffect(() => {
      // Titel ändern
      document.title = `You clicked ${count} times`;  
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
};
