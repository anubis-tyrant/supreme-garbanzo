



export default function Content({ list, selected, result, setResult }) {



    const Comp = list[selected]["comp"];


    return (
        <>
            <div className="content">
                <Comp result={result} setResult={setResult} />
                {/* {list[selected]["comp"]({ result: result, setResult: setResult })} */}
            </div>
        </>
    )
}