// import { useState, useRef } from "react";
// import TodoList from "./TodoList";
// import { v4 as uuidv4 } from "uuid";
// import '@aws-amplify/ui-react/styles.css';
// import { Amplify, Auth } from 'aws-amplify';
// import { withAuthenticator } from '@aws-amplify/ui-react';
// import aws_exports from './aws-exports';

// Amplify.configure(aws_exports);

// function App() {
//   const [todos, setTodos] = useState([
//     {id: 1, name: "Todo1", completed: true},
//   ]);

//   const todoNameRef = useRef();

//   const handleAddTodo = () => {
//     // タスクを追加する
//     const name = todoNameRef.current.value;
//     setTodos((prevTodos) => {
//       return [...prevTodos, {id: uuidv4(), name: name, completed: false}];
//     });
//     todoNameRef.current.value = null;
//   };

//   const toggleTodo = (id) => {
//     const newTodos = [...todos];
//     const todo = newTodos.find((todo) => todo.id === id);
//     todo.completed = !todo.completed;
//     setTodos(newTodos);
//   }

//   const handleClear = () => {
//     const newTodos = todos.filter((todo) => !todo.completed);
//     setTodos(newTodos);
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//       <h2><a className="App-link" href="." onClick={Auth.signOut}>Sign Out</a></h2>
//       </header>
//       <TodoList todos={todos} toggleTodo={toggleTodo}/>
//       <input type="text" ref={todoNameRef}></input>
//       <button onClick={handleAddTodo}>タスクを追加</button>
//       <button onClick={handleClear}>完了したタスクの削除</button>
//       <div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
//     </div>
//   );
// }

// export default withAuthenticator(App);

import './App.css';
import '@aws-amplify/ui-react/styles.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { CommentCard } from './ui-components';
import { DataStore } from 'aws-amplify';
import { useState } from 'react';
import { Board } from './models';

const content1 = <ActivityReports />;
const content2 = <p>未実装</p>;
const content3 = <p>未実装</p>;
const content4 = <p>未実装</p>;

function App() {
  // const [content1, setContent1] = useState();

  // DataStore.query(Board).then(boards=>{
  //   const data = [];
  //   for(let board of boards) {
  //     data.push(
  //       <CommentCard
  //       board={board}
  //       key={board.id}
  //     />
  //     )
  //   }
  //   setContent1(<div>
  //     {data}
  //   </div>)
  // })
  return (
    <div>
      <div className='py-4'>
        <p>活動報告や拡大エピソードを見てみよう</p>
      </div>
      <ul className='nav nav-tabs'>
        <li className='nav-item'>
          <a href='#activityReports' className='nav-link active' data-bs-toggle='tab'>活動報告</a>
        </li>
        <li className='nav-item'>
          <a href='#extendedEpisode' className='nav-link' data-bs-toggle='tab'>拡大エピソード</a>
        </li>
        <li className='nav-item'>
          <a href='#teachingLearning' className='nav-link' data-bs-toggle='tab'>教学</a>
        </li>
        <li className='nav-item'>
          <a href='#material' className='nav-link' data-bs-toggle='tab'>資料</a>
        </li>
      </ul>
      <div className='tab-content'>
        <div id='activityReports' className='my-2 tab-pane active'>
          { content1 }
        </div>
        <div id='extendedEpisode' className='my-2 tab-pane'>
          { content2 }
        </div>
        <div id='teachingLearning' className='my-2 tab-pane'>
          { content3 }
        </div>
        <div id='material' className='my-2 tab-pane'>
          { content4 }
        </div>
      </div>
    </div>
  )
}

function ActivityReport(board) {
  return (
    <div className='py-2 border-1'>
      <CommentCard
        board={board}
        key={board.id}
      />
    </div>
  )
}

function ActivityReports() {
  return (
    <div>
      <div className='py-4'>
        <p>家庭訪問や清掃活動などの活動報告はこちら</p>
      </div>
      <ActivityReport />
      <ActivityReport />
      <ActivityReport />
    </div>
  )
}

export default withAuthenticator(App);