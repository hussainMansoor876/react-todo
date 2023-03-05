import './App.css';
import Child from './SecondComponent'
import TodoList from './TodoList'

function Parent() {
  return (
    <div className="App">
      {/* My App Component
      <Child parentName='Todo App' /> */}
      <TodoList />
    </div>
  );
}

export default Parent;
