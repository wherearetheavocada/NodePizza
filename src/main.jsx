import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import Home from './pages/home/Home.jsx'
import store from './store/store.js'

createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</BrowserRouter>
	</Provider>
)
