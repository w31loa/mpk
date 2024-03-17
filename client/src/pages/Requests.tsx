import React from 'react'
import RequestTableRow from '../components/request/RequestTableRow'
import { instance } from '../api/axios.api'
import { useLoaderData } from 'react-router-dom'
import { IProduct, IRequest, IService } from '../types/types'

export const requestsLoader = async()=>{
  const {data} = await instance.get(`/request`)
  return data
}


const Requests = () => {

  const requests = useLoaderData() as IRequest[]
  return (  
    <div className='pb-40 container mx-auto'>
        

      <div className="relative overflow-x-auto shadow-md sm:rounded-none">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" className="px-6 py-3">
                          id
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Номер клиента
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Имя клиента
                      </th>
                      <th scope="col" className="px-6 py-3 ">
                          Комментарий
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Продукция
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Услуга
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Дата
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Статус
                      </th>
                  </tr>
              </thead>
              <tbody> 
                {
                  requests.map((request,i) => (
                      <RequestTableRow request={request} key={i}/>
                  ))
                }
              </tbody>
          </table>
      </div>

    </div>
  )
}

export default Requests