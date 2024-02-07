import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.min.js"
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Test from './components/Test'
import Content from './components/Content'
import { useState } from 'react'

import Factorial from './components/Factorial'
import Fibonacci from './components/Fibonacci'
import OddEven from './components/OddEven'
import Arithematic from './components/Arithematic'


export default function App() {
    const [result, setResult] = useState("");
    const [list, setList] = useState([
        { "name": "Factorial", "comp": Factorial },
        { "name": "Fibonacci", "comp": Fibonacci },
        { "name": "OddEven", "comp": OddEven },
        { "name": "Arithematic", "comp": Arithematic }
    ]);


    const [selected, setSelected] = useState(0)
    return (
        <>
            <div className="header bg-primary">


                <div className="header-content">PHP Assignment - ARUN PRAKASH 211211101022</div>
            </div>

            <Sidebar list={list} setFunc={setSelected} setResult={setResult} />
            <Content list={list} selected={selected} result={result} setResult={setResult} />



        </>
    )
}
