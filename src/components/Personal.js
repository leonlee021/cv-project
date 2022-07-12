import React from "react"

export default function Personal(props){
    // const {handleClick} = props;
    return (
        <>
            <div className="form-popup">
                <form id="personal-form">
                    <input className = "personal" type="text" id = "name" name = "name" placeholder="Name"/>
                    <input className = "personal" type="text" id = "address" name = "address" placeholder="Address"/>
                    <input className = "personal" type="text" id = "phone-number" name = "phone-number" placeholder="Phone Number"/>
                    <input className = "personal" type="email" id = "email" name = "email" placeholder="Email"/>
                </form>
                {/* <button type="button" className="close-personal-edit" onClick={handleClick}>CLOSE EDIT</button> */}
            </div>
        </>
    )
}