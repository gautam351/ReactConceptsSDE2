import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import './App.css'
import Home from './components/Home'
import LazyLoading from './components/LazyLoading'

function App() {
  

  return (
    <>
    <Router basename='/ReactConceptsSDE2'>
    <Routes>
      <Route path='/' element={<Home  />}/>
      <Route path="/lazyLoadingDemo" element={<LazyLoading  />} />


    </Routes>

    </Router>
    </>
  )
}

export default App
