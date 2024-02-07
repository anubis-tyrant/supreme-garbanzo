import { useState } from "react";

export default function OddEven({ result, setResult }) {
    const [text, setText] = useState("");

    function isOddOrEven(number) {
        if (number % 2 === 0) {
            return "Even";
        } else {
            return "Odd";
        }
    }


    return (
        <>
            <div className="output">
                <h1>Odd or Even</h1>
                <label className="my-4">Enter the number</label>
                <input className="mb-3 form-control border border-dark" type="text" onChange={(e) => { setText(e.target.value) }} placeholder="Enter Number" key="odd_key" defaultValue={""} />
                <button type="button" className="btn btn-primary submit-output" onClick={() => { setResult(isOddOrEven(text), " ") }}>Submit</button>
                <label className="my-3" key="odd_res">{(result === "") ? result : "The Number is " + result}</label>


            </div>
        </>
    )
}