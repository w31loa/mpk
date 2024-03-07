import React, { useState } from 'react'
import Auth from '../components/Auth'
import { useSelector } from 'react-redux'
import { useAuth } from '../hooks/useAuth.hook'
import { useNavigate } from 'react-router-dom'

const Profile = () => {

    
  return (
    <>
       <Auth/>
    </>
  )
}

export default Profile