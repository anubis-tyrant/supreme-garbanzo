import { useState } from "react";


export default function Arithematic({ result, setResult }) {
    const [text, setText] = useState("");
    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [operation, setOperation] = useState("1");


    function handleSubmit() {
        const num1 = parseFloat(first);
        const num2 = parseFloat(second);
        switch (operation) {
            case "1":
                return num1 + num2;
            case "2":
                return num1 - num2;
            case "3":
                return num1 * num2;
            case "4":
                return num1 / num2;
        }
    }






    return (
        <>
            <div className="output">
                <h1>Arithematic Operations</h1>
                <label className="my-4 text-md">Enter number to find Arithematic of</label>
                <div className="input-group">
                    <input className="mb-3 d-block form-control border border-dark" type="text" onChange={(e) => { setFirst(e.target.value) }} placeholder="Enter First Number" defaultValue={""} key="first_key" />
                    <input className="mb-3 d-block form-control border border-dark" type="text" onChange={(e) => { setSecond(e.target.value) }} placeholder="Enter Second Number" defaultValue={""} key="second_key" />
                </div>

                <select className="form-select mb-4" aria-label="Default select example" value={operation} onChange={(e) => { setOperation(e.target.value) }}>
                    <option value="1">Addition</option>
                    <option value="2">Subtraction</option>
                    <option value="3">Multiplication</option>
                    <option value="4">Division</option>
                </select>

                <button type="button" className="btn btn-primary submit-output hover-shadow" onClick={() => { setResult(handleSubmit()) }}>Submit</button>
                <label className="my-3" key="arith_res">{result}</label>


            </div>
        </>
    )
}