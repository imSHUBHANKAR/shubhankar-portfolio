// import ReactDOM from 'react-dom'
// import App from './App'
// import './index.css'

// ReactDOM.render(<App/>,document.querySelector("#root"))
//above code is working fine but giving error when running long time in chrome
//----------other way to handle the error-------
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

// Add this block to suppress the ResizeObserver warning
if (typeof window !== 'undefined') {
  window.addEventListener('error', (e) => {
    if (e.message === 'ResizeObserver loop completed with undelivered notifications.') {
      e.stopImmediatePropagation();
    }
  });
}

ReactDOM.render(<App/>, document.querySelector("#root"))
