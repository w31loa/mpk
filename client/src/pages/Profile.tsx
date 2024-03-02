import React, { useState } from 'react'
import Auth from '../components/Auth'
import ProfileComponent from '../components/Profile'
import { useSelector } from 'react-redux'

const Profile = () => {
  const {user, isAuth} = useSelector(state=>{
    return state.user
  })
    
  return (
    <>
        {!!isAuth ? (<ProfileComponent/>)
        : (<Auth/>)}
    </>
  )
}

export default Profile