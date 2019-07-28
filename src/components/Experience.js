import React, { useEffect } from "react"

function Experience(props) {
  
  useEffect(() => {
    if (props.data) {
      let sortedData = [...props.data]
      sortedData.sort((a,b) => a.startDate - b.startDate)
      console.log(sortedData)
    }
    
  }, [props])

  return(
    <section id='experience'>
      <div className="container">
        <div className="inner">
          <header className="sectionHeader">
            <h1>EXPERIENCE</h1> 
          </header>
          <div className='content'>
            <ul>
              {props.data && props.data.sort((a, b) => b.order - a.order).map( (exp, index) => 
                <li key={index}>
                  Company: {exp.company} <br />
                  Title: {exp.title}<br />
                  Description: {exp.description} <br />
                  Start: {exp.startDate} <br />
                  End: {exp.endDate} <br />
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  ) 
}

export default Experience
