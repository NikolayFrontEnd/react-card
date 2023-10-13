import { NavLink } from 'react-router-dom';
import React from 'react';
import './StaticTable.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import d from './training3.module.css'
export default function Training9(){
    return(
        <>
        
        <div>
    <div className = "words4">
        ПРОГРАММА ТРЕНИРОВОК МАКСИМА ТРУХОНОВЦА  
    </div>
</div>

<div className = "Tword">  
<div className = "sFont"> 
<FontAwesomeIcon icon={faDumbbell} />
 </div> 
Максим исключительно занимается на турниках и брусьях, никогда не ходил в зал и считает, сделать красивое и накаченное тело можно с помощтю турников и брусьев.
</div>

<div className = "Tword">  
<div className = "sFont"> 
<FontAwesomeIcon icon={faDumbbell} />
 </div> 
Тренировки не для новичков! Тут будет приведена основная тренивка и две дополнительные. Дополнительные тренировки можно проводить, когда нет времени провести основную
</div>

<div class="center-container2">
        <h className="words4">
        Основная тренировка. Понедельник:
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
 <td className = "blockP"> Выход силой на две руки с дополнительным весом </td>
 <td className = "blockP">4</td>
 <td className = "blockP">на максимум</td>
 <td className = "blockP"> Вес использовать 4 кг. Отдых между подходами 2-3 минуты</td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Выходы силой на две руки без веса </td>
 <td className = "blockP">4</td>
 <td className = "blockP">на максимум</td>
 <td className = "blockP"> Отдых между подходами 2-3 минуты </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Выходы силой на две руки разными хватами (широким и узким)</td>
 <td className = "blockP">4</td>
 <td className = "blockP">на максимум</td>
 <td className = "blockP"> Отдых между подходами 2-3 минуты </td>
</tr>
</table>


<div class="center-container2">
        <h className="words4">
     Вторник:
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
 <td className = "blockP"> Выход силой на две руки с дополнительным весом </td>
 <td className = "blockP">3</td>
 <td className = "blockP">на максимум</td>
 <td className = "blockP">  Отдых между подходами 3-4 минуты. Потом отдыхаем 10-15 минут и делаем опять 3 подхода! Потом опять отдыхам 10-15 минут и опяять последие три подхода...</td>
</tr>

</table>

<div class="center-container2">
        <h className="words4">
     Среда:
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
 <td className = "blockP"> Приседания на одной ноге </td>
 <td className = "blockP">1</td>
 <td className = "blockP">40-45</td>
 <td className = "blockP">Отличное упражнение для ног </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Любое упражнение на заднюю поверхность бедра и икроножные мышци </td>
 <td className = "blockP">1</td>
 <td className = "blockP">-</td>
 <td className = "blockP"> Ищем в интернете, какое больше понравится </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Отжимания во флажке на максимум, на каждую сторону, интервал 1 минута </td>
 <td className = "blockP">3</td>
 <td className = "blockP">на максимум</td>
 <td className = "blockP"> Это уже для продвинутых атлетов, новичкам не стоит и пытаться</td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Растяжка </td>
 <td className = "blockP">-</td>
 <td className = "blockP">-</td>
 <td className = "blockP">-</td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Бег </td>
 <td className = "blockP">6 км</td>
 <td className = "blockP">-</td>
 <td className = "blockP">Если хватит сил</td>
</tr>
</table>

<div class="center-container2">
        <h className="words4">
     Четверг:
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
 <td className = "blockP"> Подтягивания без веса </td>
 <td className = "blockP">5-6</td>
 <td className = "blockP">Должно выйти не меньше 100 подтягиваний.</td>
 <td className = "blockP">Если за 6 подходов не получается сделать 100 подтягиваний, то тогда делаем больше подходов. </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Растяжка </td>
 <td className = "blockP">-</td>
 <td className = "blockP">-</td>
 <td className = "blockP"> - </td>
</tr>
</table>

<div class="center-container2">
        <h className="words4">
     Пятница:
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
 <td className = "blockP"> Отжимания на брусьях с весом </td>
 <td className = "blockP">4</td>
 <td className = "blockP">На максимум </td>
 <td className = "blockP">Отдых 3-4 минуты</td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Отжимания на брусьях без веса </td>
 <td className = "blockP">4</td>
 <td className = "blockP">на максимум</td>
 <td className = "blockP"> Отдых 3-4 минуты </td>
</tr>
</table>


<div class="center-container2">
        <h className="words4">
     Суббота:
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
 <td className = "blockP"> Удержание флага </td>
 <td className = "blockP">-</td>
 <td className = "blockP">Пытаться удерживать в течении 45 минут. Отдых произвольный </td>
 <td className = "blockP">упражнение не для новичков</td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Выходы силой на две руки </td>
 <td className = "blockP">3</td>
 <td className = "blockP">на максимум</td>
 <td className = "blockP"> Отдых произвольный </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Подтягивания нижним хватом </td>
 <td className = "blockP">3</td>
 <td className = "blockP">на максимум</td>
 <td className = "blockP"> Отдых произвольный </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Подтягивания широким хватом за голову </td>
 <td className = "blockP">3</td>
 <td className = "blockP">на максимум</td>
 <td className = "blockP"> Отдых произвольный </td>
</tr>
</table>


<div class="center-container2">
        <h className="words4">
     Воскресенье:
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
 <td className = "blockP"> Спринтерский бег </td>
 <td className = "blockP">-</td>
 <td className = "blockP">- </td>
 <td className = "blockP">Если не устали за неделю</td>
</tr>
</table>


<div className="button-container">
        <NavLink to ='/newpage'>  <button className="my-button">Вернуться</button>  </NavLink> 
        </div>
        </>
    )
}