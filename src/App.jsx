import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './Components/Home'
 

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
