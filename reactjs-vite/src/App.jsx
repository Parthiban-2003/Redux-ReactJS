import { useState } from 'react'
import './App.css';
import Profile from './Features/Profile';
import FormsFeatures from './Features/FormsFeatures';
import ThemeColors from './Features/ThemeColor';

function App() {
  return (
    <>
      <Profile/>
      <FormsFeatures/>
      <ThemeColors/>
    </>
  )
}

export default App
