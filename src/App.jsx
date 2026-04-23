import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-darker via-dark to-darker text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}
