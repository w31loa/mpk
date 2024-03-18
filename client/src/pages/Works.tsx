import React from 'react'
import { IMAGE_URL, instance } from '../api/axios.api'
import { useLoaderData } from 'react-router-dom'

export interface IWorks{
  title: string
  img:string
}

export const worksLoader = async ()=>{
  const {data} = await instance.get('works')
  return data
}


const Works = () => {

  const works = useLoaderData() as IWorks[]


  return (
    <div>

<img className="absolute -z-10 top-[-204px]" src="/home/head.webp" alt="" />
          <div className="container flex items-center h-[300px] mx-auto">
          <div className="text-white font-medium text-5xl  text-center  " >Наши работы</div>

          </div>


        <div className="container mx-auto flex justify-between flex-wrap mt-28">


            {
              works.map((work, i)=>(
                <div className="">
                  <img src={IMAGE_URL+work.img} className=' transform   mb-5 w-96 hover:scale-[1.8] transition-transform'  alt="" />
                  <div className="text-black text-center font-medium text-lg max-w-[400px] px-2">{work.title}</div>
                </div>
         
              ))
            }
            
   

        </div>

    </div>
  )
}

export default Works