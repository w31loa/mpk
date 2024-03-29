import React, { useState } from 'react'
import { IRequest } from '../../types/types'
import { instance } from '../../api/axios.api'
import { toast } from 'react-toastify'
import { formatDateFromIsoToLocal } from '../../helpers/date.helper'


interface IProps{
    request:IRequest
}

const statusBtnHandler = (id:number)=>{
    const data = {
        status: "DONE"
    }
    instance.patch(`request/${id}` , data)

    toast.success('Заявка закрыта')
}


const RequestTableRow = ({request}:IProps ) => {
    
    
    const [status, setStatus] = useState("Закрыть")
    let sum = 0

    request.basket.products.map(el=>{
        sum+=(Number(el.product.price)*el.count)
    })
     sum+= (request.service? Number( request.service.price) : 0)

  return (
    <tr className="border-b bg-gray-800 dark:border-gray-700">
        <th scope="row" className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {request.id}
        </th>
        <td className="px-6 py-4">
        {request.phoneNumber}
        </td>
        <td className="px-6 py-4">
        {request.name}
        </td>
        <td className="px-6 py-4 w-24">
        {request.description}
        </td>


        <td className="px-6 py-4">
            <ul>
                {
                    request.basket.products.map((el, i) => (
                        
                        <li>{el.product.title} - {el.count} m²</li>
                        
                    ))
                }
            </ul>
        
        </td>

      


        <td className="px-6 py-4">
            {
                request.service?(
                    <>{request.service.title}</>
                ):(
                    <>-</>
                )
            }
        </td>
        <td className="px-6 py-4">
            {
                formatDateFromIsoToLocal(request.date)
            }
        </td>
        
        <td className="px-6 py-4 w-24">
            {sum}
        </td>


        <td className="px-6 py-4">
            {
                request.status=="WORKING"&& status=='Закрыть'?(
                     <button onClick={()=> {
                        statusBtnHandler(request.id) 
                        setStatus('Выполнен')
                     } } className="font-medium text-blue-600 dark:text-blue-500 hover:underline"> Закрыть</button>
                    
                ):
                (
                    <>Закрыт</>
                )
            }
        </td>
    </tr>
  )
}

export default RequestTableRow