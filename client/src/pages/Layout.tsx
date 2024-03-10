import { FC } from "react"
import {Outlet} from 'react-router-dom'
import Header from '../components/Header'
import Footer from "../components/Footer"

const Layout:FC = () => {
  return (
    <div className="min-h-screen  pb-20 font-roboto text-white m-auto">
        <Header/>
        <div className="container m-auto bg-slate-200  pt-10 rounded-b-lg px-10 min-h-[100vh] relative">
        {/* //показывает куда мы будем встраивать остльные компоненты  */}
            <Outlet/> 
        <Footer/>
        </div>
    </div>
  )
}

export default Layout