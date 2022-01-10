export const state = () => ({
  listTodos: []
})

export const actions = {

  /*getTodo(context, todoId) {
    context.commit('pushTodoInfo', newData)
  },

  /*addNewProperty({commit, state}, todoId) {
    const nextPropertyId = state.todoInfo.properties.length

    const blankPropertyData = {
      propertyId: nextPropertyId,
      name: '',
      type: 'Text',
      text: ''
    }
    state.todoInfo.properties.push(blankPropertyData)
    localStorage.setItem(""+todoId, JSON.stringify(state.todoInfo))
  },

  deleteProperty(context, {todoId, propertyId}) {
    index = state.todoInfo.properties.findIndex(x => x.propertyId == propertyId)
    state.todoInfo.properties.splice(index, 1)

    localStorage.setItem(""+todoId, JSON.stringify(state.todoInfo))
  }*/
}

export const mutations = {

  /*pushTodoInfo (state, newData) {
    state.todoInfo = newData
  },
  
  addNewProperty(state, blankPropertyData) {
    state.todoInfo.properties.push(blankPropertyData)
  },

  deleteProperty(state, propertyId) {
    index = state.todoInfo.properties.findIndex(x => x.propertyId == propertyId)
    state.todoInfo.properties.splice(index, 1)
  }*/

  addNewProperty(state, todoId) {
    let indexOfTodo = state.listTodos.findIndex(x => x.id == todoId);
    let nextPropertyId
    
    if (typeof state.listTodos[indexOfTodo] === 'undefined') {
      nextPropertyId = 0
    }
    else {
      nextPropertyId = state.listTodos[indexOfTodo].properties.length
    }
    
    const blankData = {
      propertyId: nextPropertyId,
      name: 'Property' + nextPropertyId,
      type: '',
      text: 'Text ' + nextPropertyId
    }
    if (indexOfTodo === -1) {
      state.listTodos.push({
        id: todoId,
        properties: [blankData],
        fuck:true
      })
      
    }
    
    if (typeof state.listTodos[indexOfTodo] === 'undefined') {
      console.log('No data')
    }
    else {
      
      state.listTodos[indexOfTodo].properties.push(blankData)
      console.log(state.listTodos[indexOfTodo].properties)
    }
  },

  deleteProperty(state, {todoId, propertyId}) {
    const indexOfTodo = state.listTodos.findIndex(x => x.id == todoId);
    const indexOfProperty = state.listTodos[indexOfTodo].properties.findIndex(x => x.propertyId == propertyId);
    console.log(indexOfProperty)
    state.listTodos[indexOfTodo].properties.splice(indexOfProperty, 1)
  },


  // НАДО УПРОСТИТЬ https://github.com/maoberlehner/vuex-map-fields

  updatePropertyName(state, {todoId, propertyId, newValue}) {
    const indexOfTodo = state.listTodos.findIndex(x => x.id == todoId);
    const indexOfProperty = state.listTodos[indexOfTodo].properties.findIndex(x => x.propertyId == propertyId);

    state.listTodos[indexOfTodo].properties[indexOfProperty].name = newValue
  },

  updatePropertyType(state, {todoId, propertyId, newValue}) {
    const indexOfTodo = state.listTodos.findIndex(x => x.id == todoId);
    const indexOfProperty = state.listTodos[indexOfTodo].properties.findIndex(x => x.propertyId == propertyId);

    state.listTodos[indexOfTodo].properties[indexOfProperty].type = newValue
  },

  updatePropertyText(state, {todoId, propertyId, newValue}) {
    const indexOfTodo = state.listTodos.findIndex(x => x.id == todoId);
    const indexOfProperty = state.listTodos[indexOfTodo].properties.findIndex(x => x.propertyId == propertyId);

    state.listTodos[indexOfTodo].properties[indexOfProperty].text = newValue
  }
}

export const getters = {

  getListOfProperties: (state) => (todoId) => {
    const indexOfTodo = state.listTodos.findIndex(x => x.id == todoId)

    if (typeof state.listTodos[indexOfTodo] === 'undefined') {
      return 0
    }
    else {
      return state.listTodos[indexOfTodo].properties
    }
    
  },

  getPropertyField: (state) => (todoId, propertyId) => {
    const indexOfTodo = state.listTodos.findIndex(x => x.id == todoId);
    const indexOfProperty = state.listTodos[indexOfTodo].properties.findIndex(x => x.propertyId == propertyId);

    return state.listTodos[indexOfTodo].properties[indexOfProperty]
  }
}

 