import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

export const Product = () => {
    const {productId} = useParams<{productId:string}>()



    const addBtnHandler= ()=>{

      // const newBasket = [
      //   {
      //     title: `Product${productId}`,
      //     coast: '100$'
      //   },
      // ]

      // toast.success('Товар добавлен в корзину!')

      // const basket = localStorage.getItem('backet')
      // localStorage.setItem('basket', newBasket)
      // localStorage.
    }

  return (

    
    
    <div className=' mt-10 border-2 py-[100px] px-[20px] bg-red-50/30' >
      <div className="text-black text-5xl text-left mb-5 "> Product  {productId}</div>

          <div className="flex gap-[20%]">

             <img   width={'600px'} src={'../public/cat1.jpg'} alt="Sunset in the mountains"/>

              <div className="">
                    <div className="text-black text-3xl mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, labore itaque aliquam reiciendis cumque ipsa, veritatis facere a, rem repellendus sit sed! Odit consequatur nemo perferendis quia fuga fugiat voluptatem?</div>
                    <div className="text-black text-2xl  mb-5"> Цена: 100$</div>
                    <button className='px-8 py-4 rounded-md bg-green-500 hover:bg-green-700 transition-colors' onClick={addBtnHandler} >Купить</button>

              </div>

          </div>
    

        
     
    </div>

  )
}
