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
};

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
};

export function EventSimple() {

    const handleOk = () => {
        console.log("ok clicked");
    };

    return <button onClick={handleOk}>OK</button>;
};

export function EventSimple2() {

  // const handleOk = () => {
  //     console.log("ok clicked");
  // };

  return <button onClick={() => console.log("ok clicked")}>OK</button>;
};

export function EventSimple3() {

  return (
      <button 
          onClick={() => {
              console.log("ok clicked")
          }}>
          OK
      </button>);
};

export function EventExtern() {
	return <button onClick={handleOkClick}>OK</button>;
};

function handleOkClick() {
	console.log("ok clicked");
};

export function EventTyped() {

    const handleOk: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        console.log("ok clicked: " + event.type);
    };

    return <button onClick={handleOk}>OK</button>;
};

export function EventTyped2() {

    const handleOk = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log("ok clicked: " + event.type);
    };

    return <button onClick={handleOk}>OK</button>;
};

export default function EventTypedLoop() {

    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, 
			count: number) => {
        console.log("clicked: " + count);
    };

    return (<>
		{
			[1,2,3,4,5,6].map(each => {
				return <button onClick={(event) => handleClick(event, each)} >
					Click {each}
				</button>
			})
		}
	</>);
};

export function EventTypedLoop2() {

    const handleClick = (count: number) => {
        console.log("clicked: " + count);
    };

    return (<>
      <p/>
		{
			[1,2,3,4,5,6].map(each => {
				return <button onClick={() => handleClick(each)} >Click {each}</button>
			})
		}
	</>);
};

export function EventTypedLoop3(props: EventProps) {
    return (<>
		{
			[1,2,3,4,5,6].map(each => {
				return (<button onClick={() => props.onClick?.(each)} >
					Click {each}
					</button>);
			})
		}
	</>);
};

interface EventProps {
	onClick?: (count: number) => void
};
export function EventTypedLoopUser(props: EventProps) {
	
	return <EventTypedLoop3 onClick={props.onClick} />;
};

