import { FC } from "react"
import {Link} from 'react-router-dom'
import Tile from "../components/Tile"

const arr = [1,2,3,4,5,6]


const  ProductsCategories:FC = () =>{
  return (
    <>
      <div className="flex justify-center text-red-800 text-5xl font-medium">Наша продукция</div>

      <div className="flex justify-between flex-wrap gap-3">
            {arr.map((i)=>(
          <Tile title={"Категория продукции номер "} imageName={'cat1.jpg'} key={i} id={i} type={'products'}/>
          ))}
      </div>
    </>

  )
}

export default ProductsCategories