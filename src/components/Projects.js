import React from 'react' 

export default function Projects(){
    return(
        <>
            <div className="section">
                <h4>PROJECTS </h4>
                <button type="button" className="add-button">ADD PROJECT</button>
            </div>
            <input type="text" id = "project-name" name = "project-name" placeholder="Project Name"/>
            <input type="text" id = "project-description" name = "project-description" placeholder="Project Description"/>
            <input type="text" id = "project-date" name = "project-date" placeholder="Date of Completion"/>
        </>
    )
}