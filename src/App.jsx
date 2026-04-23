import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'

import Navbar from './layout/Navbar'
import Home from './Home'


function App() {



  return (
    <>
      <BrowserRouter>
        <Navbar/>

        <Routes>

          <Route 
            path='/'
            element={<Home />}

          ></Route>

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
