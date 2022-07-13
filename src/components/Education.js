import React from 'react' 

export default function Education(){

    const [educationFormData, setEducationFormData] = React.useState(
        {
            school: "",
            degree: "",
            graduation: "",
        }
    )

    function handleChange(event){
        const {name, value} = event.target
        setEducationFormData(prevEducationFormData => {
            return{
                ...prevEducationFormData,
                [name] : value
            }
        })
    }
    const [edit, setEdit] = React.useState(false)

    function toggleEdit(){
        setEdit(prevState => !prevState)
    }

    return(
        <>
            <div className="section">
                <h4>EDUCATION </h4>
                <button type="button" className="add-button" onClick={toggleEdit}>{edit ? 'CLOSE EDIT' : 'EDIT'}</button>
            </div>
            <div className="section-content">
                <div className="section-top-row">
                    <div>{educationFormData.school ? educationFormData.school : 'University of X'}</div>
                    <div>{educationFormData.graduation ? educationFormData.graduation : 'Graduating June 2025'}</div>
                </div>
                <div>{educationFormData.degree ? educationFormData.degree : 'B.S. Computer Science'}</div>
            </div>
            {edit && 
                <div className="form-popup">
                    <form id="education-form">
                        <input type="text" id = "school" name = "school" placeholder="School" value={educationFormData.school} onChange={handleChange}/>
                        <input type="text" id = "degree" name = "degree" placeholder="Degree" value={educationFormData.degree} onChange={handleChange}/>
                        <input type="text" id = "graduation" name = "graduation" placeholder="Graduation Date" value={educationFormData.graduation} onChange={handleChange}/>
                    </form>
                </div>
            }
        </>
    )
}