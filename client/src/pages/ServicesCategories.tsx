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
          <div className="flex justify-center text-red-800 text-5xl font-medium">Наши услуги</div>

          <div className="flex justify-between flex-wrap gap-3">
          {categories.map((category,i)=>(
              <Tile title={category.title} imageName={category.img} key={i} id={category.id} type={'services'}/>
        ))}
          </div>
    </div>
  )
}

export default ServicesCategories