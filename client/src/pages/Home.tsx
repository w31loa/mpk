import { FC } from "react"
import HomeCards from "../components/home/HomeCards"
import HomeSlider from "../components/home/HomeSlider"

const  Home:FC = () =>{
  return (
    <div className="text-black">

      <div className="text-red-900 font-medium text-5xl mb-10 mt-10 text-center" >Металлургическая Промышленная Компания</div>
        {/* <HomeSlider/> */}
        <img src="/slider/11.png" className='w-[100%] my-20' alt="" />



        <HomeCards/>


        <div className=" flex  flex-col items-center">
          <div className="text-red-900 font-medium text-5xl my-10" >Нам доверяют</div>
          <img src="/home/clients.jpg" alt=""  className="mb-20"/>
          <div className="text-red-900 font-medium text-5xl w-1/2 my-10 text-center" >Мы являемся официальными дилерами и дистрибьютерами</div>
          <img src="/home/dis.jpg" className="mb-20" alt="" />
        </div>
    </div>
  )
}

export default Home