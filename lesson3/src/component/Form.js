
import { useState} from "react";
const Form=()=>{
    //
    const [value, setValue]= useState("Jogging");
    const handleSubmit=(event)=>{
        event.preventDefault()
        console.log("value:", value)

    };
    const handleSubmitChanged=(event)=>{
        setValue(event.target.value)
        // console.log(event.target.value)
        // setValue("") đây là khai báo để gtri rỗng
    }
    return(
    <form onSubmit={handleSubmit}> 
        <input type ="text" value={value} onChange={handleSubmitChanged}/>
        <button type="submit">Submit</button>

    </form>
    )
}
export default Form