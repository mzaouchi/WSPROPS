import './App.css';
import Child from './Component/Child';

function App() {
  const name = "Sofiene"
  var age = 23
  const tab = ['Mahmoud','Sahla','Hachem','Sofiene','Rym','Jihene','Hichem','Sarra']
  let bestUser = {
    user : 'Mohamed',
    password : 234556
  }
  const handleAlert=()=>{
    return alert("Hello React Props")
  }
  const handleName=(a)=>{
    return alert(`Hello ${a}`)
  }

  let show = true

  return (
    <div>
      <Child name={name}   age={age}  tab={tab} bestUser={bestUser} handleAlert={handleAlert}  handleName={handleName} show={show}>
              <h2>Children props </h2>
              <h3>Sofiene is a brave boy</h3>
              <img src='/2.jpg' alt='Not Found'/>
      </Child>
   
    </div>
  );
}

export default App;
