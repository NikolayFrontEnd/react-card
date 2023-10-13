import { NavLink } from 'react-router-dom';
import React from 'react';
import './StaticTable.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import d from './training3.module.css'
export default function Training10(){
    return(
        <>
        
        <div>
    <div className = "words4">
        ПРОГРАММА ТРЕНИРОВОК АЛЕКСАНДРА МАКЕДОНСКОГО
    </div>
</div>

<div className = "Tword">  
<div className = "sFont"> 
<FontAwesomeIcon icon={faDumbbell} />
 </div> 
Спортсмен тренируется как в спортзале, так и на спортивной площадке
</div>

<div className = "Tword">  
<div className = "sFont"> 
<FontAwesomeIcon icon={faDumbbell} />
 </div> 
Выполняет по 1000 и более скручиваний
</div>

<div className = "Tword">  
<div className = "sFont"> 
<FontAwesomeIcon icon={faDumbbell} />
 </div> 
Каждый день проводит тренировку шеи и делает вакуум живота
</div>
<div className = "Tword">  
<div className = "sFont"> 
<FontAwesomeIcon icon={faDumbbell} />
 </div> 
Делает по 100 и больше махов ганьелей в сторону за тренировку
</div>





<div>
    <div className = "words4">
        ТРЕНИРОВКА НА УЛИЦЕ
    </div>
</div>

<div class="center-container2">
        <h className="words4">
            КОМПЛЕКС МАКЕДОНСКОГО 1200:
        </h>
        </div>
<div className = "Tword">  
<div className = "sFont"> 
<FontAwesomeIcon icon={faDumbbell} />
10 подъемов гантелей на бицепс (вес подбираем произвольный, чтобы уже 14-15 раз было тяжело)
 </div> 
</div>
<div className = "Tword">  
<div className = "sFont"> 
<FontAwesomeIcon icon={faDumbbell} />
Сразу 10 отжиманий от пола - это один подход
 </div> 
</div>
<div className = "Tword">  
<div className = "sFont"> 
<FontAwesomeIcon icon={faDumbbell} />
30 секунд отдыха
 </div> 
</div>
<div className = "Tword">  
<div className = "sFont"> 
<FontAwesomeIcon icon={faDumbbell} />
60 подходов
 </div> 
</div>



<div>
    <div className = "words4">
        ТРЕНИРОВКА НА ТУРНИКАХ:
    </div>
</div>

<div className = "Tword">  
<div className = "sFont"> 
<FontAwesomeIcon icon={faDumbbell} />
10 подтягиваний на турнике обратным хватом
 </div> 
</div>
<div className = "Tword">  
<div className = "sFont"> 
<FontAwesomeIcon icon={faDumbbell} />
Сразу 10 отжиманий от пола - это один подход
 </div> 
</div>
<div className = "Tword">  
<div className = "sFont"> 
<FontAwesomeIcon icon={faDumbbell} />
30 секунд отдыха
 </div> 
</div>
<div className = "Tword">  
<div className = "sFont"> 
<FontAwesomeIcon icon={faDumbbell} />
60 подходов
 </div> 
</div>
<div className="button-container">
        <NavLink to ='/newpage'>  <button className="my-button">Вернуться</button>  </NavLink> 
        </div>
        </>
    )
}