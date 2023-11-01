import { useEffect, useState } from "react";

function StudentForm(props)
{

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [rollNo,setRollNo] = useState("");

    useEffect(()=>{
        setName(props.nameValue);
        setEmail(props.emailValue);
        setRollNo(props.rollNoValue);
    },[props.nameValue,props.emailValue,props.rollNoValue])

    const arr = [name,email,rollNo];  //arr= [Raj,raj@gmail.com,1]

    const handleClick = () => {
        props.getState(arr);
    }
    return(
        <div style={{maxWidth:"40%",margin:"0px auto",fontFamily:"Hind Siliguri"}}>
            <input defaultValue={props.nameValue} onChange={(event)=>setName(event.target.value)} class="form-control my-3" placeholder="Enter your name" required/>
            <input defaultValue={props.emailValue} onChange={(event)=>setEmail(event.target.value)} class="form-control my-3" placeholder="Enter your email" required/>
            <input defaultValue={props.rollNoValue} onChange={(event)=>setRollNo(event.target.value)} class="form-control my-3" placeholder="Enter your roll number" required/>
            <button onClick={handleClick} class="btn btn-success d-block mx-auto my-3" type="submit">{props.children} Submit</button>
        </div>
    )
}
export default StudentForm;

