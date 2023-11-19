import React from 'react'

export default function TryCatch(props) {
    try{
        if(props.name==="Ajay"){
            throw new Error("Ajay name is not acceptance")
        }
        else{

        }
    }
    catch(error){
        console.log(error)
        document.write("Please enter valid name")
    }
    finally{
        console.log("always executed")
    }
  return (
    <div>
        <h1>My Name is {props.name}</h1>
    </div>
  )
}