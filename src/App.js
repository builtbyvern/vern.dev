import React, { useState, useEffect } from 'react';
import './App.scss';
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Blah from './components/Blah'
import Footer from './components/Footer'
import Typography from 'typography'

import * as contentful from 'contentful'

require('dotenv').config()

const apiKey = process.env.REACT_APP_CONTENTFUL_TOKEN


const client = contentful.createClient({
    space: 'q4qz5xlh5zno',
    accessToken: apiKey
})


const typography = new Typography({
  baseFontSize: '21px',
  googleFonts: [
    {
      name: 'Source+Sans+Pro',
      styles: [
        '400',
        '400i',
        '700',
        '700i',
      ],
    },
    {
      name: 'Fira+Sans',
      styles: [
        '400',
        '400i',
        '700',
        '700i',
      ],
    },
  ],
  headerFontFamily: [
    "Fira Sans", 
    'serif'
  ],
  bodyFontFamily: [
    'Fira Sans',
    'sans-serif'
  ]

})

typography.injectStyles()

function App() {
  const [data, setData] = useState(null)
  const [aboutContent, setAboutContent] = useState(null)
  const [experienceContent, setExperienceContent] = useState(null)
  const [skillzContent, setSkillzContent] = useState(null)
  const [achievementsContent, setAchievementsContent] = useState(null)

  // fetch data
  useEffect(() => {
    client.getEntries().then(entries => {
      setData(entries.items)
      /*
      entries.items.forEach(entry => {
        if (entry.fields) {
          setData(entry.fields)
        }
      })
      */
    })
  }, [])

  useEffect(() => {
    if (data) {
      let experience = []
      let skillz = []
      let achievements = []

      data.forEach(entry => {
        // console.log(entry.sys.contentType.sys.id)
        const entrydata = entry.fields

        switch (entry.sys.contentType.sys.id) {
          case 'about' :
            setAboutContent(entrydata)
            break
          case 'experience' : 
            experience.push(entrydata)
            break
          case 'skillz' :
            skillz.push(entrydata)
            break
          case 'achievements' : 
            achievements.push(entrydata)
            break
          default:
            return null
        }
      })

      setExperienceContent(experience)
      setAchievementsContent(achievements)
      setSkillzContent(skillz)
    }

  }, [data])

  return (
    <div id="frame">
      <Header />
      <About data={aboutContent} />
      <Experience data={experienceContent} />
      <Blah data={achievementsContent} />
      <Footer data={skillzContent} />
    </div>
  );
}

export default App;
