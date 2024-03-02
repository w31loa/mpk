import { FC } from "react"
import Service from "../components/Tile"
import Tile from "../components/Tile"
import { useParams } from "react-router-dom"

const arr = [1,2,3]

const  Services:FC<any> = () =>{
    const {categoryId} = useParams<{categoryId:string}>()
  return (
    <div>
          <div className="flex justify-center text-red-800 text-4xl font-normal mt-10">Услуги с категории {categoryId}</div>

          <div className="flex justify-between flex-wrap">
          {arr.map((i)=>(
         <Tile title={"Услуга"} imageName={'service.jpg'} key={i} id={i} type={'service'}/>
        ))}
          </div>
    </div>
  )
}

export default Services