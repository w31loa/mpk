import { FC } from "react"
import { CiMail } from "react-icons/ci";
import { FaPhoneSquare } from "react-icons/fa";

const  Contacts:FC = () =>{
  return (
    <div className="text-black">
        <img className="absolute -z-10 top-[-204px]" src="/home/head.webp" alt="" />
      <div className="container flex items-center h-[300px] mx-auto">
       <div className="text-white font-medium text-5xl  text-center  " >Контакты</div>

      </div>
      
      <div className=" px-20 mt-32 container mx-auto ">
        <div className="mb-20">
          <div className="text-4xl font-medium text-gray-800 mb-5 font-bold">Контактные данные</div>
            <div className=" text-2xl px-20">
                  <div className="flex items-center gap-2 mb-5"> <span><CiMail /></span> Почта: <a className="text-red-900 hover:text-red-600" href="">info@krovelson.ru</a></div>
                  <div className="flex items-center gap-2"><span><FaPhoneSquare /></span> Телефон: <a className="text-red-900 hover:text-red-600" href="">8 (3532) 67-00-22</a></div>
                
            </div>  
        </div>
              

            <div className="mb-20">
                {/* <div className="text-red-900 font-medium text-4xl mb-10 mt-10 text-center" >Офисы продаж</div> */}
              <div className="text-4xl font-medium text-gray-800 mb-5 font-bold">Офисы продаж</div>

                <ul className="flex flex-col gap-5 px-20">
                      <li className=" flex flex-col gap-2 text-xl">
                        <div className="font-bold">г. Оренбург, пр-д Автоматики, 10/3</div>
                        <div className="">Пн-Пт: 9.00-18.00, Сб: 9.00-17.00, Вс: 10.00-15.00</div>
                      </li>
                      <li className=" flex flex-col gap-2 text-xl">
                        <div className="font-bold">г. Оренбург, ул. Базовая, 1</div>
                        <div className="">Пн-Пт 9:00 - 18:00, Сб,Вс -выходной</div>
                      </li>
                      <li className=" flex flex-col gap-2 text-xl">
                        <div className="font-bold">г. Оренбург, ул. Беляевская, 6</div>
                        <div className="">Пн-Пт 9:00 - 18:00, Сб,Вс -выходной</div>
                      </li>
                      <li className=" flex flex-col gap-2 text-xl">
                        <div className="font-bold">г. Оренбург, ул. Беляевская, 2</div>
                        <div className="">Пн-Пт 9:00 - 17:00, Сб 9:00-15:00, Вс -выходной</div>
                      </li>
                </ul>
                    
            </div>
      </div>
         
    </div>

    
  )
}

export default Contacts