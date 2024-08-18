// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/AccountComponent'
import ApplyCard from './pages/ApplyCard'
import Home from './pages/Home'
import MainLayout from './layouts/MainLayout'
import Account from './pages/Account'
import Register from './pages/Register'


function App() {

  return (
    <>

    <BrowserRouter>
     <Routes>
      {/* Indico que la ruta base va a ser un layout, un elemento que engloba al resto el cual debe tener un outlet que va a renderizar lo que le pase por la ruta url*/}
       <Route path='/' element={<MainLayout/>}>

       {/* Con "index" indico que Home va a ser mi elemento principal */}
         <Route index element={<Home/>} className="main"></Route>

         {/* Aqui abajo agrego el nombre que va a recibir la url para renderizar una determinada vista y agrego el elemento que se va a renderizar. 
         En este caso si pongo en la url: /applyCard --> Outlet va a renderizar "ApplyCard"*/}
         <Route path='/applyCard' element={<ApplyCard/>}></Route>
         <Route path='/account' element={<Account/>}></Route>
         <Route path='/register' element={<Register/>}></Route>

       </Route>
     </Routes>
    </BrowserRouter>

    {/* <Header/>
    <Main/>
    <Footer/> */}
    </>
  )
}

export default App
