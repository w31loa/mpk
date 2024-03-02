import { FC } from "react"
import Tile from "../components/Tile"
import { useParams } from "react-router-dom"

const arr = [1,2,3]

const  Products:FC<any> = () =>{
    const {categoryId} = useParams<{categoryId:string}>()
  return (
    <div>
          <div className="flex justify-center text-red-800 text-4xl font-normal mt-10">Товары с категории {categoryId}</div>

          <div className="flex justify-between flex-wrap">
          {arr.map((i)=>(
         <Tile title={"Продукт"} imageName={'cat1.jpg'} key={i} id={i} type={'product'}/>
        ))}
          </div>
    </div>
  )
}

export default Products