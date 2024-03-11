import Redux from "redux";

// Actions
const ADD_TODO = "Add TODO";
const TOGGLE_TODO = "Toggle TODO";

// Actions Creater

const addTodo = (text) => ({ text, type: ADD_TODO });
const toggleTodo = (index) => ({ index, type: TOGGLE_TODO });

// initial state
const initiState = {
  todos: [],
};

// Reducers
// reducers returns updated state if they are updated
function todoReducer(state = initiState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false,
          },
        ],
      };
    case TOGGLE_TODO:
        return{
            ...state,
            todos: todos.map((todo, i) =>{
                if(i===action.index){
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        }
    default:
      return state;
  }
}
