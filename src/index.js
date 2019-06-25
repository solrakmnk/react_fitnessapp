//const element=document.createElement('h1')
//element.innerText='Hello React'
//const container=document.getElementById('root')
//container.appendChild(element)

import React from 'react'
import ReactDOM from 'react-dom'

const user={
    firstName: 'Carlos',
    lastName: 'Guevara',
    avatar:'https://purepng.com/public/uploads/large/purepng.com-batman-logobatmansuperherocomicdc-comicsbob-kanebat-manbruce-wayne-1701528523430sg9aj.png',
}

function getName(user){
    return user.firstName +' '+ user.lastName
}

function getGreeting(user){
    if(user){
       return <h1>Hello {getName(user)}</h1>
    }
    return <h1>Hello Stranger</h1>
}
const name = 'Carlos'

//const element = <div>{getGreeting()}</div>
const element=(
    <div>
        <h1>{getGreeting(user)}</h1>
        <img src={user.avatar} height="100px"/>
    </div>
)

const container = document.getElementById('root')

ReactDOM.render(element,container)