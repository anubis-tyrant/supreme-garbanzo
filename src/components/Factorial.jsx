import { useState } from "react";


export default function Factorial({ result, setResult }) {
    const [text, setText] = useState("");



    function factorials(n) {
        let val = n;
        let answer = 1;
        for (let i = 2; i <= val; i++) {
            answer *= i;
        }
        return answer;
    }




    return (
        <>
            <div className="output">
                <h1>Factorial</h1>
                <label className="my-4">Enter number to find factorial of</label>
                <input className="mb-3 form-control border border-dark" type="text" onChange={(e) => { setText(e.target.value) }} placeholder="Enter Number" defaultValue={""} key="fact_key" />
                <button type="button" className="btn btn-primary submit-output" onClick={() => { setResult(factorials(text)) }}>Submit</button>
                <label className="my-3" key="fact_res">{(result === "") ? result : "The Factorial is " + result}</label>


            </div>
        </>
    )
}