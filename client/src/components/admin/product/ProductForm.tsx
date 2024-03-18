import React, { useEffect, useState } from 'react'
import { ICategory, IProduct } from '../../../types/types'
import { instance, multiInstance } from '../../../api/axios.api'
import { Form } from 'react-router-dom'
import { toast } from 'react-toastify'

const ProductForm = () => {

  
   
  const[category , setCategory] = useState<ICategory[]>()
  const getCategoryData = async()=>{
      const {data}= await instance.get(`product-category`)
      setCategory(data)
  }
   
  const[products , setProducts] = useState<IProduct[]>()
  const getProductsData = async(id)=>{
      const {data}= await instance.get(`product/all/${id}`)
      setProducts(data)
  }

  useEffect(()=>{
    getCategoryData()

   
    

 
 

  }, [])

  const[title, setTitle] = useState<string|undefined>('')
  const[description, setDescription] = useState<string|undefined>('')
  const[price, setPrice] = useState<string|undefined>('')
  const [file, setFile] = useState<File>()
  const [isEdit, setIsEdit] = useState(false)
  const [selectedCategory, setSelectedCategory ] = useState<ICategory>()
  const [selectedProduct, setSelectedProduct ] = useState<IProduct>()
  const [test,setTest] = useState('')



  const addHandler = (e)=>{
    e.preventDefault()
    const data = {
        title: title,
        productId: selectedCategory?.id,
        description: description,
        price: price,
        image: file
    }
   console.log(data)
    multiInstance.post('product', data).then(()=>{
      toast.success('Продукт добавлен')

    }).catch(()=>{
      toast.error('Ошибка')
   })
}

  const updHandler = (e)=>{
    e.preventDefault()
    const data = {
        title: title,
        description: description,
        price: price,
        image: file
    }

    multiInstance.patch(`product/${selectedProduct?.id}`, data).then(()=>{
      toast.success('Продукт изменен')

    }).catch(()=>{
       toast.error('Ошибка')
    })
  }

  const deleteHandler = (e)=>{
    e.preventDefault()
    console.log(selectedProduct?.id)
    multiInstance.delete(`product/${selectedProduct?.id}`).then(()=>{
      toast.success('Продукт удален')

    }).catch(()=>{
      toast.error('Ошибка')
   })
  }

  
    const productToEdit = (id:any)=>{
      const service = category?.filter((e)=> e.id==id)
      if(service){
          console.log(service)
          return service[0] as ICategory
      }
    }
  
  
    const prodToEdit = (id:any)=>{
      const service = products?.filter((e)=> e.id==id)
      if(service){
          return service[0] as IProduct
      }
    }

 
  
  return (
    <Form className='text-black w-1/3 mt-10' onSubmit={isEdit?updHandler:addHandler}>
       
      <select onChange={(e)=>{
        setSelectedCategory(productToEdit(e.target.value))
        getProductsData(e.target.value)
        
        setTitle('')


      }} id="countries" className="mb-7 bg-gray-50 border border-gray-300 text-gray-900  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>Выберете категорию для редактирования</option>
        {
          category?.map((el,i)=>(
            <option onSelect={(e)=>{
            }} value={el.id}>{el.title}</option>
          ))
        } 
      </select>


      {
        selectedCategory&&<>
                <select onChange={(e)=>{

                setSelectedProduct(prodToEdit(e.target.value))
                setTitle(prodToEdit(e.target.value)?.title)
                setDescription(prodToEdit(e.target.value)?.description)
                setPrice(prodToEdit(e.target.value)?.price) 

                }} id="countries" className="mb-7 bg-gray-50 border border-gray-300 text-gray-900  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Выберете продукт для редактирования</option>
                {
                  products?.map((el,i)=>(
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
                        <label htmlFor="email" className="block    mb-4 text-xl font-medium text-gray-700" >Описание</label>
                        <input
                        onChange={(e)=>{
                            setDescription(e.target.value)
                        }}
                        value={description}
                        type="text" id="text1" className= " py-2 bg-gray-200 border border-gray-300 text-gray-900 text-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-10"required />
                </div>  

                <div className="mb-5">    
                        <label htmlFor="email" className="block    mb-4 text-xl font-medium text-gray-700" >Цена</label>
                        <input
                        onChange={(e)=>{
                            setPrice(e.target.value)
                        }}
                        value={price}
                        type="text" id="text2" className= " py-2 bg-gray-200 border border-gray-300 text-gray-900 text-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-10"required />
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



        </>
      }
        

    </Form>
  )
}

export default ProductForm