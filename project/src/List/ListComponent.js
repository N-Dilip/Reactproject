import React from 'react'

export default function ListComponent() {
    const Mylist=myList.map((item)=><li key={item.id}>{item.value}</li>)
  return (
    <>
      <ul type="square">{Mylist}</ul>
    </>
  )
}
const myList=[
    {id:'a',value:"Apple"},
    {id:'b',value:"Orange"},
    {id:'c',value:"Mango"},
    {id:'d',value:"Strawberry"}
]