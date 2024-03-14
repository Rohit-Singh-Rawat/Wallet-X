import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import DashBoard from './pages/DashBoard';
import SendMoney from './pages/SendMoney';
import Settings from './pages/Settings';
import Transactions from './pages/Transactions';
import { RecoilRoot } from 'recoil';
function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<RecoilRoot>
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
						<Route
							path='/settings'
							element={<Settings></Settings>}
						></Route>
						<Route
							path='/transactions'
							element={<Transactions></Transactions>}
						></Route>
					</Routes>
				</BrowserRouter>
			</RecoilRoot>
		</>
	);
}

export default App;
