import { FC } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from 'react-redux';

const Header:FC = () => {

  const dispatch = useDispatch()
  const {user, isAuth} = useSelector(state=>{
      return state.user
  })


  return (
    <div className="bg-red-950 font-roboto text-white flex justify-center align-top">
        <div className="container ">

            <header className='flex items-center justify-between  p-4 shadow-sm backdrop-blur-sm'>
                <nav>
                    <ul className='flex items-center gap-5 ml-auto mr-10 text-white '>
                      <li>
                          <NavLink to={'/'} className={({ isActive})=> isActive ? 'text-white' : 'text-white/50'} >Главная</NavLink>
                      </li>
                      <li>
                          <NavLink  to={'/productsCategories'} className={({ isActive})=> isActive ? 'text-white' : 'text-white/50'} >Продукция</NavLink>
                      </li>
                      <li>
                          <NavLink to={'/servicesCategories'} className={({ isActive})=> isActive ? 'text-white' : 'text-white/50'} > Услуги</NavLink>
                      </li>
        
                      <li>
                        <NavLink to={'/info'} className={({ isActive})=> isActive ? 'text-white' : 'text-white/50'} > Доставка и оплата</NavLink>
                      </li>
                      <li>
                        <NavLink to={'/contacts'} className={({ isActive})=> isActive ? 'text-white' : 'text-white/50'} >Контакты</NavLink>
                      </li>
                    </ul> 
                </nav>
                
                <div className="flex gap-[30px] items-center">
                     
                    <NavLink to={'/basket'} className=''><SlBasket size={30}/></NavLink>
                    <NavLink to={'/profile'} className='text-white' >{isAuth?(<span>Профиль</span>): (<span>Авторизация</span>)}</NavLink>

                </div>

                
            </header>
        </div>
    </div>
  )
}

export default Header