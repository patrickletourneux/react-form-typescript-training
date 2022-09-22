import React, { useState } from 'react';
import InputComp from '../InputComp';
// import './style.css'


interface IFormCompProps {
  formId : string,
  fields : string[],
  onSubmit(event: React.FormEvent<HTMLFormElement>): void;
}

function FormComp({formId, fields , onSubmit}:IFormCompProps) {
  return (
    <form id={formId} className='form' onSubmit={(e) => onSubmit(e)}>
      FormComp
      {
        fields.map((field)=>
        <InputComp key={field} name={field}/>
      )
      }
      <button type='submit'>submit</button>
    </form>
  );
}

export default FormComp;