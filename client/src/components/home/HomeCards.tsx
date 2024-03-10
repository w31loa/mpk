import React from 'react'

const HomeCards = () => {
  return (
    <div className=' mb-20'>
          <div className="text-red-900 font-medium text-5xl my-10 text-center" >Почему мы</div>

        <div className="flex justify-between gap-10">

            <div className="w-3/12 flex flex-col justify-center items-center">
            <img src="/home/1.png" alt="" className="h-36 mb-3"/>
            <span className="text-6xl text-center text-red-950 font-extrabold">4</span>
            <p  className="text-red-900 text-lg text-center">
                В составе компании
                2 завода фасадно-кровельных материалов,
                завод металлоконструкций
                и трубопрокатный завод
            </p>
            </div>

            <div className="w-3/12 flex flex-col justify-center items-center">
            <img src="/home/2.png" alt="" className="h-36"/>
            <span className="text-6xl text-center text-red-950 font-extrabold">100%</span>
            <p  className="text-red-900 text-lg text-center">
            строительно-монтажные услуги с полной ответственностью за результат
            </p>
            </div>

            <div className="w-3/12 flex flex-col justify-center items-center">
            <img src="/home/3.png" alt="" className="w-80 mb-10"/>
            <span className="text-6xl text-center text-red-950 font-extrabold">19 </span>
            <p  className="text-red-900 text-lg text-center">
                Мы присутствуем в 7 городах
                Всего 19 филиалов
            </p>
            </div>

            <div className="w-3/12 flex flex-col justify-center items-center">
            <img src="/home/4.png" alt="" className="h-36"/>
            <span className="text-6xl text-center text-red-950 font-extrabold">1 000 000</span>
            <p  className="text-red-900 text-lg text-center">
                Столько тонн металла
                мы продали с нашего склада
                металлопроката
            </p>
            </div>

        </div>
    </div>
  )
}

export default HomeCards