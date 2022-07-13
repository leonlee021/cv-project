import React from 'react'
import Education from './Education'
import Experience from './Experience'
import Projects from './Projects'
// import Personal from './Personal'
import Header from './Header'

export default function Info(){
    return(
        <>
            {/* <h1 id="header-text">RESUME BUILDER</h1> */}
            <div id="cv-wrapper">
                <Header />
                <div id="cv-body">
                        <div id="cv-content">
                            <h4>________________________________________</h4>
                            <Education />
                            <Experience />
                            <Projects />
                    </div>
                </div>
            </div> 
        </>
    )
}