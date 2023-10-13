
import { NavLink } from 'react-router-dom';
import React from 'react';
import './StaticTable.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import d from './training3.module.css'

export default function training6(){
    return(
        <>
                <div>
    <div className = "words4">
        ПРОГРАММА ТРЕНИРОВОК Скотта Хермана
    </div>
</div>

<div className = "Tword">  
<div className = "sFont"> 
<FontAwesomeIcon icon={faDumbbell} />
 </div> 
Скотт верит, что тренируясь со свободными весами и соблюдая режим питания можно добиться идеального тела
</div>

<div className = "Tword">  
<div className = "sFont"> 
<FontAwesomeIcon icon={faDumbbell} />
 </div> 
Скотт верит, что тренируясь со свободными весами и соблюдая режим питания можно добиться идеального тела
</div>

<div className = "Tword">  
<div className = "sFont"> 
<FontAwesomeIcon icon={faDumbbell} />
 </div> 
Вместо тренажеров лучше использовать гантели или штанги. Тогда будут включаться мышци-стабилизаторы.
</div>

<div className = "Tword">  
<div className = "sFont"> 
<FontAwesomeIcon icon={faDumbbell} />
 </div> 
Желательно всегда включать в свою программу жим лежа, приседания со штангой и становой тяги.
</div>

<div>
    <div className = "words4">
        ПРОГРАММА, ПО КОТОРОЙ ТРЕНИРУЕТСЯ СПОРТСМЕН:
    </div>
</div>

<div class="center-container2">
        <h className="words4">
            ПОНЕДЕЛЬНИК: ГРУДЬ
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
 <td className = "blockP"> Жим гантелей лежа </td>
 <td className = "blockP">3</td>
 <td className = "blockP">8</td>
 <td className = "blockP"> -  </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Жим гантелей на наклонной скамье </td>
 <td className = "blockP">3</td>
 <td className = "blockP">8</td>
 <td className = "blockP"> - </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Сведение рук в кроссовере сверху</td>
 <td className = "blockP">3</td>
 <td className = "blockP">8</td>
 <td className = "blockP"> - </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Сведение рук в кроссовере снизу</td>
 <td className = "blockP">3</td>
 <td className = "blockP">8</td>
 <td className = "blockP"> - </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Сведение рук в кроссовере перед собой</td>
 <td className = "blockP">3</td>
 <td className = "blockP">8</td>
 <td className = "blockP"> - </td>
</tr>
</table>

<div class="center-container2">
        <h className="words4">
            ВТОРНИК: ПЛЕЧИ И СПИНА
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
 <td className = "blockP"> Подтягивания в гравитоне </td>
 <td className = "blockP">3</td>
 <td className = "blockP">8</td>
 <td className = "blockP"> -  </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Подтягивания в гравитоне обратным хватом </td>
 <td className = "blockP">3</td>
 <td className = "blockP">8</td>
 <td className = "blockP"> - </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Сведение рук в кроссовере сверху</td>
 <td className = "blockP">3</td>
 <td className = "blockP">8</td>
 <td className = "blockP"> - </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Становая тяга</td>
 <td className = "blockP">3</td>
 <td className = "blockP">8</td>
 <td className = "blockP"> - </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Подтягивания</td>
 <td className = "blockP">3</td>
 <td className = "blockP">8</td>
 <td className = "blockP"> - </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Горизонтальная тяга нижнего блока в тренажере</td>
 <td className = "blockP">3</td>
 <td className = "blockP">8</td>
 <td className = "blockP"> - </td>
</tr>


<tr className="blockU">
 <td className = "blockP"> Жим гантелей стоя </td>
 <td className = "blockP">3</td>
 <td className = "blockP">8</td>
 <td className = "blockP"> -  </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Махи гантелей в стороны </td>
 <td className = "blockP">3</td>
 <td className = "blockP">8</td>
 <td className = "blockP"> - </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Махи гантелей вперед</td>
 <td className = "blockP">3</td>
 <td className = "blockP">8</td>
 <td className = "blockP"> - </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Махи гантелей в стороны поочередно</td>
 <td className = "blockP">3</td>
 <td className = "blockP">8</td>
 <td className = "blockP"> Делаем правой, потом - левой - это один повтор. Таких 8 повторов </td>
</tr>


</table>


<div class="center-container2">
        <h className="words4">
            СРЕДА: НОГИ
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
 <td className = "blockP"> ПРИСЕДАНИЯ </td>
 <td className = "blockP">3</td>
 <td className = "blockP">8</td>
 <td className = "blockP"> -  </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Разгибания ног в тренажере </td>
 <td className = "blockP">3</td>
 <td className = "blockP">8</td>
 <td className = "blockP"> - </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Поочередное разгибания ног в тренажере</td>
 <td className = "blockP">3</td>
 <td className = "blockP">8</td>
 <td className = "blockP"> - </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Сгибания ног лежа в тренажере</td>
 <td className = "blockP">3</td>
 <td className = "blockP">8</td>
 <td className = "blockP"> На заднюю поверхность бедра </td>
</tr>

<tr className="blockU">
 <td className = "blockP">Сгибание ног лежа в тренажере поочередно каждой ногой</td>
 <td className = "blockP">3</td>
 <td className = "blockP">8</td>
 <td className = "blockP"> - </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Приведение бедра сидя в тренажере</td>
 <td className = "blockP">3</td>
 <td className = "blockP">15</td>
 <td className = "blockP"> - </td>
</tr>


<tr className="blockU">
 <td className = "blockP"> Упражнение "Ослик" </td>
 <td className = "blockP">3</td>
 <td className = "blockP">15</td>
 <td className = "blockP"> Упражнение на икры. Наклоняемся вперед и поднимаемся на носки  </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Обычные подъемы на носки стоя </td>
 <td className = "blockP">3</td>
 <td className = "blockP">15</td>
 <td className = "blockP"> - </td>
</tr>
</table>



<div class="center-container2">
        <h className="words4">
            ЧЕТВЕРГ: ДЕНЬ РУК
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
 <td className = "blockP"> ПРИСЕДАНИЯ </td>
 <td className = "blockP">3</td>
 <td className = "blockP">8</td>
 <td className = "blockP"> -  </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Поднятия штанги на бицепс </td>
 <td className = "blockP">3</td>
 <td className = "blockP">8</td>
 <td className = "blockP"> - </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> МОЛОТКИ</td>
 <td className = "blockP">3</td>
 <td className = "blockP">8</td>
 <td className = "blockP"> - </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Поднятие штанги на бицепс обратным хватом</td>
 <td className = "blockP">3</td>
 <td className = "blockP">8</td>
 <td className = "blockP"> </td>
</tr>

<tr className="blockU">
 <td className = "blockP">Жим штанги лежа узким хватом</td>
 <td className = "blockP">3</td>
 <td className = "blockP">8</td>
 <td className = "blockP"> - </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Французский жим седя </td>
 <td className = "blockP">3</td>
 <td className = "blockP">15</td>
 <td className = "blockP"> - </td>
</tr>


<tr className="blockU">
 <td className = "blockP"> Разгибание рук с верхнего блока </td>
 <td className = "blockP">3</td>
 <td className = "blockP">15</td>
 <td className = "blockP"> Упражнение на икры. Наклоняемся вперед и поднимаемся на носки  </td>
</tr>
</table>


<div class="center-container2">
        <h className="words4">
            ПЯТНИЦА: ПЛЕЧИ И ПРЕСС
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
 <td className = "blockP">3</td>
 <td className = "blockP">10</td>
 <td className = "blockP"> -  </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Махи гантелями вперед </td>
 <td className = "blockP">3</td>
 <td className = "blockP">10</td>
 <td className = "blockP"> - </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Поочередные махи гантелями в стороны</td>
 <td className = "blockP">3</td>
 <td className = "blockP">10</td>
 <td className = "blockP"> - </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Планка боковая </td>
 <td className = "blockP">3</td>
 <td className = "blockP">45 секунд</td>
 <td className = "blockP"> Делать 45 секунд на правую и 45 секунд на левую сторону - 1 подход </td>
</tr>

<tr className="blockU">
 <td className = "blockP">Поднятие ног к перекладине</td>
 <td className = "blockP">3</td>
 <td className = "blockP">10</td>
 <td className = "blockP"> - </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Русские скручивания </td>
 <td className = "blockP">3</td>
 <td className = "blockP">20</td>
 <td className = "blockP"> - </td>
</tr>


<tr className="blockU">
 <td className = "blockP"> Скручивания с утяжелителем </td>
 <td className = "blockP">3</td>
 <td className = "blockP">15</td>
 <td className = "blockP">    </td>
</tr>
</table>

<div class="center-container2">
        <h className="words4">
            СУББОТА: ОТДЫХ
        </h>
        </div>

        <div class="center-container2">
        <h className="words4">
            ВОСКРЕСЕНЬЕ: КАРДИО
        </h>
        </div>


<table className=' tablica '>    
<thead className="blockUpp">
          <tr>
            <th >Упражнение</th>
          </tr>
          </thead>
 <tr className="blockU">
 <td className = "blockP"> 20 минут бега  </td>
</tr>
</table>



<div className="button-container">
        <NavLink to ='/newpage'>  <button className="my-button">Вернуться</button>  </NavLink> 
        </div>
        </>
    )
}

