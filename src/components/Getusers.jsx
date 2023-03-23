import axios from "axios"
import { useEffect, useState } from "react"


export function Getusers() {
    const [Res, setRes] = useState([]);

    useEffect(()=>{
        geData()
    },[])

    const geData = async () => {
        try {
            const res = await axios.get("http://localhost:4000/getuser", { headers: { 'Content-Type': 'application/json' } });
            console.log(res)
            setRes(res.data)
        } catch (error) {
            // console.log('error+++', error)
            console.error(error.response.data);
        }
    }


    return (
        <>
        <div className="continer get-con">
            <div className="get-child">
            <div className="text-light">{Res.map((s) => (
                <p>Name:<span>{s.name}</span></p>
            ))}</div>
            <div className="text-light">{Res.map((s) => (
                <p>Email:<span>{s.email}</span> </p>
            ))}</div>
            <div className="text-light">{Res.map((s) => (
                <p>Message:<span>{s.message}</span> </p>
            ))}</div>
            <div className="container">
                <button className="btn btn-outline-primary" onClick={() => geData()} >Get Users</button>
            </div>
            </div>
            </div>
        </>
    )
}