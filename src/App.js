import React from 'react';

import './App.scss';

// import logo from './logo.svg';

import Banner300x250 from './Banner300x250';
import Banner300x600 from './Banner300x600';


function App() {
    return (
        <div className="App">

            <Banner300x250 />
            <Banner300x600 />
{/* 
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Edit <code>src/App.js</code> and save to reload.</p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
            </header>
 */}
        </div>
    );
}

export default App;
