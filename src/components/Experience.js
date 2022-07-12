import React from 'react' 

export default function Experience(){
    return(
        <>
            <input type="text" id = "position" name = "position" placeholder="Position"/>
            <input type="text" id = "company" name = "company" placeholder="Company / Organization"/>
            <input type="text" id = "start-date" name = "start-date" placeholder="Start Date"/>
            <input type="text" id = "end-date" name = "end-date" placeholder="End Date"/>
            <input type="text" id = "exp-description" name = "exp-description" placeholder="Description"/>
        </>
    )
}