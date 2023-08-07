import { composeWithDevTools } from '@redux-devtools/extension'
import { createStore } from 'redux'
import { messageReducer } from './Message/message.reducer'
let store = createStore(messageReducer,composeWithDevTools())

export { store }

