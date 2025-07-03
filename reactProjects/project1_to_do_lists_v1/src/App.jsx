import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem1 from "./components/TodoItem1";

import "./App.css";
function App() {
  

  return <center className="todo-container">
    <AppName/>
    <AddTodo/>
    
  <div className="items-container">
    <TodoItem1/>
      <div className="container ">
        
      <div className="row">
      <div className="col-6">
      DSA-String
      </div>
      <div className="col-4">
        30/06/2025
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-danger">Delete</button>
      </div>
      
      </div>
   
  </div>
  
</div>
  </center>
}

export default App;
