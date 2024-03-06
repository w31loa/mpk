import { Form, useLoaderData, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { IMAGE_URL, instance } from '../api/axios.api'
import { IProduct } from '../types/types'
import { useDispatch, useSelector } from 'react-redux'


export const productLoader = async({params}:any) =>{
  console.log(params)
  const {data} = await instance.get(`/product/${params.productId}`)
  return data
}


export const productAction = async ({request}:any) => {

  switch(request.method){
    case "POST" : {
      const formData = await request.formData()
      const data = {
        userId: +formData.get("userId"),
        productId: +formData.get('productId'),
        count: 1
      }
      console.log(data)
      await instance.post('/basket' , data)
      return toast.success('Товар добавлен в корзину!')
    }
  }

}



export const Product = () => {
    const {productId} = useParams<{productId:string}>()

    const product = useLoaderData() as IProduct

    const dispatch = useDispatch()
    const {user, isAuth} = useSelector(state=>{
        return state.user 
    })


    console.log()
    const addBtnHandler= ()=>{

      // const newBasket = [
      //   {
      //     title: `Product${productId}`,
      //     coast: '100$'
      //   },
      // ]

      // toast.success('Товар добавлен в корзину!')

      // const basket = localStorage.getItem('backet')
      // localStorage.setItem('basket', newBasket)
      // localStorage.
    }

  return (

    
    
    <div className=' mt-10 border-2 py-[100px] px-[20px] bg-red-50/30' >
      <div className="text-black text-5xl text-left mb-5 ">{product.title}</div>

          <div className="flex gap-[20%]">

             <img   width={'600px'} src={IMAGE_URL+product.img} alt="Sunset in the mountains"/>

              <Form method='POST' action={'/product/'+ product.id}>
                    <input type="hidden" name="productId" value={product.id}/>
                    <input type="hidden" name="userId" value={Number(Object.values(user)[0])}/>

                    <div className="text-black text-3xl mb-10">{product.description}</div>
                    <div className="text-black text-2xl  mb-5"> Цена: {product.price}₽ </div>
                    <button type='submit' className='px-8 py-4 rounded-md bg-green-500 hover:bg-green-700 transition-colors' onClick={addBtnHandler} >Купить</button>

              </Form>

          </div>
    

        
     
    </div>

  )
}
