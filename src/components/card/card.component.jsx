import React from 'react'
import './card.styles.css'

export const Card = (props) => {
    return (
        <div className='card-container'>
            <img alt="monster-img" src ={` https://robohash.org/${props.monster.name} ?set=set2?size=100x100` }/>
           <h2> {props.monster.name} </h2>
           <p> {props.monster.email} </p>
        </div>
    )
}
