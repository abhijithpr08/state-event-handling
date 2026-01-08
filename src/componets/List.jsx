import React from 'react'

const List = ({items}) => {

    const handleClick = item => alert(item)
  return items.map(i=> <button key={i} onClick={()=>handleClick(i)}>{i}</button> )
}

export default List