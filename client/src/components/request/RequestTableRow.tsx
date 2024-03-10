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
    
    
    const [status, setStatus] = useState("Закончить")

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
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
                        <li>{el.product.title}</li>
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
        <td className="px-6 py-4">
            {
                request.status=="WORKING"&& status=='Закончить'?(
                     <button onClick={()=> {
                        statusBtnHandler(request.id) 
                        setStatus('Выполнен')
                     } } className="font-medium text-blue-600 dark:text-blue-500 hover:underline"> Закончить</button>
                    
                ):
                (
                    <>Выволнен</>
                )
            }
        </td>
    </tr>
  )
}

export default RequestTableRow