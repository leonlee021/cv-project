import React from 'react' 

export default function Header(){
    const [personalFormData, setPersonalFormData] = React.useState(
        {
            fullName: "",
            address: "",
            phone: "",
            email: "",
        }
    )

    function handleChange(event){
        const {name, value} = event.target
        setPersonalFormData(prevPersonalFormData => {
            return{
                ...prevPersonalFormData,
                [name] : value
            }
        })
    }

    const [edit, setEdit] = React.useState(false)

    function toggleEdit(){
        setEdit(prevState => !prevState)
    }

    return (
        <>
            <div id="cv-header" className = "cv-header">
                <div id="name-button-row">
                    <div id="cv-name"><b>{personalFormData.fullName ? personalFormData.fullName : 'Full Name'}</b></div>
                    <button type="button" className="edit-name" onClick={toggleEdit}>{edit ? 'CLOSE EDIT' : 'EDIT'}</button>
                </div>
                <div id="cv-personal">
                    <div>{personalFormData.address ? personalFormData.address : 'Address'}</div>
                    <div>{personalFormData.phone ? personalFormData.phone : 'Phone Number'}</div>
                    <div>{personalFormData.email ? personalFormData.email : 'Email'}</div>
                </div>
            {edit && 
                <div className="form-popup">
                    <form id="personal-form">
                        <input className = "personal" type="text" id = "fullName" name = "fullName" placeholder="Name" value={personalFormData.fullName} onChange={handleChange}/>
                        <input className = "personal" type="text" id = "address" name = "address" placeholder="Address" value={personalFormData.address} onChange={handleChange}/>
                        <input className = "personal" type="text" id = "phone" name = "phone" placeholder="Phone Number" value={personalFormData.phone} onChange={handleChange}/>
                        <input className = "personal" type="text" id = "email" name = "email" placeholder="Email" value={personalFormData.email} onChange={handleChange}/>
                    </form>
                </div>
            }
            </div>
        </>
    )
}