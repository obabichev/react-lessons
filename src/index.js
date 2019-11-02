import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const css = {
    name: "your-generated-class-name"
};

/*
//Equivalents

const el = <div>
    <a href="http://google.com">This is link</a>
</div>;

const ell = React.createElement(
    'div',
    {},
    React.createElement(
        'a',
        {
            href: 'http://google.com'
        },
        'This is link'
    )
);*/

/*
Fill the difference

React.createElement(
    App
);

React.createElement(
    "div"
);*/

/*
console.log('[obabichev] a', <div>Hallo</div>);
{
    $$typeof: Symbol(react.element)
    key: null
    props: {children: "Hallo"}
    ref: null
    type: "div"
    _owner: null
    _store: {validated: false}
    _self: null
    _source: {fileName: "/Users/obabichev/tmp/test-project/test-app/src/index.js", lineNumber: 41}
    __proto__: Object
}
*/

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
