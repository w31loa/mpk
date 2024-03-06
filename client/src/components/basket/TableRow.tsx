import React, { FC, useState } from 'react'
import { MdDelete } from "react-icons/md";
import { IMAGE_URL, instance } from '../../api/axios.api';
import { Form } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


const TableRow:FC<any> = ({title, count, price, img , id }) => {

    const [value,setValue] = useState(count)

    const [visible,setVisible] = useState(true)


    const dispatch = useDispatch()
    const {user, isAuth} = useSelector(state=>{
        return state.user 
    })


    const userId = Number(Object.values(user)[0])

    const updateValue = async ( count:number)=>{

        const data = {
            userId : userId,
            productId : +id,
            count
        }

        instance.patch('/basket',data)
    }

    const moreValueBtnHandler=()=>{
       
            setValue(value+1)
            updateValue(value+1)
    }

    const lessValueBtnHandler=()=>{
        if(value > 1){
         setValue(value-1)
         updateValue(value-1)

        }
    }



const deleteBtnHandler = (userId:number, id:number)=>{
    instance.delete(`/basket/${userId}/${id}`)
    setVisible(false)
}

  return (
<tr className={"bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 "+(visible==false?"hidden":'')}>
  
        <td className="p-4">
            <img src={IMAGE_URL+img} className="w-16 md:w-32 max-w-full max-h-full rounded-lg" alt="Apple Watch"/>
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
            {title}
        </td>
        <td className="px-6 py-4">
            
            <div className="flex items-center">
                <button onClick={lessValueBtnHandler}
                className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                    <span className="sr-only">Quantity button</span>
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                    </svg>
                </button>
                <div>
                    <input type="number" id="first_product" className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required value={value} />
                </div>
                <button onClick={moreValueBtnHandler}
                className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                    <span className="sr-only">Quantity button</span>
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                    </svg>
                </button>
            </div>
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
            {price}
        </td>
        <td className="px-6 py-4">
            <button onClick={()=> { 
                deleteBtnHandler(userId,id)
            }} ><MdDelete className='hover:text-slate-50'  size={30}/></button>
            
        </td>
   
   
</tr>
  )
}

export default TableRow