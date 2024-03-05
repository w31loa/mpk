import  { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../store/reducers/user.reducer'
import { toast } from 'react-toastify'

const Auth:FC<any> = ({setIsAuth})=> {

  const dispatch = useDispatch()
  const {user, isAuth} = useSelector(state=>{
      return state.user
  })

  const btnHandler = ()=>{
    dispatch(login({user:2}))
    toast.success('Вы успешно авторизировались!')

  }


  return (
    <div className='flex w-full justify-between mt-10'>

        <div className='text-black'>Auth form</div>
        <button  className='btn btn-red' onClick={btnHandler}  >Войти</button>
    </div>
   
  )
}

export default Auth