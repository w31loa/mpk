import { FC } from "react"
import {Outlet} from 'react-router-dom'
import Header from '../components/Header'
import Footer from "../components/Footer"

const Layout:FC = () => {
  return (
    <div className="min-h-screen    text-white m-auto">
        <Header/>
        <div className=" m-auto  rounded-b-lg min-h-[100vh] relative">
        {/* //показывает куда мы будем встраивать остльные компоненты  */}
            <Outlet/> 
        </div>
        <Footer/>
    </div>
  )
}

export default Layout