import styles from './App.module.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details'
import ErrorPage from './pages/ErrorPage'

function App() {
 
  return (
    <div className={styles.container}>
      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/details/:id' element={<Details></Details>}></Route>
        <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </div>
  )
}

export default App