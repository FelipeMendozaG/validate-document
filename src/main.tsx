import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { HashRouter } from 'react-router-dom';
/* import { Provider } from 'react-redux';
import store from './store' */
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
  </HashRouter>
)

postMessage({ payload: 'removeLoading' }, '*')
