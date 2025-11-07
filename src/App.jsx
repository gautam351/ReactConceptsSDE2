import {BrowserRouter as Router, Routes, Route,HashRouter} from 'react-router-dom' 
import './App.css'
import Home from './components/Home'
import LazyLoading from './components/LazyLoading'

function App() {
  

  return (
    <>
    <HashRouter >
    <Routes>
      <Route path='/' element={<Home  />}/>
      <Route path="/lazyLoadingDemo" element={<LazyLoading  />} />


    </Routes>

    </HashRouter>
    </>
  )
}

export default App
