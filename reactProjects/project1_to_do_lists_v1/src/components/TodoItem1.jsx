function TodoItem1(){
let todoName= "First React App-todo list "
let todoDate ="30/06/2025"
    return (
<div class="container text-center">
<div class="row">
    <div class="col-6">
    
    {todoName}
    </div>
    <div class="col-4">
      {todoDate}
    </div>
  <div class="col-2">
     <button type="button" class="btn btn-danger">Delete</button>
    </div>
  </div>
  </div>
    );
}

export default TodoItem1;