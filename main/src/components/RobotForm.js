import { useState } from "react"
import Robot from "./Robot"
import RobotStore from "../stores/RobotStore"

function RobotForm () {
    const [name, setName]=useState('')
    const [type, setType]=useState('')
    const [mass, setMass]=useState('')
    let inputName = document.getElementById("name")
    let inputType = document.getElementById("type")
    let inputMass = document.getElementById("mass")
    
    function addRob(name1, type1, mass1)
    {
        let props = {name:name1,type:type1,mass:mass1}
        RobotStore.addRobot(props);
        inputName.value=('')
        inputType.value=('')
        inputMass.value=('')

    }

    return (
      <div>
        Robot form
        <input role="textbox" name="name" placeholder="name" id="name" type="text" onChange={(e)=>setName(e.target.value)} aria-label="Name" />
        <input role="textbox" name="type" placeholder="type" id="type" type="text" onChange={(e)=>setType(e.target.value)} aria-label="Type" />
        <input role="textbox" name="mass" placeholder="mass" id="mass" type="text" onChange={(e)=>setMass(e.target.value)} aria-label="Mass" />
        
        <input type="button" value="add" onClick={()=>{addRob(name,type,mass)}}></input>
      </div>
    )
  }
  
  export default RobotForm