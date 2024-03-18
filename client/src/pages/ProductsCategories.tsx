import { FC } from "react"
import {Link, useLoaderData} from 'react-router-dom'
import Tile from "../components/Tile"
import { instance } from "../api/axios.api"
import { ICategory } from "../types/types"



export const productCategoryLoader = async ()=>{
  const {data}= await instance.get('/product-category')
  return data
} 


const  ProductsCategories:FC = () =>{

  const categories = useLoaderData() as ICategory[]

  return (
    <div  className="mb-20">
      <img className="absolute -z-10 top-[-204px]" src="/home/head.webp" alt="" />
      <div className="container flex items-center h-[300px] mx-auto">
       <div className="text-white font-medium text-5xl  text-center  " >Наша продукция</div>

      </div>

      <div className="flex justify-between flex-wrap gap-3 container mx-auto mt-20">
            {categories.map((el , i)=>(
          <Tile title={el.title} imageName={el.img} key={i} id={el.id} type={'products'}/>
          ))}
      </div>
    </div>

  )
}

export default ProductsCategories