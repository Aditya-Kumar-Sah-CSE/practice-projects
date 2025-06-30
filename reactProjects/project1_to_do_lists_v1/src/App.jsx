import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem1 from "./components/TodoItem1";
function App() {
  

  return <center className="todo-container">
    <AppName/>
    
  <AddTodo/>
  <TodoItem1/>
  <div class="container text-center">

  <div class="row">
    <div class="col-6">
     DSA-String
    </div>
    <div class="col-4">
      30/06/2025
    </div>
  <div class="col-2">
       <button type="button" class="btn btn-danger">Delete</button>
    </div>
  </div>
  
</div>
  </center>
}

export default App
