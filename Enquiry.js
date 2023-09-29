import { useState } from "react";
import axios from "axios";
export default function Enquiry()
{
    const [name,setName] = useState("");
    const [phone,setPhone] = useState("");
    const [query,setQuery] = useState("");
    const [msg,setMsg] = useState("");

    const hName = (event) => { setName(event.target.value); }
    const hPhone = (event) => { setPhone(event.target.value); }
    const hQuery = (event) => { setQuery(event.target.value); }

    const se = (event) => {
        event.preventDefault();
        let data = { name, phone, query};
       // let url = "https://node-email-fy4r.onrender.com/se";
       let url = "http://localhost:9000/se"; 
       axios.post(url,data)
        .then( res => setMsg("we wil contact u"))
        .catch( err => setMsg("issue" + err) );    
    }

    return(
        <>
            <center>
                <h1> Fill the form </h1> 
                <form onSubmit={se}>
                    <input type="text" placeholder="enter ur name"
                    onChange={hName} value={name} />
                    <br/><br/>
                    <input type="number" placeholder="enter phone number"
                    onChange={hPhone} value={phone} />
                    <br/><br/>
                    <textarea placeholder="enter ur query" rows={3} cols={30}
                    onChange={hQuery} value={query} />
                    <br/><br/>
                    <input type="submit" />
                </form>
                <h1> { msg } </h1>
            </center>
        </>
    );   

}
