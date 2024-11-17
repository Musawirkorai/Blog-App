
import { useState, useEffect } from 'react'
import './App.css'
import {useDispatch} from "react-redux"
import authService from './appwrite/auth' 
import { login , logout } from './store/authSlice'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
// import {outlet} from 'react-router-dom'


function App() {
  const [loading , setLoading] = useState (true)

  const dispatch = useDispatch()
  useEffect(() => {
    authService.getCurrentUser()
    .then ((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=>{
      setLoading(false)

    })
  }, [])




  return  !loading ? (
    <div className='bg-black main-h-screen flex flex-wrap  content-between text-white'> 
      <div className='ww-full block'>
        <Header/>
        <main>
          TODO{/*outlet*/}
        </main>

        <Footer/>
      </div>
    </div>
  ) : null
  
  
  
  

 
}

export default App
