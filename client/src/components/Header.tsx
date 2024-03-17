import { FC } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from '../hooks/useAuth.hook';
import { useUser } from '../hooks/useUser.hook';
import { IUser, logout } from '../store/reducers/user.reducer';
import { toast } from 'react-toastify';
import { removeTokenFromLocalStorage } from '../helpers/localStorage.helper';

const Header:FC = () => {

  const dispatch = useDispatch()

  const isAuth = useAuth()
  const user = useUser()
  const isAdmin = user?.role == 'ADMIN'
  console.log(user)

  const logoutHandler = ()=>{
    dispatch(logout())
    removeTokenFromLocalStorage('token')
  }

  return (
    <div className="bg-black font-roboto text-white flex justify-center align-top uppercase">
        <div className="container ">

            <header className='flex items-center justify-between  p-6 shadow-sm backdrop-blur-sm'>
                <nav>
                    <ul className='flex items-center gap-8 ml-auto mr-10 text-white border-b-2 border-white text-lg'>
                      <li>
                          <NavLink to={'/'} className={({ isActive})=> isActive ? 'text-white border-b-2 border-black' : 'text-white/50' + ''} >Главная</NavLink>
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
                        <NavLink to={'/works'} className={({ isActive})=> isActive ? 'text-white' : 'text-white/50'} > Наши работы</NavLink>
                      </li>
                      <li>
                        <NavLink to={'/contacts'} className={({ isActive})=> isActive ? 'text-white' : 'text-white/50'} >Контакты</NavLink>
                      </li>
             
                    </ul> 
                </nav>
                
                <div className="flex gap-[30px] items-center">
                      {
                        isAdmin&&(
                          <div className=''>
                            <li>
                              <NavLink to={'/requests'} className={({ isActive})=> isActive ? 'text-white' : 'text-white/50'} >Заказы</NavLink>
                            </li>
                            <li>
                             <NavLink to={'/edit'} className={({ isActive})=> isActive ? 'text-white' : 'text-white/50'} >Редактирование</NavLink>
                            </li>
                          
                          </div>

                        
                        )
                      }
                     
                    {isAuth?<NavLink to={'/basket/'+user?.id} className=''><SlBasket size={30}/></NavLink>: <></>}

                    {isAuth?<button onClick={logoutHandler} > Выйти </button>:    <NavLink to={'/profile'} className='text-white' ><span>Авторизация</span></NavLink> }
                

                </div>

                
            </header>
        </div>
    </div>
  )
}

export default Header