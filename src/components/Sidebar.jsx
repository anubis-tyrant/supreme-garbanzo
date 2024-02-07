


export default function Sidebar({ list, setFunc, setResult }) {
    return (
        <>
            <div className="sidebar">

                <ul>
                    {list.map((item, index) => {
                        return <li onClick={(e) => { setFunc(index); setResult("") }} key={index}><a href="#">{item["name"]}</a></li>
                    })}



                </ul>
            </div>
        </>
    )
}