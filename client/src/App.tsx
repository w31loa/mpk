import { RouterProvider } from "react-router-dom"
import { useEffect, useState } from 'react'
import { router } from './router/router'
import { toast } from "react-toastify"
import { getTokenFromLocalStorage } from "./helpers/localStorage.helper"
import { login, logout } from "./store/reducers/user.reducer"
import { useAppDispatch } from "./hooks/redux.hook"
import { instance } from "./api/axios.api"

function App() {
  const [count, setCount] = useState(0)

  const dispatch = useAppDispatch()

  const checkAuth = async()=>{
    const token = getTokenFromLocalStorage()
    try{  
        if(token){
          const data = await instance.get('/auth/profile')

          if(data){
            dispatch(login({user:{...data.data, access_token:token}}))
          }else{
            dispatch(logout())
          }
        }
    }catch(err:any){
      const error = err.response?.data.message
      toast.error(error.toString())
    }
  }

  useEffect(()=> { //чтобы функция вызывалась всегда
      checkAuth()
  }, [])

  return (
    <>
  
            <RouterProvider router={router}/>


    </>
  )
}

export default App
