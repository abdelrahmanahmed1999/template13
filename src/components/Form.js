import React from 'react';


const Form=(props)=>{
    return (
      <form onSubmit={props.weather}>
           <input type="text" name="city" placeholder="City.."/>
           <input type="text" name="country" placeholder="Country.."/>
           <button>Get Weater</button>
      </form>
    );
  
}

export default Form;
