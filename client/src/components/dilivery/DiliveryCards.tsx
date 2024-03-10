import React from 'react'

const DiliveryCards = () => {
  return (
    <div className=' mb-20'>
    <div className="text-red-900 font-medium text-5xl mb-20 mt-10 text-center" >Доставка и оплата</div>

  <div className="flex justify-around gap-5">

      <div className="w-3/12 flex flex-col items-center">
      <img src="/dil/1.png" alt="" className="w-28 mb-10"/>
      <span className="text-xl text-center text-red-950 font-extrabold">РАССРОЧКА БЕЗ ПЕРЕПЛАТЫ*</span>
      <p  className="text-red-900 text-lg text-center">
      Рассрочка на 6 месяцев позволяет не откладывать приобретение нужной вам продукции на какой-то срок, а заниматься строительством в самый сезон.
      </p>
      </div>

      <div className="w-3/12 flex flex-col items-center">
      <img src="/dil/2.png" alt="" className="w-28 mb-20"/>
      <span className="text-xl text-center text-red-950 font-extrabold ">КРЕДИТ</span>
      <p  className="text-red-900 text-lg text-center">
      Мы сотрудничаем с «Хоум кредит», «Альфа банк», «Банк Траст». Ваша заявка направляется сразу в три банка, что увеличивает шансы на принятие положительного решения по запросу.
      </p>
      </div>

      <div className="w-3/12 flex flex-col items-center">
      <img src="/dil/3.png" alt="" className="w-28 mb-20"/>
      <span className="text-xl text-center text-red-950 font-extrabold">РАЗЛИЧНЫЕ ВАРИАНТЫ ОПЛАТЫ</span>
      <p  className="text-red-900 text-lg text-center">
         <ul>
            <li>Наличными в офисе компании</li>
            <li>Оплата банковской картой</li>
            <li>Платеж на расчетный счет компании</li>
         </ul>
      </p>
      </div>

   

  </div>
</div>
  )
}

export default DiliveryCards