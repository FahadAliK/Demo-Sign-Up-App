import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route element={<Login />} path="/login" />
					<Route element={<Register />} path="/register" />
					<Route path="*" element={<Login />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
