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
          <div className="flex justify-center text-red-800 text-4xl font-normal mt-10">{category.title}</div>

          <div className="flex justify-between flex-wrap">
          {products?.map((product, i)=>(
         <Tile title={product.title} imageName={product.img} key={i} id={product.id} type={'product'}/>
        ))}
          </div>
    </div>
  )
}

export default Products