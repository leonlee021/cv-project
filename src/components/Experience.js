import React from 'react' 

export default function Experience(){
    const [experienceFormData, setExperienceFormData] = React.useState(
        {
            position: "",
            company: "",
            date: "",
            expDescription: ""
        }
    )

    function handleChange(event){
        const {name, value} = event.target
        setExperienceFormData(prevExperienceFormData => {
            return{
                ...prevExperienceFormData,
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
                <h5>EXPERIENCE </h5>
                <button type="button" className="add-button" onClick={toggleEdit}>{edit ? 'CLOSE EDIT' : 'EDIT'}</button>
            </div>
            <div className="section-content">
                <div className="section-top-row">
                    <div><em>{experienceFormData.position ? experienceFormData.position : 'Software Engineer Intern'}</em></div>
                    <div>{experienceFormData.date ? experienceFormData.date : 'May 2022 - August 2022'}</div>
                </div>
                <div><b>{experienceFormData.company ? experienceFormData.company : 'X Company'}</b></div>
                <div>{experienceFormData.expDescription ? experienceFormData.expDescription : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum.'}</div>
            </div>
            {edit && 
                <div className="form-popup">
                    <form id="experience-form">
                        <input type="text" id = "position" name = "position" placeholder="Position" value={experienceFormData.position} onChange={handleChange}/>
                        <input type="text" id = "company" name = "company" placeholder="Company" value={experienceFormData.company} onChange={handleChange}/>
                        <input type="text" id = "date" name = "date" placeholder="Start and End Date" value={experienceFormData.date} onChange={handleChange}/>
                        <input type="text" id = "expDescription" name = "expDescription" placeholder="Description" value={experienceFormData.expDescription} onChange={handleChange}/>
                    </form>
                </div>
            }
        </>
    )
    }