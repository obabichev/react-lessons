import React from 'react';
import './App.css';

function App() {

    const a = 30;

    return (
        <div className="App">
            <Counter initialValue={a}/>
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


function TestClick() {

    const onClick = (e) => {
        console.log('[obabichev] was clicked', e);
    };

    return <button onClick={onClick}>Click me</button>
}


// function Counter(props) {
//     let count = 0;
//
//     const onClick = () => {
//         count++;
//         console.log('[obabichev] count', count);
//     };
//
//     return <div>
//         <div>
//             {count}
//         </div>
//         <button onClick={onClick}>Increment</button>
//     </div>
// }


class Counter extends React.Component {

    constructor(props) {
        super(props); // Вызывает конструктор родительского класса

        this.state = {
            counter: props.initialValue ? props.initialValue : 0
        }
    }

    onClick = () => {
        const oldCounter = this.state.counter;

        this.setState({
            counter: oldCounter + 1
        });

        // this.state.counter = oldCounter + 1;
    };

    render() {
        console.log('[obabichev] render');
        console.log('[obabichev] Counter.props', this.props);
        console.log('[obabichev] Counter.state', this.state);

        return <div>
            <DisplayCounter displayCounter={this.state.counter}/>
            {/*<div>*/}
            {/*    {this.state.counter}*/}
            {/*</div>*/}
            <button onClick={this.onClick}>Increment</button>
        </div>
    }
}

const DisplayCounter = (props) => {
    console.log('[obabichev] DisplayCounter.props', props);
    return <div>
        Counter: {props.displayCounter}
    </div>
};


class BanksList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            banks: []
        }
    }

    onClick = (e) => {
        // onChange: e.target.value -> текущее значение поля ввода для поля ввода

        this.setState({
            banks: [...this.state.banks,
                {
                    name: 'new-name'
                }]
        })
    };

    onDelete = (id) => {
        this.setState(
            {
                banks: this.state.banks.filter(bank => bank.id !== id)
            }
        )
    };

    render() {
        return <div>
            {this.state.banks.map(() => (<div>
                <button onClick={() => this.onDelete('id')}>Delete</button>
            </div>))}

            <button onClick={() => null}/>
            <input onChange={(e) => console.log(e.target.value)}/>
        </div>;
    }

}

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            bik: '',
            //....
        }
    }

    render() {
        return <form>
            Name: <input value={this.state.name}
                         onChange={e => this.setState({name: e.target.value})}/>
        </form>
    }
}

//TODO расписать домашнее задание
