import React from "react";
function Demo(props)
{
    return(
        <>
        my name is {props.name}
        </>
    )
}
export default function ListProps(){
    const list=["Mango","Orange","Apple"]
    return(
        <div>
            {list.map((item)=><Demo name={item}></Demo>)}
        </div>
    )
}