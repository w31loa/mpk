import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ModalState } from './context/modal.context.tsx'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
      <PrimeReactProvider>
          <ModalState>
                    <App/>
            </ModalState>
      </PrimeReactProvider>
   
    <ToastContainer position='bottom-right' autoClose={2000} theme='dark'/>
  </Provider>
)
