import { FC } from "react"
import Tile from "../components/Tile"
import { instance } from "../api/axios.api"
import { useLoaderData } from "react-router-dom"
import { ICategory } from "../types/types"




export const serviceCategoryLoader = async ()=>{
  const {data}= await instance.get('/service-category')
  return data
} 


const  ServicesCategories:FC = () =>{

  const categories = useLoaderData() as ICategory[]

  return (
    <div>
               <img className="absolute -z-10 top-[-204px]" src="/home/head.webp" alt="" />
      <div className="container flex items-center h-[300px] mx-auto">
       <div className="text-white font-medium text-5xl  text-center  " >Наши услуги</div>

          </div>

          <div className="flex justify-between flex-wrap gap-3 container mx-auto mt-20">
          {categories.map((category,i)=>(
              <Tile title={category.title} imageName={category.img} key={i} id={category.id} type={'services'}/>
        ))}
          </div>
    </div>
  )
}

export default ServicesCategories