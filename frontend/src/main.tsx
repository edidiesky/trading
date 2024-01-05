import React from 'react'
import ReactDOM from 'react-dom'
import { Toaster } from "@/components/ui/toaster"
import './index.css'
import App from './App'
import {Provider} from 'react-redux'
import {store} from './store'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Toaster />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

