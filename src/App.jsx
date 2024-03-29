import './App.css'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {

  return (
    <Provider store={store}>
      <h1 className='text-5xl'>Hello Taz</h1>
    </Provider>
  )
}

export default App
