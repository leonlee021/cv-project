import React from 'react'
import Education from './Education'
import Experience from './Experience'
import Projects from './Projects'
// import Personal from './Personal'
import Header from './Header'

export default function Info(){
    return(
        <>
            <h1 id="header-text">RESUME BUILDER</h1>
            <div id="cv-wrapper">
                <Header />
                <div id="cv-body">
                        <div id="cv-content">
                            <h4>________________________________________</h4>
                            <div className="section">
                                <h4>EDUCATION </h4>
                                <button type="button" className="add-button">ADD EDUCATION</button>
                            </div>
                            <Education />
                            <div className="section">
                                <h4>EXPERIENCE </h4>
                                <button type="button" className="add-button">ADD EXPERIENCE</button>
                            </div>
                            <Experience />
                            <div className="section">
                                <h4>PROJECTS </h4>
                                <button type="button" className="add-button">ADD PROJECT</button>
                            </div>
                            <Projects />
                    </div>
                </div>
            </div> 
        </>
    )
}