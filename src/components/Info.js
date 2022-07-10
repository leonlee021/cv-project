import React from 'react'
import Education from './Education'
import Experience from './Experience'
import Projects from './Projects'
import Personal from './Personal'

export default function Info(){
    return(
        <>
            <h1 id="header-text">RESUME BUILDER</h1>
            {/* <p>Fill in the sections below to generate your personalized CV!</p> */}
            <div id="cv-wrapper">
                <div id="cv-header">
                    <input className = "cv-header" type="text" id = "name" name = "name" placeholder="Name"/>
                </div>
                <div id="cv-body">
                        <div id="cv-personal">
                            <Personal />
                        </div>
                        <div id="cv-content">
                            <h4>________________________________________</h4>
                            <h4>EDUCATION</h4>
                            <Education />
                            <h4>EXPERIENCE</h4>
                            <Experience />
                            <h4>PROJECTS</h4>
                            <Projects />
                    </div>
                </div>
            </div> 
        </>
    )
}