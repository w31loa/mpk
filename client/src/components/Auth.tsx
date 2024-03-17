import  { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IUser, login } from '../store/reducers/user.reducer'
import { toast } from 'react-toastify'
import { Form, useNavigate } from 'react-router-dom'
import { instance } from '../api/axios.api'
import { useAppSelector } from '../hooks/redux.hook'
import { setTokenToLocalStorage } from '../helpers/localStorage.helper'
import { useUser } from '../hooks/useUser.hook'




const Auth:FC<any> = ({setIsAuth})=> { 

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useUser

  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [isLogin, setIsLogin] = useState(true)


  const loginHandler = async (e:React.FormEvent<HTMLFormElement>)=>{
    
    e.preventDefault()

    try{
      const res = await instance.post<IUser>("/auth/login", {
        email,
        password
      })
  
      const data = res.data
      if(data){
          setTokenToLocalStorage('token', data.access_token)
          dispatch(login({user:data}))

          toast.success('Вы успешно авторизировались!')
          navigate(`/basket/${data.id}`)
      }else{
        toast.error('Неверные данные!')
       }
    }
    
    
    catch(err:any){
      const error = err.response?.data.message
      toast.error(error.toString())
    }  
} 

const registrationHandler = async(e:React.FormEvent<HTMLFormElement>)=>{
  try {
    e.preventDefault()
    const data = await instance.post('/user' ,  {email,password})
    if(data){
      toast.success('Аккаунт создан!')
      setIsLogin(!isLogin)
    }
  } catch (err:any) {
    const error = err.response?.data.message
    toast.error(error.toString())
  }
}
 
  


  return (
    <div className='flex w-full justify-between mt-10'>

        <form className="max-w-lg mx-auto" onSubmit={isLogin? loginHandler : registrationHandler}>
              <p className='text-2xl font-medium text-center mb-5 text-gray-900'>{isLogin?"Вход":"Регистрация"}</p>
            <div className="mb-5">    
              <label htmlFor="email" className="block mb-2 text-xl font-medium text-gray-900">Введите почту</label>
              <input
                onChange={(e)=>{
                  setEmail(e.target.value)
                }}
               type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-10" placeholder="name@flowbite.com" required />
            </div>
            <div className="mb-5">
              <label htmlFor="password" className="block mb-2 text-xl font-medium text-gray-900">Введите пароль</label>
              <input 
                    onChange={(e)=>{
                    setPassword(e.target.value)
                  }}
              type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-10" required />
            </div>


                <div className="flex justify-center mt-5">
              {
                isLogin?(
          
                  
                  <div className=" flex flex-col gap-3">
                      <button type="submit" className="btn btn-black  text-center text-lg " >Войти</button>
                      <button
                      onClick={()=> setIsLogin(!isLogin)} className="text-slate-600 hover:text-slate-400">
                          Создать аккаунт!
                      </button>        
                  </div>

                ) : (
          

                  <div className=" flex flex-col gap-3">
                  <button type="submit" className="btn btn-black text-lg ">Зарегестрироваться</button>
                    <button
                    onClick={()=> setIsLogin(!isLogin)} className="text-slate-600 hover:text-slate-400">
                        У меня уже есть аккаунт!
                    </button>

                  </div>
                )
              }
            </div>
          
       
        </form>

    </div>
   
  )
}

export default Auth