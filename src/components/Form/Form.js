import React from 'react';
import './style.css'

const Form = (props) => {

return (
<div className="container col-12">
<div className="input-group mb-3 mt-4">
  <input onChange={props.handleChange}
         value={props.search} 
         type="text"
         className="form-control" 
         placeholder="Employee Name" 
         />
  <div className="input-group-append">
    <button onClick={props.handleSubmit}
     className="btn btn-primary"
      type="button" 
      id="button">Search
    </button>
  </div>
</div>
</div>
    )
} 

export default Form;
