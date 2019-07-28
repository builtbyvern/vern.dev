import React, { useState, useEffect } from "react"
import "./About.scss"

function About(props) {
  const [text, setText] = useState('')
  const [title, setTitle] = useState('')

  useEffect(() => {
    if (props.data) {
      setText(props.data.content)
      setTitle(props.data.title)
    }
  }, [props])
  
  

  return (
    <section id='about'>
      <div className='container'>
        <div className="inner">
          <header className='sectionHeader'>
            <h1>{title}</h1>
          </header>
          <div className='content'>
            <p>
              {text}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
