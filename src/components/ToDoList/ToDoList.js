import React from 'react';
import ToDoListItem from '../ToDoListItem/ToDoListItem';
import './ToDoList.css';

const TodoList = ({todoItems, onDelete}) => {
  
  const elements = todoItems.map((element) => {
    
    const { id, ...otherProps} = element;

    return (
      
      <li key = {id} className ='list-group-item'>
        <ToDoListItem 
          {...otherProps}
          onDelete = {() => onDelete(id)}
          />
      </li>
    );
  });
  
  return (
    <ul className ='list-group todo-list'>
      {elements}
      
  </ul>);
  }

  export default TodoList;