import { FC } from "react"
import HomeCards from "../components/home/HomeCards"
import HomeSlider from "../components/home/HomeSlider"
import { MdDownloadDone } from "react-icons/md";

const  Home:FC = () =>{
  return (
    <div className="text-black bg-[url('/home/head.webp') bg-no-repeat]">
      
      <img className="absolute -z-10 top-[-204px]" src="/home/head.webp" alt="" />
      <div className="container flex items-center h-[300px] mx-auto">
        <div className="text-white font-medium text-5xl  text-center  " >Металлургическая Промышленная Компания</div>

      </div>

        <div className="flex pt-14">
          <img src="/home/intro.webp" className='w-[50%] animate-fade-right animate-duration-1000 animate-delay-100 animate-ease-in animate-normal' alt="" />
          <div className=" p-20 max-w-[35%]  animate-fade-left animate-duration-1000 animate-delay-100 animate-ease-in  animate-normal">
            <div className="text-4xl font-medium text-gray-800 mb-5">О нас</div>
            <div className="text-xl text-gray-500 pb-20">
                <p>Наша компания - это команда профессионалов, специализирующихся на производстве качественной кровли и металлоконструкций. Мы предлагаем широкий ассортимент продукции, отвечающей самым высоким стандартам качества и безопасности.</p>
                <p>Мы обладаем многолетним опытом работы в отрасли и постоянно совершенствуем наши технологии и процессы производства, чтобы предложить нашим клиентам только лучшее. Наша продукция отличается прочностью, долговечностью и стильным дизайном.</p>
                <p>Мы гордимся своей репутацией надежного партнера и стремимся к тому, чтобы каждый клиент получил идеальное решение для своих потребностей. Наша цель - обеспечить безопасность и комфорт вашего дома или бизнеса, предоставив качественные продукты и услуги.</p>
                <p>Если вы ищете надежного поставщика кровельных материалов и металлоконструкций, обратитесь к нам. Мы готовы помочь вам реализовать ваши проекты и достичь желаемых результатов.</p>
            </div>
          </div>
        </div>


        <div className="flex ">




          <div className=" py-40 w-1/2 pl-40  p-20  bg-[#f2f2f2] animate-fade-left animate-duration-1000 animate-delay-100 animate-ease-in  animate-normal">
            <div className="text-4xl font-medium text-gray-800 mb-5">Главные составляющие высокого качества металлопродукции</div>
            <div className="text-xl text-gray-500 pb-20">
                <p className="mb-10">Высокое качество продукции, представляемой Заводом СПС на рынке металлоконструкций, обусловлено, прежде всего, наличием полного цикла производства, от проектирования до отгрузки товаров конечному потребителю. Многоступенчатый контроль качества включает:</p>
                <ul className="flex gap-5 flex-col">
                  <li className="flex items-center gap-2"> <span><MdDownloadDone /></span> проверка сырья и заготовок, поступающих на завод;</li>
                  <li className="flex items-center gap-2"> <span><MdDownloadDone /></span>соблюдение требований ГОСТ 23118-99 и СП 53-101-98;</li>
                  <li className="flex items-center gap-2"> <span><MdDownloadDone /></span> выходной контроль качества (требования СП 53-101-98);</li>
                  <li className="flex items-center gap-2"> <span><MdDownloadDone /></span> дробеструйная и пескоструйная обработка металла;</li>
                  <li className="flex items-center gap-2"> <span><MdDownloadDone /></span>  защита металла от коррозии (требования СНиП 2.03.11-85, СП 28.13330.2017). </li>
                </ul>
            </div>
          </div>


          <div className=" bg-[#1f1f1f] p-20 py-40 w-1/2 animate-fade-left animate-duration-1000 animate-delay-100 animate-ease-in  animate-normal">
            <div className="">
                <HomeCards/>
            </div>
          </div>
          
        </div>





        <div className="  container mx-auto mt-20">
         <div className="text-4xl font-medium text-gray-800 mb-5 font-bold">Монтажные работы</div>
         <div className="text-xl text-gray-500 pb-20 flex flex-col gap-10">
                <p>Завод МК несет ответственность за качество продукции и монтажных работ, выполненных нашими бригадами. Сотрудники Завода «МПК» — опытные профессионалы в области строительства быстровозводимых зданий разного предназначения. Все работы выполняются строго по графику, с применением новейших технологий и качественных материалов. Перед началом сборочных работ осуществляется дополнительная проверка конструкций и соединительных элементов на предмет обнаружения малейших дефектов.</p>
                <p>Завод «МПК» возводит производственные здания, металлические сооружения и промышленные объекты в Оренбурге и по Центральному округу, в соответствии с нормативами СНиП 3.03.01-87. В цикл работ входят монтаж конструкций методом сварки, и на болтовых соединениях, монтаж листовых изделий и сэндвич панелей (внешняя и внутренняя облицовка). Все мастера, входящие в состав бригад завода металлоконструкций, прошли специальное обучение и практическую подготовку, что подтверждено дипломами, удостоверениями и допусками. Каждый специалист обладает навыками в работе с инструментом и оборудованием современных стандартов.</p>
            </div>
        </div>
    </div>
  )
}

export default Home