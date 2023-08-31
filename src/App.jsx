import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Display from './components/Display'

function App() {
  return (
    <BrowserRouter>
    <>
      <div>
        <Routes>
          <Route element={<Home/>} path="/home"/>
          <Route element={<Display/>} path="/:word"/>
          <Route element={<Display/>} path="/:word/:color/:bkgrnd"/>
        </Routes>

      </div>
    </>
    </BrowserRouter>
  )
}

export default App;
