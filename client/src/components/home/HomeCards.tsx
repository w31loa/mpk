import React from 'react'

const HomeCards = () => {
  return (
    <div className=''>
        <div className="flex flex-col justify-between gap-10 text-white">

            <div className="flex w-3/4 justify-center">
              <img src="/home/1.png" alt="" className="h-20 mr-10"/>
              <div className="">
                <div className=" font-bold mb-5 text-xl">Проектирование помещения</div>
                <div className="text-gray-300">Наши специалисты приступают к расчётам параметров конструкции, подбирают оптимальные материалы, определяются с типом фундамента и особенностями коммуникаций.</div>
              </div>
            </div>
            <div className="flex w-3/4 justify-center">
              <img src="/home/2.png" alt="" className="h-20 mr-10"/>
              <div className="">
                <div className=" font-bold mb-5 text-xl">Производство конструкций</div>
                <div className="text-gray-300">С учётом проектной документации технологи приступают к изготовлению металлоконструкций.</div>
              </div>
            </div>
            <div className="flex w-3/4 justify-center">
              <img src="/home/3.png" alt="" className="h-20 mr-10"/>
              <div className="">
                <div className=" font-bold mb-5 text-xl">Строительно-монтажные работы</div>
                <div className="text-gray-300">Начинается строительство сооружений и зданий, готовые комплекты и модули ЛСТК соединяются вместе на площадке заказчика..</div>
              </div>
            </div>

        </div>
    </div>
  )
}

export default HomeCards