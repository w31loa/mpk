import { FC } from "react"
import {Outlet} from 'react-router-dom'
import Header from '../components/Header'

const Layout:FC = () => {
  return (
    <div className="min-h-screen  pb-20 font-roboto text-white m-auto">
        <Header/>
        <div className="container m-auto bg-slate-200 px-10 pt-10 pb-20 rounded-b-lg">
        {/* //показывает куда мы будем встраивать остльные компоненты  */}
            <Outlet/> 
        </div>

    </div>
  )
}

export default Layout