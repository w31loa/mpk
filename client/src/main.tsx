import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
    <ToastContainer position='bottom-right' autoClose={2000} theme='dark'/>
  </Provider>
)
