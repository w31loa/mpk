import React, { useState } from 'react'
import { Form } from 'react-router-dom'
import { InputMask } from 'primereact/inputmask';
import Selector from './selector/Selector';

const OrderForm = () => {

    const [number,setNumber] = useState('')
    const [name, setName] = useState('')
    const [comment, setComment] = useState('')

  return (
    <div>
        <Form>
        <div className="mb-5">    
              <label htmlFor="email" className="block mb-2 text-xl font-medium text-gray-900">Номер телефона</label>

              <InputMask className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-10" value={number} onChange={(e:any) => setNumber(e.target.value)}mask="+7(999) 999-9999" placeholder="+7(999) 999-9999"/>

              </div>   <div className="mb-5">    
              <label htmlFor="email" className="block mb-2 text-xl font-medium text-gray-900">Как к вам обращаться</label>
              <input
                onChange={(e)=>{
                    setName(e.target.value)
                }}
               type="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-10" placeholder="Иван Иванов" required />
            </div>   

            <div className="mb-5">    
              <label htmlFor="email" className="block mb-2 text-xl font-medium text-gray-900">Услуга</label>
     
                <Selector/>
            
            </div>
            <div className="mb-5">    
              <label htmlFor="email" className="block mb-2 text-xl font-medium text-gray-900">Комментарий к заказу</label>
     

                
               <textarea  onChange={(e)=>{setComment(e.target.value)}} 
                rows={5} 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-10" placeholder="Комментарий" name="postContent" />
            
            </div>

            <button  type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-lg text-xl w-full px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Отправить!</button>

        </Form>
    </div>
  )
}

export default OrderForm