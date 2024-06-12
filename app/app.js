const counter = document.querySelector(".counter-show")

const minusBtn = document.querySelector(".counter-btns-minus")
const resetBtn = document.querySelector(".counter-btns-reset")
const plusBtn = document.querySelector(".counter-btns-plus")

// create Counter Reducer

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case "DECREMENT": {
            return state - 1
        }
        case "SET_ZERO": {
            return state - state
        }
        case "INCREMENT": {
            return state + 1
        }
        default: {
            state
        }
    }
}

const store = Redux.createStore(counterReducer)

// handel Events

minusBtn.addEventListener("click", () => {
    store.dispatch({ type: "DECREMENT" })
    let newValue = store.getState()
    counter.innerHTML = newValue
})

resetBtn.addEventListener("click", () => {
    store.dispatch({ type: "SET_ZERO" })
    let newValue = store.getState()
    counter.innerHTML = newValue
})

plusBtn.addEventListener("click", () => {
    store.dispatch({ type: "INCREMENT" })
    let newValue = store.getState()
    counter.innerHTML = newValue
})