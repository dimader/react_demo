import React, { useState } from 'react';

export function StateCounter() {
    // Deklariere eine neue Variable:
    const [count, setCount] = useState(0);

    return (
      <div>
        <p>Du hast mich {count} mal geklickt</p>
        <button onClick={() => setCount(count + 1)}>
          Click
        </button>
      </div>
    );
}

export function StateCounterDouble() {
    
    const [count, setCount] = useState(0);
    const [secondCount, setSecondCount] = useState(0);

    return (
      <div>
        <p>Du hast mich {count} mal geklickt.</p>
        <button onClick={() => setCount(count + 1)}>
          Click
        </button>

        <p>Und mich {secondCount} mal geklickt!</p>
        <button onClick={() => setSecondCount(secondCount + 1)}>
          Click
        </button>
      </div>
    );
}