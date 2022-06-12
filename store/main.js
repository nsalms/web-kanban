import { getField, updateField } from 'vuex-map-fields';

export const state = () => ({
  listTodos: [],
})

export const actions = {

}

export const mutations = {

  updateField,

  addNewTodo(state, statusText) {
    let nextTodoId = 0

    // Getting a last todo's ID added "1"
    if (state.listTodos.length !== 0) nextTodoId = parseInt(state.listTodos.slice(-1)[0].id) + 1

    console.log(nextTodoId)

    state.listTodos.push({
      id: nextTodoId,
      properties: [{
        id: 0,
        name: 'Title',
        type: 'Text',
        text: 'Unnamed ' + nextTodoId
      }, {
        id: 1,
        name: 'Status',
        type: 'Text',
        text: statusText
      }],
    })
  },

  addNewProperty(state, todoId) {
    let indexOfTodo = state.listTodos.findIndex(x => x.id == todoId);

    // Getting a last property's ID added "1"
    let nextPropertyId = state.listTodos[indexOfTodo].properties.slice(-1)[0].id + 1

    const blankData = {
      id: nextPropertyId,
      name: 'Property' + nextPropertyId,
      type: 'Text',
      text: 'Text ' + nextPropertyId
    }

    state.listTodos[indexOfTodo].properties.push(blankData)

  },

  deleteProperty(state, { todoId, propertyIndex }) {
    const indexOfTodo = state.listTodos.findIndex(x => x.id == todoId);
    const indexOfProperty = propertyIndex

    state.listTodos[indexOfTodo].properties.splice(indexOfProperty, 1)
  },
}

export const getters = {

  getField,

  getListOfTodos: (state) => {

    return state.listTodos

  },

  getListOfProperties: (state) => (todoId) => {
    const indexOfTodo = state.listTodos.findIndex(x => x.id == todoId)

    if (typeof state.listTodos[indexOfTodo] === 'undefined') {
      return []
    }
    else {
      return state.listTodos[indexOfTodo].properties
    }

  },
}

