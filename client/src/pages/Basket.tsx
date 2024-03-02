import React from 'react'
import BasketTable from '../components/basket/BasketTable'


const Basket = () => {
  return (
    <div className='text-black'>
      

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
         <BasketTable/>
      </div>
      <div className="flex justify-end pt-10">
        <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-lg text-xl px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Оформить заказ</button>
      </div>


    </div>
  )
}

export default Basket