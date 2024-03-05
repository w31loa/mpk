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
    <>
      <div className="flex justify-center text-red-800 text-5xl font-medium">Наша продукция</div>

      <div className="flex justify-between flex-wrap gap-3">
            {categories.map((el , i)=>(
          <Tile title={el.title} imageName={el.img} key={i} id={el.id} type={'products'}/>
          ))}
      </div>
    </>

  )
}

export default ProductsCategories