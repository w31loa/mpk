import React from 'react'

const DiliveryCards = () => {
  return (
    <div className=' mb-20'>
     <img className="absolute -z-10 top-[-204px]" src="/home/head.webp" alt="" />
      <div className="container flex items-center h-[300px] mx-auto">
       <div className="text-white font-medium text-5xl  text-center  " >Доставка и оплата</div>

      </div>

  <div className="flex justify-around gap-5 container mx-auto mt-24">

      <div className="w-3/12 flex flex-col items-center bg-[#3e3e3e]">
        <div className="flex flex-col items-center justify-center py-10">
          <img src="/dil/1.png" alt="" className="w-18 mb-10"/>
          <span className="text-xl text-center text-white font-bold">РАССРОЧКА БЕЗ ПЕРЕПЛАТЫ*</span>
       
        </div>
      <div  className="p-7 h-full text-gray-700 bg-[#f2f2f2] text-lg ">
        Рассрочка на 6 месяцев позволяет не откладывать приобретение нужной вам продукции на какой-то срок, а заниматься строительством в самый сезон.
        </div>
      </div>

      <div className="w-3/12 flex flex-col items-center bg-[#3e3e3e]">
        <div className="flex flex-col items-center justify-center py-10">
          <img src="/dil/2.png" alt="" className="w-20 mb-10"/>
          <span className="text-xl text-center text-white font-bold">КРЕДИТ</span>
       
        </div>
      <div  className="p-7  h-full text-gray-700 bg-[#f2f2f2] text-lg ">
      Мы сотрудничаем с «Хоум кредит», «Альфа банк», «Банк Траст». Ваша заявка направляется сразу в три банка, что увеличивает шансы на принятие положительного решения по запросу.
        </div>
      </div>

      <div className="w-3/12 flex flex-col items-center bg-[#3e3e3e]">
        <div className="flex flex-col items-center justify-center py-10">
          <img src="/dil/3.png" alt="" className="w-20 mb-10"/>
          <span className="text-xl text-center text-white font-bold">РАЗЛИЧНЫЕ ВАРИАНТЫ ОПЛАТЫ</span>
       
        </div>
      <div  className="p-7 h-full text-gray-700 bg-[#f2f2f2] text-lg ">
          <ul>
            <li>Наличными в офисе компании</li>
            <li>Оплата банковской картой</li>
            <li>Платеж на расчетный счет компании</li>
         </ul>
        </div>
      </div>

   

  </div>
</div>
  )
}

export default DiliveryCards