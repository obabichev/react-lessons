import React from 'react';
import './App.css';

function App() {

    return (
        <div className="App">
            <Name name="Oleg" abc={123} u={new Date()}/>
            <Name name="Oleg2"/>
            <Name name="Oleg4"/>
            <Name name="Oleg6"/>
            <Name name="Oleg8"/>
            <Name/>
        </div>
    );
}

// <Name name="Oleg" />
// ===
// React.createElement(
//     Name,
//     {
//         name: 'Oleg'
//     }
// );

function Name(props) {

    console.log('[obabichev] props', props);

    // const name = 'Your name';

    return React.createElement(
        'div',
        {},
        ['Name:', props.name]
    )

    // return <div>
    //     Name: {props.name}
    // </div>;
}

export default App;
