import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import userContext from '../Context/userContext';
import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';
import MyWallet from '../Pages/MyWallet';
import Transaction from '../Pages/Transaction';

export default function App() {
	const [token, setToken] = useState('');
	return (
		<BrowserRouter>
			<userContext.Provider value={{ token, setToken }}>
				<Routes>
					<Route path="/" element={<SignIn />} />
					<Route path="/sign-up" element={<SignUp />} />
					<Route path="/home" element={<MyWallet />} />
					<Route path="/transaction/:id" element={<Transaction />} />
				</Routes>
			</userContext.Provider>
		</BrowserRouter>
	);
}
