import React, { setState } from 'react';
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


client.getEntries().then(entries => {
  entries.items.forEach(entry => {
    if(entry.fields) {
      console.log(entry.fields)
    }
  })
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
  ],
  headerFontFamily: [
    "Source Sans Pro", 
    'serif'
  ],
  bodyFontFamily: [
    'Source Serif Pro',
    'sans-serif'
  ]

})

typography.injectStyles()



function App() {
  return (
    <div id="frame">
      <Header />
      <About />
      <Experience />
      <Blah />
      <Footer />
    </div>
  );
}

export default App;
