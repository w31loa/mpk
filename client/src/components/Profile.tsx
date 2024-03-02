import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  logout } from '../store/reducers/user.reducer'

const ProfileComponent:FC<any> = ({setIsAuth}) => {

    const dispatch = useDispatch()
    const {user, isAuth} = useSelector(state=>{
        return state.user
    })

    const btnHandler = ()=>{
      dispatch(logout())
    }

  return (
    <div className='flex w-full justify-between mt-10'>
        <div className="text-black">Профиль</div>
        <button  className='btn btn-red' onClick={btnHandler}  >Выйти</button>
    </div>
  )
}

export default ProfileComponent