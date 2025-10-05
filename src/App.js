import { useEffect, useState } from 'react';
// 外部套件
import axios from 'axios';

import logo from './assets/logo.svg';
import './assets/App.css';
import Input from './componets/Input';
import './assets/all.scss';

// axios

function App() {
    const [text, setText] = useState('');
    const onChangeHandler = (e) => {
        setText(e.target.value);
    }
    // console.log(process.env.REACT_APP_PATH);
    useEffect(() =>{
        (async () => {
            const response = await axios.get(process.env.REACT_APP_PATH);
            console.log(response);
        })();
    }, []);

    return (
        <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
            Learn React
            </a>
            <button type="button" className="btn btn-primary">Primary</button>
            {text}
            <Input id="sampleText" text="This is the text"
                value={text} onChangeHandler={onChangeHandler}/>
        </header>
        </div>
    );
}

export default App;
