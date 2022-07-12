import React from 'react' 

export default function Projects(){
    return(
        <>
            <input type="text" id = "project-name" name = "project-name" placeholder="Project Name"/>
            <input type="text" id = "project-description" name = "project-description" placeholder="Project Description"/>
            <input type="text" id = "project-date" name = "project-date" placeholder="Date of Completion"/>
        </>
    )
}