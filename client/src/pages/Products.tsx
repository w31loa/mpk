import { FC } from "react"
import Tile from "../components/Tile"
import { useLoaderData, useParams } from "react-router-dom"
import { instance } from "../api/axios.api"
import { ICategory, IProduct } from "../types/types"





export const productsLoader = async ({params}:any)=>{
  console.log()
  const {data}= await instance.get(`/product-category/${params.categoryId}`)
  return data
} 


const  Products:FC<any> = () =>{
    const {categoryId} = useParams<{categoryId:string}>()

    const category = useLoaderData() as ICategory
    const products = category.products
  return (
    <div>
               <img className="absolute -z-10 top-[-204px]" src="/home/head.webp" alt="" />
      <div className="container flex items-center h-[300px] mx-auto">
       <div className="text-white font-medium text-5xl  text-center  " >{category.title}</div>

      </div>

          <div className="flex justify-between flex-wrap container mx-auto mt-20">
          {products?.map((product, i)=>(
         <Tile title={product.title} imageName={product.img} key={i} id={product.id} type={'product'}/>
        ))}
          </div>
    </div>
  )
}

export default Products