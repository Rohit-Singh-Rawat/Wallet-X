import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import DashBoard from './components/DashBoard';
import SendMoney from './components/SendMoney';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path='/signup'
						element={<Signup></Signup>}
					/>
					<Route
						path='/signin'
						element={<Signin></Signin>}
					></Route>
					<Route
						path='/dashboard'
						element={<DashBoard></DashBoard>}
					></Route>
					<Route
						path='/send'
						element={<SendMoney></SendMoney>}
					></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
