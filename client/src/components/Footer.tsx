import React from 'react'
import { CiMail } from 'react-icons/ci'
import { FaPhoneSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className=' bg-black py-10  ' >
      <div className="container mx-auto flex justify-between">
        <div className="text-gray-500">© 2024  Металлургическая Промышленная Компания. Все права защищены.</div>
        <div className="">
          <div className="">Контакты:</div>
          <div className="">
            <div className="flex items-center gap-2 "> <span><CiMail /></span> Почта: <a className=" " href="">info@krovelson.ru</a></div>
            <div className="flex items-center gap-2"><span><FaPhoneSquare /></span> Телефон: <a className=" " href="">8 (3532) 67-00-22</a></div>
          </div>
        </div>
      </div>
    </div>
  )
}
 
export default Footer