import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Login } from './Components/Login/Login'
import {Button, MantineProvider} from '@mantine/core'

function App() {


  return (
    <MantineProvider 
    theme={{
      fontFamily: 'Open Sans, sans serif',
      spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
    }}>
    
      <Login/>
    
    </MantineProvider>
  )
}

export default App
