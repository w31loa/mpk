import { useLoaderData, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { IMAGE_URL, instance } from '../api/axios.api'
import { IService } from '../types/types'



export const serviceLoader = async({params}:any) =>{
  console.log(params)
  const {data} = await instance.get(`/service/${params.serviceId}`)
  return data
}

export const Service = () => {
    const {serviceId} = useParams<{serviceId:string}>()

    const service = useLoaderData() as IService


    const btnHandler = ()=>{

    }


  return (
        
    <div className=' mt-10 border-2 py-[100px] px-[20px] bg-red-50/30 rounded-lg' >
      <div className="text-black text-5xl text-left mb-5 "> {service.title}</div>

          <div className="flex gap-[20%]">

             <img   width={'600px'} src={IMAGE_URL+service.img} alt="Sunset in the mountains"/>

              <div className="">
                    <div className="text-black text-3xl mb-10">{service.description}</div>
                    <div className="text-black text-2xl  mb-5"> Цена: {service.price} ₽ </div>
                    <button className='px-8 py-4 rounded-md bg-green-500 hover:bg-green-700 transition-colors' onClick={btnHandler}>Заказать</button>

              </div>

          </div>
    

        
     
    </div>

  )
}
