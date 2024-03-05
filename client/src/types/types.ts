export interface ICategory{
    id:number,
    title:string,
    description:string,
    img:string
    products?:IProduct[]
    services?: IService[]
  }


  export interface IProduct{
    id:number
    title:string
    productCategoryId: number
    description: string
    price: number
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