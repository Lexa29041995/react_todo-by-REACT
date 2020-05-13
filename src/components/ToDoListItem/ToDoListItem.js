import React from 'react';

import './ToDoListItem.css'

class ToDoListItem extends React.Component {

    state = {
        done:false,
        important: false,
    };

    onLabelClick = () => {
        this.setState((state) => {
            return {
                done: !state.done
            };
        });
    };
    onImportantBtnClisc = () => {
        this.setState((state) =>{
            return{
                important: !state.important
            }
            
        });
    }

    render() {
        const { label, onDelete } = this.props;
        const { done, important } = this.state;

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }
        if (important) {
            classNames += ' important';
        }
    
        return (
            <div className = {classNames}>
                <span
                    className = 'todo-list-label'
                    onClick={ this.onLabelClick }
                >
                    { label }
                </span>
                <button className = 'btn btn-outline-success
                 btn-important'
                 onClick={this.onImportantBtnClisc}
                 >
                     <i className="fa fa-star" aria-hidden="true">
                    </i></button>
                <button className = 'btn btn-outline-danger'
                onClick = { onDelete }
                >
                    <i className="fa fa-trash" aria-hidden="true">
                    </i></button>
            </div>
            
        );
    }
}


export default ToDoListItem;