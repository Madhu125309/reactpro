import Message from './Message/Message'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const App=()=>  {
    
    return<Provider store={store}>
    <div>
      
      <h1>App comp</h1>
      <hr/>
      <Message/>
     
    </div>
    </Provider>
}

export default App