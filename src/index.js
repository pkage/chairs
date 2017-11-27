import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/app.js'

const API_URL = '/api'
const rootEl = document.querySelector('#root')
const render = () => ReactDOM.render(
	<App apiUrl={API_URL}/>,
	rootEl
)

render()
