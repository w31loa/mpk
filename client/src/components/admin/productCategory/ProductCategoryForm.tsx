import React, { useEffect, useState } from 'react'
import { ICategory } from '../../../types/types'
import { instance, multiInstance } from '../../../api/axios.api'
import { Form } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaBedPulse } from 'react-icons/fa6'



const ProductCategoryForm = () => {

    
  const[category , setCategory] = useState<ICategory[]>()
  const getCategoryData = async()=>{
      const {data}= await instance.get(`product-category`)
      setCategory(data)
  }


  const[title, setTitle] = useState<string|undefined>('')
  const [file, setFile] = useState<File>()
  const [isEdit, setIsEdit] = useState(false)
  const [selectedCategory, setSelectedCategory ] = useState<ICategory>()
  
  useEffect(()=>{
    getCategoryData()
  }, [])



  const addHandler = (e)=>{
    e.preventDefault()
    const data = {
        title: title,
        image: file
    }
    console.log(selectedCategory)
   
    multiInstance.post('product-category', data).then(()=>{
      toast.success('Категория добавлена')

    }).catch(()=>{
      toast.error('Ошибка')
   })
}

  const updHandler = (e)=>{
    e.preventDefault()
    const data = {
        title: title,
        image: file
    }

    multiInstance.patch(`product-category/${selectedCategory?.id}`, data).then(()=>{
      toast.success('Категория изменена')

    }).catch(()=>{
       toast.error('Ошибка')
    })
  }

  const deleteHandler = (e)=>{
    e.preventDefault()
    multiInstance.delete(`product-category/${selectedCategory?.id}`).then(()=>{
      toast.success('Категория удалена')

    }).catch(()=>{
      toast.error('Ошибка')
   })
  }


  const productToEdit = (id:any)=>{
    const service = category?.filter((e)=> e.id==id)
    if(service){
        return service[0] as ICategory
    }
}

  return (
    <Form className='text-black w-1/3 mt-10' onSubmit={isEdit?updHandler:addHandler}>
       
      <select onChange={(e)=>{

        setSelectedCategory(productToEdit(e.target.value))
        setTitle(productToEdit(e.target.value)?.title)


      }} id="countries" className="mb-7 bg-gray-50 border border-gray-300 text-gray-900  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>Выберете категорию для редактирования</option>
        {
          category?.map((el,i)=>(
            <option value={el.id}>{el.title}</option>
          ))
        } 
      </select>

      <div className="mb-5">    
                <label htmlFor="email" className="block    mb-4 text-xl font-medium text-gray-700" >Название</label>
                <input
                onChange={(e)=>{
                    setTitle(e.target.value)
                }}
                value={title}
                type="text" id="text" className= " py-2 bg-gray-200 border border-gray-300 text-gray-900 text-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-10"required />
        </div>  
                  

        <div className="mb-5">    
            <label htmlFor="email" className="block    mb-4 text-xl font-medium text-gray-700" >Фото</label>
            
            <input required={isEdit?false:true} onChange={(e)=>{
                    if(e.target.files){
                        setFile(e.target.files[0])
                    }
                    
            }} className="p-2 block w-full text-sm cursor-pointer  text-gray-400 focus:outline-none placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file"/>
   

            </div>   
            

            <button type='submit' className='p-4 btn-black text-white' onClick={()=>{
              setIsEdit(false)
            }}>Добавить</button>


            <button type='submit' className='p-4 btn-black text-white' onClick={()=>{
              setIsEdit(true)
            }}>Редактировать</button>


            <button onClick={deleteHandler} className='p-4 btn-black text-white'>Удалить</button>



    </Form>
  )
}

export default ProductCategoryForm