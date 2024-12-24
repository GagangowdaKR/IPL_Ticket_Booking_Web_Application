import React from 'react'
import Navbar from '../../components/common/Navbar'
import Latest from '../../components/common/Latest'
import MatchList from '../../components/common/MatchList'

function Home() {
  return (
    <div>
      <Navbar/>
      <Latest/>
      <MatchList/>
    </div>
  )
}

export default Home
