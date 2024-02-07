import { useState } from "react";


export default function Fibonacci({ result, setResult }) {
    const [text, setText] = useState("");



    function fibonaccis(n, delimiter) {
        let fibSeries = [];
        if (n === 0) {
            return fibSeries.join(delimiter);
        }
        fibSeries.push(0);
        if (n === 1) {
            return fibSeries.join(delimiter);
        }
        fibSeries.push(1);
        for (let i = 2; i < n; i++) {
            fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
        }
        return fibSeries.join(delimiter);
    }



    return (
        <>
            <div className="output">
                <h1>Fibonacci</h1>
                <label className="my-4">Enter the size of Fibonacci series</label>
                <input className="mb-3 form-control border border-dark" type="text" onChange={(e) => { setText(e.target.value) }} placeholder="Enter Number" defaultValue={""} key="fibo_key" />
                <button type="button" className="btn btn-primary submit-output" onClick={() => { setResult(fibonaccis(text), " ") }}>Submit</button>
                <label className="my-3" key="fibo_res">{(result === "") ? result : "The Fibonacci series is " + result}</label>


            </div>
        </>
    )
}