import React from 'react';

import ExperimentRow from './components/ExperimentRow';

import './App.css';

function App() {
    return (
        <div className="app">
            <header className="app-header">
                <h1>Francesco Rizzi - D3 Experiments 📊🧪</h1>
            </header>
            <div className="app-body">
                <ExperimentRow title="Random letters">
                    <span>test</span>
                </ExperimentRow>
                <ExperimentRow title="Scatter plot">
                    <span>test</span>
                </ExperimentRow>
            </div>
        </div>
    );
}

export default App;
