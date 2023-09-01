import React from "react";
import { useState } from "react";

const Form = ({handleData, handleFormSubmit}) => {
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        handleFormSubmit(true);
    }

    const handleName = (event) => {
        const value = event.target.value;
        // console.log(value);
        setName(value);
        handleData({ name: value, mobile, email });
    }
    const handleEmail = (event) => {
        const value = event.target.value;
        setEmail(value);
        handleData({ name, mobile, email:value });
    }
    const handleMobile = (event) => {
        const value = event.target.value;
        setMobile(value);
        handleData({ name, mobile:value, email });
    }


    return (
        <div className="formmain_container">
            <form className="form_container" onSubmit={handleSubmit}>
                <label>Name: </label>
                <input
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={handleName}
                    required>
                </input><br /><br />
                <label>Email: </label>
                <input
                    type="Email"
                    placeholder="Enter email"
                    value={email}
                    onChange={handleEmail}
                    required>
                </input><br /><br />
                <label>Mobile: </label>
                <input
                    type="number"
                    placeholder="Enter number"
                    value={mobile}
                    onChange={handleMobile}
                    required>
                </input><br /><br />
            
                <button type="submit">Submit</button>
        </form>
        </div>
 )
        
}


export default Form;









// import React from 'react'

// const Form = () => {
//   return (
//     <div>Form</div>
//   )
// }

// export default Form