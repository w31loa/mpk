import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

export const Service = () => {
    const {serviceId} = useParams<{serviceId:string}>()

    const btnHandler = ()=>{
      toast.success('Услуга добавлена в корзину!')

    }


  return (
        
    <div className=' mt-10 border-2 py-[100px] px-[20px] bg-red-50/30 rounded-lg' >
      <div className="text-black text-5xl text-left mb-5 "> Service  {serviceId}</div>

          <div className="flex gap-[20%]">

             <img   width={'600px'} src={'../public/service.png'} alt="Sunset in the mountains"/>

              <div className="">
                    <div className="text-black text-3xl mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, labore itaque aliquam reiciendis cumque ipsa, veritatis facere a, rem repellendus sit sed! Odit consequatur nemo perferendis quia fuga fugiat voluptatem?</div>
                    <div className="text-black text-2xl  mb-5"> Цена: 100$</div>
                    <button className='px-8 py-4 rounded-md bg-green-500 hover:bg-green-700 transition-colors' onClick={btnHandler}>Заказать</button>

              </div>

          </div>
    

        
     
    </div>

  )
}
