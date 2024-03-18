export interface ICategory{
    id:number,
    title:string,
    description:string,
    img:string
    products?:IProduct[]
    services?: IService[]
  }


  export interface IWork{
    id: number
    title: string
    img:string
  }

  export interface IProduct{
    id:number
    title:string
    productCategoryId: number
    description: string
    price: string
    img:string
  }

  export interface IService{
    id:number
    title:string
    productCategoryId: number
    description: string
    price: number
    img:string
  }


  export interface IBasket{
    basket: {
      userId: number
    }
    basketId:number
    count:number
    id:number
    product:IProduct
  }

  
export interface IRequest{
  id:number
  phoneNumber: string
  name:string
  description: string
  status: string
  date: string
  userId: number
  basketId: number
  serviceId: number
  basket:{
    id:number
    userId:number
    products: {
      product:IProduct
      count: number
    }[],
    
  },
  service?: IService
}
