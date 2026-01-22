import React from 'react'
import Header from './components/Header'
import Profile from './components/Profile'
import Footer from './components/Footer'
import Stats from './components/Stats'
import Data from './components/Data'

function App() {
  

  return (
    <>
      <Header/>
      <Profile name="Venkatesh" role="SDE (developer)"/>
      <Stats followers={120} posts={10}/>
      <Data/>
      <Footer/>
    </>
  )
}

export default App
