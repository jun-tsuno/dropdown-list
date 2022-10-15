import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCaretDown } from "@fortawesome/free-regular-svg-icons";
import './App.css';

const options = [
    {
        label: 'React.js',
        value: 'react'
    },
    {
        label: 'Vue.js',
        value: 'vue.js'
    },
    {
        label: 'Next.js',
        value: 'next.js'
    },
    {
        label: 'Angular',
        value: 'angular'
    }
]

const App = () => {
    const [selected, setSelected] = useState(options[0]);
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        document.body.addEventListener('click', (event)=> {
            if(ref.current.contains(event.target)) {
                return;
            }
            setIsOpen(false);
        }, { capture: true })
    }, []);

    const dropdownList = options.map(option => {
        if(selected === option) {
            return null;
        }
        return (
            <div
                className="item"
                key={option.value}
                onClick={() => setSelected(option)}
            >
                {option.label}
            </div>
        );
    });

    return (
        <div className="container">
            <label>Choose your preferable Library/Frame work...</label>
            <div
                ref={ref}
                className="itemList"
                onClick={()=> setIsOpen(!isOpen)}
            >
                <div className="item colum">
                    {selected.label}
                    <span className="icon">
                    <FontAwesomeIcon icon={faSquareCaretDown} />
                    </span>
                </div>
                <div className={`dropdown ${isOpen ? '' : 'isHidden'}`}>
                    {dropdownList}
                </div>
            </div>
        </div>
    );
}

export default App;