import React from 'react' 
import Personal from './Personal'

export default function Header(){
    const [edit, setEdit] = React.useState(false)

    function toggleEdit(){
        setEdit(prevState => !prevState)
    }

    return (
        <>
            <div id="cv-header" className = "cv-header">
                <div>Name</div>
                <div id="cv-personal">
                    <div>Address</div>
                    <div>Phone Number</div>
                    <div>Email</div>
                </div>
            <button type="button" className="edit-name" onClick={toggleEdit}>EDIT</button>
            {edit && <Personal handleClick = {toggleEdit} />}
            </div>
        </>
    )
}