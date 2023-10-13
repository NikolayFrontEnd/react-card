import { NavLink } from 'react-router-dom';
import React from 'react';
import './StaticTable.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import d from './training3.module.css'
export default function Training5(){
    return(
        <>
        
        <div>
    <div className = "words4">
        ПРОГРАММА ТРЕНИРОВОК ЮРИЯ СПАСОКУКОЦКОГО "ТЕСЕЙ-1"  
    </div>
</div>

<div className = "Tword">  
<div className = "sFont"> 
<FontAwesomeIcon icon={faDumbbell} />
 </div> 
Тренировка 3 раза в неделю. Упражнение на пресс, икры и наклоны "горбик" (для поясницы) - делать три раза в неделю.
</div>


<div class="center-container2">
        <h className="words4">
        ПОНЕДЕЛЬНИК: ГРУДНЫЕ МЫШЦЫ + БИЦЕПСЫ РУК
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
 <td className = "blockP"> Жим штанги на горизонтальной скамье </td>
 <td className = "blockP">2</td>
 <td className = "blockP">6</td>
 <td className = "blockP">Перед подходами сделать 2 подхода разминочных с меньшим весом в 15-20 повторений. Делаем до отказа 2 подхода. Делать упражнение в пол амплитуды. Отдых между подходами - 4 минуты. Во время этого времени можно покачать пресс или икры  </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Сгибание гантелей сидя с супинацией </td>
 <td className = "blockP">2</td>
 <td className = "blockP">6</td>
 <td className = "blockP"> 2 разминочных подхода и два основных рабочих. Отдых 3 минуты между подходами. </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Подъемы штанги на бицепс с большим весом</td>
 <td className = "blockP">2</td>
 <td className = "blockP">6</td>
 <td className = "blockP"> - </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Жим гантелей на наклонной скамье </td>
 <td className = "blockP">2</td>
 <td className = "blockP">5-7</td>
 <td className = "blockP"> Сначала делаем разминочные подходы, потом переходим к двум базовым </td>
</tr>

</table>


<div class="center-container2">
        <h className="words4">
        СРЕДА: МЫШЦЫ СПИНЫ + ТРИЦЕПСЫ
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
 <td className = "blockP"> Вертикальная тяга широким хватом в тренажере </td>
 <td className = "blockP">2</td>
 <td className = "blockP">5-7</td>
 <td className = "blockP"> Сначала делаем разминочные подходы, потом переходим к двум базовым </td>
</tr>


<tr className="blockU">
 <td className = "blockP"> Горизонтальная тяга широким хватом в тренажере </td>
 <td className = "blockP">2</td>
 <td className = "blockP">5-7</td>
 <td className = "blockP"> Сначала делаем разминочные подходы, потом переходим к двум базовым </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Горизонтальная тяга узким хватом в тренажере </td>
 <td className = "blockP">2</td>
 <td className = "blockP">5-7</td>
 <td className = "blockP"> Сначала делаем разминочные подходы, потом переходим к двум базовым </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Разгиабания рук стоя на коленях  в тренажере </td>
 <td className = "blockP">2</td>
 <td className = "blockP">8</td>
 <td className = "blockP"> Сначала делаем разминочные подходы, потом переходим к двум базовым. Это лучше упражнение, чем французский жим. Лучше прорисовывает трицепс </td>
</tr>


</table>



<div class="center-container2">
        <h className="words4">
        ПЯТНИЦА: МЫШЦЫ СПИНЫ + ТРИЦЕПСЫ
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
 <td className = "blockP"> Махи гантелями в стороны </td>
 <td className = "blockP">2</td>
 <td className = "blockP">6</td>
 <td className = "blockP"> Сначала делаем разминочные подходы, потом переходим к двум базовым </td>
</tr>


<tr className="blockU">
 <td className = "blockP"> Приседания с штангой </td>
 <td className = "blockP">2</td>
 <td className = "blockP">6</td>
 <td className = "blockP"> Сначала делаем разминочные подходы, потом переходим к двум базовым </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Сгибание ног лежа в тренажере </td>
 <td className = "blockP">2</td>
 <td className = "blockP">8</td>
 <td className = "blockP"> Сначала делаем разминочные подходы, потом переходим к двум базовым </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Подъем на носках сидя </td>
 <td className = "blockP">2</td>
 <td className = "blockP">8</td>
 <td className = "blockP"> - </td>
</tr>


</table>
<div className="button-container">
        <NavLink to ='/newpage'>  <button className="my-button">Вернуться</button>  </NavLink> 
        </div>
        </>
    )
}