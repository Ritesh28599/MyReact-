import React from 'react'
import Api from './Components/Api'
import Todo from './Components/Todo'
import Form from './Components/Form'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Error from './Components/Error'
import Apifetch from './Components/Apifetch'


const App = () => {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Navbar/>}/>
      <Route path='/Api' element={ <Api/>}/>
      <Route path='/Apifetch' element={ <Apifetch/>}/>

      <Route path='/Todo' element={ <Todo/>}/>
      <Route path='/Form' element={ <Form/>}/>
      <Route path='*' element={ <Error/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
