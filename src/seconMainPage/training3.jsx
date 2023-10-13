import { NavLink } from 'react-router-dom';
import React from 'react';
import './StaticTable.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import d from './training3.module.css'
export default function Training3() {
return (
    <>

<div class="center-container2">
    <div className = "words4">
        ПРОГРАММА ТРЕНИРОВОК МАЙКА МЕНТЦЕРА
    </div>
</div>

<div className = "words3">ОСНОВНЫЕ ПРИНЦИПЫ ТРЕНИРОВКИ: </div>

<div className={d.block}>
 
<div className = "Tword">  
<div className = "sFont"> 
<FontAwesomeIcon icon={faDumbbell} />
 </div> 

4 дня отдыха между тренировками. Через 3 недели можно довать 1-2 дня дополнительного отдыха. 

</div>

<div className = "Tword">  
<div className = "sFont"> 
<FontAwesomeIcon icon={faDumbbell} />
 </div> 
Делаем 1 большой подход на одну группу мышц. Мышцам достаточно одного подхода для роста!
</div>

<div className = "Tword">  
<div className = "sFont"> 
<FontAwesomeIcon icon={faDumbbell} />
 </div> 
Делать все упражнение до отказа. На каждой тренировке вы должны прогрессировать. Когда прогресс остановится можно сменить программу тренировок.
</div>

<div className = "Tword">  
<div className = "sFont"> 
<FontAwesomeIcon icon={faDumbbell} />
 </div> 
В этой программе есть все упражнения на основные группы мышц. Конечно, можно добавить и свои упражнения в тренировку, но Ментцер считал, что это лишь заберет часть роста мышц и результаты будут хуже
</div>

<div className = "Tword">  
<div className = "sFont"> 
<FontAwesomeIcon icon={faDumbbell} />
 </div> 

Перед осмновным отказным подходом делать несколько разогревочных с меньшим весом

</div>
</div>

<div class="center-container2">
        <h className="words4">
            ТРЕНИРОВКА 1
        </h>
        </div>

        <table className=' tablica '>
<thead className="blockUpp">
          <tr >
            <th >Упражнение</th>
            <th>Подходы</th>
            <th>повторения</th>
            <th>Комментарий</th>
          </tr>
          </thead>
 <tr className="blockU">
 <td className = "blockP"> Грудь: Сведение рук в кроссовере или разводка гантелей лежа + жим штанги на наклонной скамье </td>
 <td className = "blockP">1</td>
 <td className = "blockP">6-10 + 1-3</td>
 <td className = "blockP"> Делаем одно упражнение за другим без отдыха. 1-е и второе упражнение делаем до отказа. Вес подбираем так, чтобы можно было выполнить указанное число повторений. </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Спина: Подтягивания обратным хватом</td>
 <td className = "blockP">1</td>
 <td className = "blockP">6-10</td>
 <td className = "blockP"> После этого упражнение можно отдыхать столько, сколько захочешь. </td>
</tr>



<tr className="blockU">
 <td className = "blockP"> Спина: Становая тяга </td>
 <td className = "blockP">1</td>
 <td className = "blockP">5-8</td>
 <td className = "blockP"> Становую тягу делать с идеально ровной спиной и высоко поднятой головой. Если есть проблемы со становой тягой, можно заменить упражнение на шраги. </td>
</tr>
</table>

<div class="center-container2">
        <h className="words4">
            ТРЕНИРОВКА 2
        </h>
        </div>

        <table className=' tablica '>
<thead className="blockUpp">
          <tr >
            <th >Упражнение</th>
            <th>Подходы</th>
            <th>повторения</th>
            <th>Комментарий</th>
          </tr>
          </thead>
 <tr className="blockU">
 <td className = "blockP"> Разгибания ног сидя в тренажере + жим ногами </td>
 <td className = "blockP">1</td>
 <td className = "blockP">8-15</td>
 <td className = "blockP"> Делаем одно упражнение за другим без отдыха. 1-е и 2-е упражнение делаем до отказа. Оба упражнения делаем 8-15 раз </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Подъемы на носки </td>
 <td className = "blockP">1</td>
 <td className = "blockP">12-20</td>
 <td className = "blockP"> - </td>
</tr>
</table>



<div class="center-container2">
        <h className="words4">
            ТРЕНИРОВКА 3
        </h>
        </div>

        <table className=' tablica '>
<thead className="blockUpp">
          <tr >
            <th >Упражнение</th>
            <th>Подходы</th>
            <th>повторения</th>
            <th>Комментарий</th>
          </tr>
          </thead>
 <tr className="blockU">
 <td className = "blockP"> Плечи: махи гантелями в стороны </td>
 <td className = "blockP">1</td>
 <td className = "blockP">6-10</td>
 <td className = "blockP"> Отличное упражнение для средних дельт </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Задние дельты: махи гантелями в стороны в наклоне </td>
 <td className = "blockP">1</td>
 <td className = "blockP">6-10</td>
 <td className = "blockP"> - </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Руки: Подъем штанги стоя </td>
 <td className = "blockP">1</td>
 <td className = "blockP">6-10</td>
 <td className = "blockP"> Всегда используй прямую штангу и делай тяжелый подход </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Руки: Разгибания рук в тренажере верхнего блока или жим штанги лежа узким хватом + отжимания на брусьях</td>
 <td className = "blockP">1</td>
 <td className = "blockP">6-10 + 3-5</td>
 <td className = "blockP"> Выбрать подходящее для вас упражнение. Но лучше первое. И сразу после первого упражнения делать отжимания на брусьях. Если на брусьях можешь сделать больше 5 раз, делай упражнение с дополнительным отягощением </td>
</tr>
</table>


<div class="center-container2">
        <h className="words4">
            ТРЕНИРОВКА 4
        </h>
        </div>

        <table className=' tablica '>
<thead className="blockUpp">
          <tr >
            <th >Упражнение</th>
            <th>Подходы</th>
            <th>повторения</th>
            <th>Комментарий</th>
          </tr>
          </thead>
 <tr className="blockU">
 <td className = "blockP"> Ноги: Разгиабния ног + приседания со штангой </td>
 <td className = "blockP">1</td>
 <td className = "blockP">20секунд + 8-15 раз</td>
 <td className = "blockP"> Делаем одно разгибание ног и на 20-30 секунд статически удерживаем прямые ноги, до отказа. Затем медлено опускаем ноги и начинаем приседать </td>
</tr>
<tr className="blockU">
 <td className = "blockP"> Подъемы на носки </td>
 <td className = "blockP">1</td>
 <td className = "blockP">12-20</td>
 <td className = "blockP"> - </td>
</tr>
</table>



    <div className="button-container">
        <NavLink to ='/newpage'>  <button className="my-button">Вернуться</button>  </NavLink> 
        </div>
    </>
)
}
