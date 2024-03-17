import React, { useContext } from 'react'
import BasketTable from '../components/basket/BasketTable'
import { useDispatch, useSelector } from 'react-redux'
import { useLoaderData } from 'react-router-dom'
import { instance } from '../api/axios.api'
import { IBasket } from '../types/types'
import { useAuth } from '../hooks/useAuth.hook'
import Auth from '../components/Auth'
import Modal from '../components/Modal'
import { ModalContext } from '../context/modal.context'
import OrderForm from '../components/OrderForm'


export const basketLoader = async ({params})=>{
    const {data} = await instance.get(`/basket/${params.userId}`)
    return data
}

const Basket = () => {

  
  const isAuth = useAuth()
  const {modal, close, open} = useContext(ModalContext)


  const basket = useLoaderData() as IBasket[]




  const openModalHandler = () => open()
  
  const сloseModalHandler = () => close()

  return (
<>

  {
    isAuth?(
      <div className="">
              <img className="absolute -z-10 top-[-204px]" src="/home/head.webp" alt="" />
          <div className="container flex items-center h-[300px] mx-auto">
          <div className="text-white font-medium text-5xl  text-center  " >Корзина</div>

          </div>


          <div className='text-black container mx-auto mt-[55px]'>
          
          <div className="relative overflow-x-auto shadow-md sm:rounded-none">
            <BasketTable basket={basket}/>
          </div>
          <div className="flex justify-end ">
            <button  onClick={openModalHandler} type="button" className="bg-black text-white p-5">Оформить заказ</button>
          </div>
      </div>
 

      {
        modal&&
                <Modal title='Оформление заказа' onClose={сloseModalHandler}>
                    <OrderForm/>
                </Modal>
      }

    </div>
    ):
    (
      <Auth/>
    )
  }

</>
    

  )
}

export default Basket