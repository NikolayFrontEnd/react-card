import { NavLink } from 'react-router-dom';
import React from 'react';
import './StaticTable.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import d from './training3.module.css'
export default function Training8(){
    return(
        <>
        
        <div>
    <div className = "words4">
        ПРОГРАММА ТРЕНИРОВОК  КОЛУМ ФОН МОГЕРА
    </div>
</div>

<div className = "Tword">  
<div className = "sFont"> 
<FontAwesomeIcon icon={faDumbbell} />
 </div> 
Главный девиз спортсмена: Рим не построили за один день; требовалось много времени, сил и терпения!
</div>

<div className = "Tword">  
<div className = "sFont"> 
<FontAwesomeIcon icon={faDumbbell} />
 </div> 
Калум верит в много объемный тренинг. Чтобы добиться результата, необходимо выполнять 15-20 подходов на каждую часть тела.
</div>

<div className = "Tword">  
<div className = "sFont"> 
<FontAwesomeIcon icon={faDumbbell} />
 </div> 
Отдых между подходами 2-3 минуты
</div>

<div className = "Tword">  
<div className = "sFont"> 
<FontAwesomeIcon icon={faDumbbell} />
 </div> 
Тренировку необходимо проводить 2 раза в день! Утром тренировать крупные мешцы, такие как грудб, спина и ноги. А вечером тренировать бицепсы, плечи и трицепсы
</div>

<div className = "Tword">  
<div className = "sFont"> 
<FontAwesomeIcon icon={faDumbbell} />
 </div> 
После тренировки делать 3 дня отдыха и выполнять ее заново.
</div>

<div className = "Tword">  
<div className = "sFont"> 
<FontAwesomeIcon icon={faDumbbell} />
 </div> 
Калум считает, выполняя данную тренировку, через год можно добиться невероятных результатов!
</div>


<div class="center-container2">
        <h className="words4">
            ТРЕНИРОВКА УТРОМ:
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
 <td className = "blockP"> Сведение рук в тренажере пек-дек </td>
 <td className = "blockP">3</td>
 <td className = "blockP">15-20</td>
 <td className = "blockP"> -  </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Жим штанги на наклонной скамье </td>
 <td className = "blockP">4</td>
 <td className = "blockP">15-20</td>
 <td className = "blockP"> - </td>
</tr>

<tr className="blockU">
 <td className = "blockP">Жим штанги в тренажере</td>
 <td className = "blockP">4</td>
 <td className = "blockP">12</td>
 <td className = "blockP"> - </td>
</tr>

<tr className="blockU">
 <td className = "blockP">Отжимания на брусьях</td>
 <td className = "blockP">4</td>
 <td className = "blockP">12</td>
 <td className = "blockP"> </td>
</tr>

<tr className="blockU">
 <td className = "blockP">Сведение гантелей лежа на наклонной скамье</td>
 <td className = "blockP">4</td>
 <td className = "blockP">15</td>
 <td className = "blockP"> - </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Приведение бедра сидя в тренажере</td>
 <td className = "blockP">3</td>
 <td className = "blockP">15</td>
 <td className = "blockP"> - </td>
</tr>


<tr className="blockU">
 <td className = "blockP"> Пуловер с гантелью лежа </td>
 <td className = "blockP">3</td>
 <td className = "blockP">12</td>
 <td className = "blockP"> -  </td>
</tr>

<tr className="blockU">
 <td className = "blockP">Тяга верхнего блока широким хватом </td>
 <td className = "blockP">3</td>
 <td className = "blockP">10-15</td>
 <td className = "blockP"> -  </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Тяга нижнего блока к поясу</td>
 <td className = "blockP">3</td>
 <td className = "blockP">10</td>
 <td className = "blockP">  - </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Тяга штанги к поясу в наклоне </td>
 <td className = "blockP">3</td>
 <td className = "blockP">12</td>
 <td className = "blockP">  - </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Румынская тяга </td>
 <td className = "blockP">3</td>
 <td className = "blockP">10</td>
 <td className = "blockP">  - </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Выпрямление ног в тренажере </td>
 <td className = "blockP">5</td>
 <td className = "blockP">15</td>
 <td className = "blockP"> -  </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Фронатльные приседания </td>
 <td className = "blockP">4</td>
 <td className = "blockP">15</td>
 <td className = "blockP">  - </td>
</tr>

<tr className="blockU">
 <td className = "blockP">Жим ногами лежа </td>
 <td className = "blockP">4</td>
 <td className = "blockP">15</td>
 <td className = "blockP">  - </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Гакк-приседания </td>
 <td className = "blockP">3</td>
 <td className = "blockP">15</td>
 <td className = "blockP"> Фух! На этом утрення тренировка окончена  </td>
</tr>
</table>


<div class="center-container2">
        <h className="words4">
            ТРЕНИРОВКА ВЕЧЕРОМ:
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
 <td className = "blockP"> Жим штанги из-за головы </td>
 <td className = "blockP">6</td>
 <td className = "blockP">8-12</td>
 <td className = "blockP"> -  </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Жим гантелей стоя </td>
 <td className = "blockP">4</td>
 <td className = "blockP">8-12</td>
 <td className = "blockP"> - </td>
</tr>

<tr className="blockU">
 <td className = "blockP">Тяга штанги к подбородку</td>
 <td className = "blockP">4</td>
 <td className = "blockP">8-12</td>
 <td className = "blockP"> - </td>
</tr>

<tr className="blockU">
 <td className = "blockP">Махи гантелями в стороны</td>
 <td className = "blockP">4</td>
 <td className = "blockP">8-12</td>
 <td className = "blockP"> </td>
</tr>

<tr className="blockU">
 <td className = "blockP">Отведение на заднюю дельту в тренажере</td>
 <td className = "blockP">4</td>
 <td className = "blockP">8-12</td>
 <td className = "blockP"> - </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Подъем штанги на бицепс</td>
 <td className = "blockP">4</td>
 <td className = "blockP">10-15</td>
 <td className = "blockP"> - </td>
</tr>


<tr className="blockU">
 <td className = "blockP"> Почеердный подъем гантелей на бицепс </td>
 <td className = "blockP">4</td>
 <td className = "blockP">10-15</td>
 <td className = "blockP"> -  </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Подъем штанги на бицепс с изогнутым грифом </td>
 <td className = "blockP">4</td>
 <td className = "blockP">8-12</td>
 <td className = "blockP"> -  </td>
</tr>

<tr className="blockU">
 <td className = "blockP">Разгибания рук в тренажере</td>
 <td className = "blockP">4</td>
 <td className = "blockP">8-12</td>
 <td className = "blockP">  Отличное упражнение на трицепс </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Французский жим с изогнутым грифом лежа </td>
 <td className = "blockP">4</td>
 <td className = "blockP">8-12</td>
 <td className = "blockP">  - </td>
</tr>

<tr className="blockU">
 <td className = "blockP"> Разгибание рук из-за головы на нижнем блоке </td>
 <td className = "blockP">3</td>
 <td className = "blockP">10-15</td>
 <td className = "blockP">  Последнее добивочное упражнение! И на этом несложная тренировка заканчивается. Можно три дня отдохнуть</td>
</tr>
</table>

<div className="button-container">
        <NavLink to ='/newpage'>  <button className="my-button">Вернуться</button>  </NavLink> 
        </div>
        </>
    )
}