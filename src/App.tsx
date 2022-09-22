import FormComp from './components/FormComp';
import './App.css';

function App() {

  const handleSubmitForm = (event : React.FormEvent<HTMLFormElement> ):void => {
    // console.log(event.target);
    
    const  myForm : HTMLFormElement
        // = document.querySelector(`form#${event.target.id}`) as HTMLFormElement;
        = document.getElementById((event.target.id)) as HTMLFormElement ;
    console.log('id ',event.target.id )
    const formData = new FormData(myForm);
    console.log(`${event.target.id} : `)
    for (const entries of formData.entries()) {
      console.log(entries);
    }
    event.preventDefault();
  }

  return (
    <div className="App">
     <FormComp 
        formId = {'form1'}
        fields = {["name","surname","pseudonyme","email"]} 
        onSubmit ={handleSubmitForm} />
      <br/>
      <br/>
      <br/>
     <FormComp 
        formId={'form2'}
        fields = {["métier","formation"]}
        onSubmit ={handleSubmitForm}
     />
    </div>
  );
}

export default App;
