import React from 'react'
import TableRow from './TableRow'

const BasketTable = () => {
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-white uppercase bg-red-950">
        <tr>
            <th scope="col" className="px-16 py-3">
                <span className="sr-only"></span>
            </th>
            <th scope="col" className="px-6 py-3">
                Название
            </th>
            <th scope="col" className="px-6 py-3">
                Количество
            </th>
            <th scope="col" className="px-6 py-3">
                Цена
            </th>
            <th scope="col" className="px-6 py-3">
                
            </th>
        </tr>
    </thead>
    <tbody>

            <TableRow/>
       
    </tbody>
</table>
  )
}

export default BasketTable