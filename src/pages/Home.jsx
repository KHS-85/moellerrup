import React from 'react'
import Intro from './Intro'
import Nyheder from './Nyheder'
import Aktiviteter from './Aktiviteter'
import Outro from './Outro'
import Welcome from './Welcome'

const Home = () => {
    return (
        <div>
            <Intro/>
            <Welcome/>
            <Nyheder/>
            <Aktiviteter/>
            <Outro/>
        </div>
    )
}

export default Home
