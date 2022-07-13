import React from 'react' 

export default function Projects(){
    const [projectsFormData, setProjectsFormData] = React.useState(
        {
            projectName: "",
            projectDescription: "",
            date: "",
        }
    )

    function handleChange(event){
        const {name, value} = event.target
        setProjectsFormData(prevProjectFormData => {
            return{
                ...prevProjectFormData,
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
                <h5>PROJECTS </h5>
                <button type="button" className="add-button" onClick={toggleEdit}>{edit ? 'CLOSE EDIT' : 'EDIT'}</button>
            </div>
            <div className="section-content">
                <div className="section-top-row">
                    <div><b>{projectsFormData.projectName ? projectsFormData.projectName : 'Resume Builder Project'}</b></div>
                    <div>{projectsFormData.date ? projectsFormData.date : 'June 2022'}</div>
                </div>
                <div>{projectsFormData.projectDescription ? projectsFormData.projectDescription : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum.'}</div>
            </div>
            {edit && 
                <div className="form-popup">
                    <form id="projects-form">
                        <input type="text" id = "projectName" name = "projectName" placeholder="Project Name" value={projectsFormData.projectName} onChange={handleChange}/>
                        <input type="text" id = "projectDescription" name = "projectDescription" placeholder="Description" value={projectsFormData.projectDescription} onChange={handleChange}/>
                        <input type="text" id = "date" name = "date" placeholder="Date" value={projectsFormData.date} onChange={handleChange}/>
                    </form>
                </div>
            }
        </>
    )
    }