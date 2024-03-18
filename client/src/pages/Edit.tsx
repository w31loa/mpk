import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Edit = () => {
  return (
    <div className='container mx-auto'>

       
      <div className="flex mt-10">
          <div className="">
                <button className='btn-black p-5'>  <Link to={'/edit/poductCategoryForm'} > Категория товара </Link></button> 
                <button className='btn-black p-5  border-white border-x-2 '>   <Link to={'/edit/productForm'}> Товар </Link> </button>
          </div>
          <div className="">
                <button className='btn-black p-5'>  <Link to={'/edit/serviceCategoryForm'} > Категория услуг </Link></button> 
                <button className='btn-black p-5  border-white border-x-2 '>   <Link to={'/edit/serviceForm'}> Услуга </Link> </button>
          </div>
          <div className="">
            <button className='btn-black p-5  border-white border-x-2 '>   <Link to={'/edit/worksForm'}> Работы </Link> </button>
          </div>

      </div>

      <Outlet/>
    </div>
  )
}

export default Edit