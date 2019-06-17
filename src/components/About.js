import React from "react"
import "./About.scss"

function About() {
  // https://github.com/adobe-fonts/source-sans-pro/releases/tag/variable-fonts
  
  return (
    <section id='about'>
      <div className='container'>
        <div className="inner">
          <header className='sectionHeader'>
            <h1>About Me / TLDR;</h1>
          </header>
          <div className='content'>
            <p>
              A seasoned (but not grizzled) front-end developer and talented UX designer with a broad range of work experience – from large corporations to underdogs–all the while engaging new audiences and picking up a handful of awards. I thrive on interactive story-telling, love learning new technologies and have a fondness for the oxford comma.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
