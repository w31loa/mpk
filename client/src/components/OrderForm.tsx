import React, { useState } from 'react'
import { Form } from 'react-router-dom'
import { InputMask } from 'primereact/inputmask';
import Selector, { IServiceSelector } from './selector/Selector';
import { useUser } from '../hooks/useUser.hook';
import { instance } from '../api/axios.api';
import { toast } from 'react-toastify';

const OrderForm = ({serviceId}) => {

    const user = useUser()
    const [number,setNumber] = useState('')
    const [name, setName] = useState('')
    const [comment, setComment] = useState('')
    const [selectedService, setSelectedService] = useState<IServiceSelector | null>(null);

    const sendBtnHandler = async()=>{
      
      
        const date = new Date(Date.now())

    
        const data = {
          phoneNumber: number,
          name: name, 
          description: comment,
          date: date.toISOString(),
          userId: user?.id,
          serviceId: selectedService?.id || serviceId
        }

    
        instance.post('/request' , data)
        toast.success('Заявка отправлена!')
        

    }

  
  return (
    <div>
        <Form>
          <div className="p-5">
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
              
              {
                !serviceId&&(
                    <div className="mb-5">    
                      <label htmlFor="email" className="block mb-2 text-xl font-medium text-gray-900">Услуга</label>
          
                      <Selector selectedService={selectedService} setSelectedService={setSelectedService}/>
                  
                    </div>
                )
              }
        
              <div className="mb-5">    
                <label htmlFor="email" className="block mb-2 text-xl font-medium text-gray-900">Комментарий к заказу</label>
      

                  
                <textarea  onChange={(e)=>{setComment(e.target.value)}} 
                  rows={5} 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-10" placeholder="Комментарий" name="postContent" />
              
              </div>
          </div>
      

            <button  onClick={sendBtnHandler} type="button" className="btn-black text-white text-xl py-5 w-full">Отправить!</button>

        </Form>
    </div>
  )
}

export default OrderForm