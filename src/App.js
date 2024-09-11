import { useState } from 'react';
import './App.css';

function App() {
  let [todolist, setTodolist] = useState([]);
  let saveToDolist = (event) => {
    let toname = event.target.toname.value;
    // alert(toname);
    if (!todolist.includes(toname)) {
      let finalDolist = [...todolist, toname]
      setTodolist(finalDolist);
    }
    else {
      alert("ToDo Name Already Exists ....");
    }

    event.preventDefault();//it calls the event and canncels it
  }
    let list = todolist.map((value,index)=>{
      return(
      <ToDoListItems value={value} key = {index} indexNumber = {index} todolist={todolist} setTodolist = {setTodolist } />)
    }) 
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <form onSubmit={saveToDolist}>
        <input  type="text" name='toname' /><button>SAVE</button>
      </form>
      <div className="outerdiv">
        <ul>
          {list}
        </ul></div>
    </div>
  );
}

export default App;


function ToDoListItems({value,indexNumber,todolist,setTodolist}) {
  let[status,setStatus]=useState(false);
  let deleteRow = () =>{
  let finalDolist = todolist.filter((value, index) => index !== indexNumber);
  setTodolist(finalDolist);
  }
  let checkStatus = () => {
    setStatus(!status);
  }
  return (
    <li class={(status)?'completeToDo':''} onClick={checkStatus}>{indexNumber+1} . {value} <span onClick={deleteRow}>&times;</span></li>
  )
}
