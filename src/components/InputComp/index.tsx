import * as React from 'react';

export interface IInputCompProps {
  name : string,
}

export default function InputComp ({name}: IInputCompProps) {

  const [value,setValue] = React.useState('');


  return (
    <div>
      <label htmlFor={name}>{name} </label>
      <input 
        id={name} 
        name={name} 
        placeholder={name} 
        value={value}
        onChange={(e)=> setValue(e.target.value)}
      /> 
    </div>
  );
}
