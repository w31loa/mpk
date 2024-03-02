import { FC } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'


const Tile:FC<any> = ({title, imageName, id, type}) => {
  return (
    <Link  to={ '/'+type+'/'+id} id={id} className="max-w-sm bg-white rounded overflow-hidden shadow-lg hover:shadow-2xl hover:cursor-pointer mt-10 transition-shadow w-1/3">
                    <img className="w-full"  src={'../public/'+imageName} alt="Sunset in the mountains"/>
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl text-center text-black mb-2">{title} {id}</div>
                    </div>
    </Link >
  )
}

export default Tile 