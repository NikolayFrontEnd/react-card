import { NavLink } from 'react-router-dom';
import React from 'react';
import './StaticTable.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
export default function Training2(){
    return(
        <>
    <div class="center-container2">
        <h className="words4">
            Программа тренировок на силу и массу тела от Алексея
        </h>
        </div>

     
        <h className="words3">
            Некоторые рекомендации по программе:
        </h>
        <div className = "Tword">  
<div className = "sFont"> 
<FontAwesomeIcon icon={faDumbbell} />
 </div> 
Подбираемся к рабочим весам, делая разминочные, постепенно увеличивая вес. Это за подходы не считаем. Когда дойдем до веса, который не сможем сделать больше 6-8 раз. Делаем с этим весом 1-3 подхода с отдыхом между подходами 4-5 минут
</div>

<div className = "Tword">  
<div className = "sFont"> 
<FontAwesomeIcon icon={faDumbbell} />
 </div> 
Должна быть мотивация прогрессирвать, не отходить от программы и верить в свои результаты!
</div>

<div className = "Tword">  
<div className = "sFont"> 
<FontAwesomeIcon icon={faDumbbell} />
 </div> 
Нужно правильно питаться , хороший сон и восстанавливаться.
</div>

<div className = "Tword">  
<div className = "sFont"> 
<FontAwesomeIcon icon={faDumbbell} />
 </div> 
Базовые упражнения - все, что нам надо. Изолированные упражнения делаем по желанию. Можно накаться одной базой.
</div>

<div className = "Tword">  
<div className = "sFont"> 
<FontAwesomeIcon icon={faDumbbell} />
 </div> 
Отдых между тренировками делаем 1 день если новичок и 2 дня - если уже более опытный спортсмкен и большие веса.
</div>

<div className = "Tword">  
<div className = "sFont"> 
<FontAwesomeIcon icon={faDumbbell} />
 </div> 
Отдых между первым и вторым упражнением - 10 минут. В это время можно съесть Twix (шутка!), лучше покачать пресс.
</div>

<div className = "Tword">  
<div className = "sFont"> 
<FontAwesomeIcon icon={faDumbbell} />
 </div> 
Отдых между подходами 4-5 минут.
</div>

<div className = "Tword">  
<div className = "sFont"> 
<FontAwesomeIcon icon={faDumbbell} />
 </div> 
Все подходы должны быть отказными! С максимальной отдачей. Можно использовать метод Алексея "Отдых-пауза". Про этот метод искать в интернете.
</div>

<div className = "Tword">  
<div className = "sFont"> 
<FontAwesomeIcon icon={faDumbbell} />
 </div> 
На каждой тренировке стараемся спрогрессировать. Увеличить вес или сделать на одно повторение больше. При этом техника должна быть идеальной! 
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
 <td className = "blockP"> Жим на горизонтальной / наклонной скамье </td>
 <td className = "blockP">1-3</td>
 <td className = "blockP">6-8</td>
 <td className = "blockP"> Желательно делать жим на наклонной скамье, чем на горпизонтальной 1-2 подхода, если нужна и выносливость, можно сделать 3-й подход с меньшим весом на 12-15 повторов, но это по желанию </td>
</tr>

<tr className="blockU">
 <td className = "blockP">Отжимания на брусьях с весом </td>
 <td className = "blockP">1-3</td>
 <td className = "blockP">6-8</td>
 <td className = "blockP"> 1-2 подхода, если нужна и выносливость, можно сделать 3-й подход с меньшим весом на 12-15 повторов, но это по желанию. </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Разгиабния рук с верхнего блока </td>
 <td className = "blockP"> 1</td>
 <td className = "blockP">7-8</td>
 <td className = "blockP"> Изоляция. упражнение для души </td>
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
 <td className = "blockP"> Подтягивания с весом прямым или обратным хватом </td>
 <td className = "blockP">1-3</td>
 <td className = "blockP">6-8</td>
 <td className = "blockP">Желательно 1-2 подхода. Выбор хвата зависит от человека, на что сделать акцент, на спину или на бицепс. Если на спину, то желательно подтягиваться прямым хватом. Для бицепса - отлично будет обратным хватом. Можно сделать 3-й подход с меньшим весом на 12-15, но это по желанию </td>
</tr>

<tr className="blockU">
 <td className = "blockP">Тяга штанги в наклоне </td>
 <td className = "blockP">1-2</td>
 <td className = "blockP">6-8</td>
 <td className = "blockP"> Важна техника. Нужно тянуть спиной </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Подъем гантель сидя </td>
 <td className = "blockP"> 1</td>
 <td className = "blockP">7-8</td>
 <td className = "blockP"> Изоляция. упражнение для души. Делаем медленно и подконтрольно </td>
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
 <td className = "blockP"> Приседния с штангой </td>
 <td className = "blockP">1-3</td>
 <td className = "blockP">6-8</td>
 <td className = "blockP"> Делаем с ровной спиной </td>
</tr>

<tr className="blockU">
 <td className = "blockP">Тяга штанги к подбородку </td>
 <td className = "blockP">1-3</td>
 <td className = "blockP">6-8</td>
 <td className = "blockP"> Лучше упражнение для средних дельт. Передние дельты тренировать особого смысла нет весь объем плеч - средние дельты! </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Махи гантелями в стороны сидя наклонившись вперед </td>
 <td className = "blockP"> 1-2</td>
 <td className = "blockP">7-8</td>
 <td className = "blockP"> Изоляция. упражнение для души и задних дельт</td>
</tr>

</table>

<div className="button-container">
        <NavLink to ='/newpage'>  <button className="my-button">Вернуться</button>  </NavLink> 
        </div>
        </>
    )
}