import { NavLink } from 'react-router-dom';
import React from 'react';
import './StaticTable.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import d from './training3.module.css'
export default function Training4(){
    return(
        <>
        
        <div>
    <div className = "words4">
        ПРОГРАММА ТРЕНИРОВОК ГАННИБАЛА
    </div>
</div>

<div className = "Tword">  
<div className = "sFont"> 
<FontAwesomeIcon icon={faDumbbell} />
 </div> 
Выполнять 1-2 раза за день и каждый день.  (Для лучшего эффекта!!)
</div>

<div className = "Tword">  
<div className = "sFont"> 
<FontAwesomeIcon icon={faDumbbell} />
 </div> 
 Предпочитал круговые тренировки. Его программа расчитана больше на выносливость.
</div>

<div className = "Tword">  
<div className = "sFont"> 
<FontAwesomeIcon icon={faDumbbell} />
 </div> 
 Эту тренировку необходимо выполонить за 45 минут.
</div>
<div className = "Tword">  
<div className = "sFont"> 
<FontAwesomeIcon icon={faDumbbell} />
 </div> 
 Отдых между подходами 30-45 секунд, но в целом это не важно, главное за 45 минут сделать все подходы.
</div>
<div className = "Tword">  
<div className = "sFont"> 
<FontAwesomeIcon icon={faDumbbell} />
 </div> 
 Здесь будут выложены 2 разные его тренировки. Можно заниматься по одной, потом перейти к другой, а можно чередовать.
</div>




<div>
    <div className = "words4">
        ПРОГРАММА 1:
    </div>
</div>

<div className = "Tword">  
<div className = "sFont"> 
<FontAwesomeIcon icon={faDumbbell} />
Отжимания — 30/29/28/27/26/25/24/23/22/21/20
 </div> 
</div>

<div className = "Tword">  
<div className = "sFont"> 
<FontAwesomeIcon icon={faDumbbell} />
Подтягивания (прямой хват) — 10/9/8/7/6/5/5/5/5/5/5
 </div> 
</div>

<div className = "Tword">  
<div className = "sFont"> 
<FontAwesomeIcon icon={faDumbbell} />
Отжимания на брусьях — 20/19/18/17/16/15/14/13/12/11/10
 </div> 
</div>

<div className = "Tword">  
<div className = "sFont"> 
<FontAwesomeIcon icon={faDumbbell} />
Подтягивания (обратный хват) — 10/9/8/7/6/5/5/5/5/5/5
 </div> 
</div>

<div className="words3">
    ПРИМЕЧАНИЕ:
</div>

<div className = "Tword">  
<div className = "sFont"> 

Делаем отжимания 30 раз, отдыхаем 30-45 секунд, подтягивыаемся 10 раз, отдыхаем, отжимаемся на брусьях 20 раз, отдыхаем, подтягиваниемся 10 раз, отдыхаем и уменьшаем на 1 повторение. И так круг за кругом.

 </div> 
</div>

<div>
    <div className = "words4">
        ПРОГРАММА 2:
    </div>
</div>

<div className = "Tword">  
<div className = "sFont"> 
<FontAwesomeIcon icon={faDumbbell} />
Делать 5-10 кругов. Отдых 45-60 секунд.
 </div> 
</div>

<div className = "Tword">  
<div className = "sFont"> 
<FontAwesomeIcon icon={faDumbbell} />
Подтягивания обратным хватом 10 раз, глубокие отжимания на брусьях 20 раз, 20 отжиманий от пола узким хватом руки на уровне живота, и отжимания от скамьи узким хватом 20 раз - это один круг.
 </div> 
</div>
<div className="button-container">
        <NavLink to ='/newpage'>  <button className="my-button">Вернуться</button>  </NavLink> 
        </div>
        </>
    )
}