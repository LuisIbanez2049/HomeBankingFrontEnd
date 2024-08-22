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
import Accounts from './pages/Accounts'
import Register from './pages/Register'
import Login from './pages/Login'
import Transaction from './pages/Transaction'
import Loan from './pages/Loan'
import Cards from './pages/Cards'
import Account from './pages/Account'


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
         <Route path='/accounts' element={<Accounts/>}></Route>
         <Route path='/register' element={<Register/>}></Route>
         <Route path='/login' element={<Login/>}></Route>
         <Route path='/transaction' element={<Transaction/>}></Route>
         <Route path='/loan' element={<Loan/>}></Route>
         <Route path='/cards' element={<Cards/>}></Route>
         {/* ":id"  con los dos puntos indico que  "id" es una variable de ruta*/}
         <Route path='/account/:id' element={<Account/>}></Route> 

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
