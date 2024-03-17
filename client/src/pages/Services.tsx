import { FC } from "react"
import Service from "../components/Tile"
import Tile from "../components/Tile"
import { useLoaderData, useParams } from "react-router-dom"
import { instance } from "../api/axios.api"
import { ICategory } from "../types/types"

const arr = [1,2,3]

export const servicesLoader = async ({params}:any)=>{
  console.log()
  const {data}= await instance.get(`/service-category/${params.categoryId}`)
  return data
} 

const  Services:FC<any> = () =>{
    const {categoryId} = useParams<{categoryId:string}>()

    
    const category = useLoaderData() as ICategory
    const services = category.services

  return (
    <div>
                  <img className="absolute -z-10 top-[-204px]" src="/home/head.webp" alt="" />
      <div className="container flex items-center h-[300px] mx-auto">
       <div className="text-white font-medium text-5xl  text-center  " >{category.title}</div>

      </div>

          <div className="flex justify-between flex-wrap container mx-auto mt-20" >
          {services?.map((service,i)=>(
         <Tile title={service.title} imageName={service.img} key={i} id={service.id} type={'service'}/>
        ))}
          </div>
    </div>
  )
}

export default Services