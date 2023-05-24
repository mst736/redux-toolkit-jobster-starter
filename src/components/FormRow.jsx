import { useEffect, useRef, useState } from "react"
import Wrapper from "../assets/wrappers/FormRow"

const FormRow = ({formRow, values, handleChange, refName, isEmptyField}) => {

  const {id, name, type, labelText} = formRow

  const [isSelectType, setIsSelectType] = useState(false)

  refName = useRef()

  useEffect(()=> {

    if (type === 'select') {

      setIsSelectType(true)
  
    }
  
  },[type])

  // console.log(isSelectType);

  useEffect(()=> {

    if (isEmptyField) {

      refName.current.focus();
      refName.current.style.border = "3px solid red";

    } else  {

      refName.current.blur();
      refName.current.style.border = null;

    }


  },[isEmptyField])

  
  
  return (

    <Wrapper >

      <div className="form-row">

        {isEmptyField ? <p>*please fill {name} field</p> : null}

        <label htmlFor={name} className="form-label">{labelText || name}</label>

        {isSelectType? 
        
        <select 
        
        ref= {refName}
        value={values[`${name}`]}

        name={name} 
        
        onChange={handleChange}  
        
        className="form-input">


        {formRow.options.map((option,index) => {

          return <option key={index} value={option}>{option}</option>

        })}

        </select> :

        <input 
        
        ref= {refName}
        
        type={type} name={name} 
        
        onChange={handleChange} 

        value={values[`${name}`]} 
        
        className="form-input"/>
      
      }

      </div>

    </Wrapper >


  )
}
export default FormRow