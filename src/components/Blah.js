import React, { useEffect } from 'react';

function Blah(props) {

  useEffect(() => {
    if (props.data) {
      console.log(props.data)
    }
  }, [props])

  return (
    <section id='recogntion'>
      <div className='container'>
        <div className='inner'>
          <header className='sectionHeader'>
            <h1>RECOGNITION</h1>
          </header>
          <div className='content'>
            <ul>
              {props.data && props.data.sort().map((item, index) =>
                <li key={index}>
                  Title: {item.title} <br />
                  Description: {item.description} <br />
                  Type: {item.type[0]}
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  ) 
}

export default Blah
