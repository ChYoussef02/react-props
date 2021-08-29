
import './App.css';
import Child from './profileComponent'

const App = () => {
  const handleName = () => {
    alert('Youssef')
  }
  return (

    <div style={{marginLeft:'14cm' , marginTop:'2.5cm' , }}>
    <Child fn='Chalbi Youssef' bio='I am a student in Gomycode Sousse ' profession='freelancing web-devolopment' Name={handleName} ></Child>
   
   </div>
    
  );
  
}

export default App;
