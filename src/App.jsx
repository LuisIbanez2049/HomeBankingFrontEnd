// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
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
import { useSelector } from 'react-redux'
import store from './redux/store'


// El componente App define la estructura de navegación de tu aplicación. Usa BrowserRouter para manejar la historia de navegación, 
// y Routes junto con Route para definir qué componente se muestra en cada URL. Las rutas anidadas y los parámetros dinámicos permiten 
// crear una navegación compleja y flexible.

function App() {



  const isLoggedIn = useSelector(store => store.authenticationReducer.isLoggedIn)


  return (
    <>
    {/* Componente de react Router, Es el contenedor principal para las rutas. Permite la navegación entre diferentes vistas sin recargar la página. */}
    <BrowserRouter>

    {/* Contiene todas las rutas que la aplicación manejará. Cada ruta está definida por un componente Route. */}
     <Routes>

     {/* Cada Route define una ruta URL específica y el componente React que se renderizará cuando la URL coincida. */}
      {/* Indico que la ruta base va a ser MainLayout que es un contenedor para otras vistas 
          Dentro de MainLayput las rutas estan anidadas y ependiendo de la ruta específica el Outlet definido en MainLayOut renderizará el 
          componente correspondiente*/}
       <Route path='/' element={<MainLayout/>}>

       {/* Con "index" indico que Home va a ser mi elemento principal. Es decir si no defino una ruta especifica en la url. MainLayout va a renderizar 
           el componente Home*/}
         <Route index element={<Home/>} className="main"></Route>

         {/* Aqui abajo agrego la ruta específica que va a recibir la url para renderizar una determinada vista y agrego el componente que se va a renderizar. 
         En este caso si pongo en la url: /applyCard --> Outlet va a renderizar "ApplyCard"*/}

         {
          isLoggedIn ? <>
          <Route path='/applyCard' element={<ApplyCard/>}></Route>
          <Route path='/accounts' element={<Accounts/>}></Route>
          <Route path='/transaction' element={<Transaction/>}></Route>
         <Route path='/loan' element={<Loan/>}></Route>
         <Route path='/cards' element={<Cards/>}></Route>
         {/* con ":id" defino un parametro de ruta. propiedad "id" va a almacenar la variable que le pase por la url*/}
         <Route path='/account/:id' element={<Account/>}></Route> 
          </> : <>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          </>
         }
         <Route path='*' element={<Navigate to={'/'} />} />

       </Route>
     </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
