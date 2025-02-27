/** @odoo-module **/

import {Component,useState,useRef,onMounted} from "@odoo/owl"
import {TodoItem} from "@todo_list/todoitem/todoitem"


export class TodoList extends Component{
    static template = 'todolist.TodoList'

    static components = {TodoItem}

    setup(){
    this.todos = useState(
    [
    { id: 1, description: "buy milk", isCompleted: true },
    { id: 2, description: "buy coffee", isCompleted: false },
    { id: 3, description: "buy sugar", isCompleted: false },
    ]
    );

    this.inputRef = useRef('input')

    onMounted(()=>{
         this.inputRef.el.focus();
    });

}



    addTodo(ev){
        if(ev.keyCode===13){
            const text = ev.target.value.trim();
            console.log(text);
            ev.target.value = ""

                    if(text){
            this.todos.push({id:this.todos.length+1,description:`${text}`,isCompleted:false})
        }
        }

    }

    handleToggle(todo){
        todo.isCompleted = !todo.isCompleted
    }

    OnDelete(elId){
        const index = this.todos.findIndex((el)=>el.id == elId);

        if(index > 0){
            this.todos.splice(index,1);
        }

    }


}