import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext'; // Import your AuthProvider
import PrivateRoute from './pages/PrivateRoute'; // Import your PrivateRoute component
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import DashBoard from './pages/DashBoard';
import SendMoney from './pages/SendMoney';
import Settings from './pages/Settings';
import Transactions from './pages/Transactions';
import { RecoilRoot } from 'recoil';
import NotFound from './pages/NotFound';

function App() {
	const { authenticated } = useAuth();
	return (
		<>
			<RecoilRoot>
				{' '}
				<AuthProvider>
					<BrowserRouter>
						<Routes>
							<Route
								path='/signup'
								element={
									authenticated ? <Navigate to='/dashboard' /> : <Signup />
								}
							/>
							<Route
								path='/signin'
								element={
									authenticated ? <Navigate to='/dashboard' /> : <Signin />
								}
							/>

							{/* Private routes */}
							<Route
								path='/dashboard'
								element={
									<PrivateRoute>
										<DashBoard />
									</PrivateRoute>
								}
							/>
							<Route
								path='/send'
								element={
									<PrivateRoute>
										<SendMoney />
									</PrivateRoute>
								}
							/>
							<Route
								path='/settings'
								element={
									<PrivateRoute>
										<Settings />
									</PrivateRoute>
								}
							/>
							<Route
								path='/transactions'
								element={
									<PrivateRoute>
										<Transactions />
									</PrivateRoute>
								}
							/>
							<Route
								path='/'
								element={<Navigate to='/dashboard' />}
							/>
							<Route
								path='*'
								element={<NotFound />}
							/>
						</Routes>
					</BrowserRouter>
				</AuthProvider>
			</RecoilRoot>
		</>
	);
}

export default App;
