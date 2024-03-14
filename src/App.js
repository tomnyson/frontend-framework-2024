import { useState } from 'react'
import './App.css';
import Profile from './components/Profile'
function App() {
  // khai bao state
  
  const [ten, setTen] = useState('Lê Hồng Sơn')
const [mssv, setMsv] = useState('pk02314')
const [tuoi, setTuoi] = useState('pk02314')
const [ngay,setngay] = useState ('pk02314')
  const ChangeValue = (e) => {
    changeTen(e.target.value);
    console.log((e.target.value));
  }

  const changeTen = (event) => {
    setTen(event.target.value);  
  }
  const changeMssv = (event) => {
    setMsv (event.target.value);
  }
  const changetuoi = (event) => {
    setTuoi(event.target.value);
  }
  const changengay = (event) => {
    setngay (event.target.value);
  }
  console.log(ten)
  return (
    <div className="App">
     <h1>Hello frontend framework update</h1>
     <img alt='' src="https://www.ceepeespices.in/wp-content/uploads/2021/02/hing.png"/>
      <h1>Họ và tên: {ten}</h1>
      
      <form>
      <div className='formInput'> 
        <input type='text' name="ten" placeholder='change ten' onChange={changeTen}/>
        <input type='number' name="tuoi" placeholder='change tuoi' onChange={changetuoi}/>
        <input type='date' name="ngay" placeholder='change ngay' onChange={changengay}/>
        <input type='text' name="mssv" placeholder='change mssv' onChange={changeMssv}/>
        <button type='submit' onClick={ChangeValue}>Change</button>
      </div>
      </form>
     <Profile ten={ten} mssv={mssv} tuoi={tuoi} ngay={ngay}
     />
    </div>
  )
};

export default App;
