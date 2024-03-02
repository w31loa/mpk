import { FC } from "react"
import Tile from "../components/Tile"

const arr = [1,2,3,4,5,6]

const  ServicesCategories:FC = () =>{
  return (
    <div>
          <div className="flex justify-center text-red-800 text-5xl font-medium">Наши услуги</div>

          <div className="flex justify-between flex-wrap gap-3">
          {arr.map((i)=>(
              <Tile title={"Категория услуги номер"} imageName={'service.jpg'} key={i} id={i} type={'services'}/>
        ))}
          </div>
    </div>
  )
}

export default ServicesCategories