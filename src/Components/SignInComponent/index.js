import { useState, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import * as s from './style';
import logo from './../../Assets/MyWallet.svg';
import userContext from '../../Context/userContext';

export default function SignInComponent() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigation = useNavigate();
	const { token, setToken } = useContext(userContext);

	async function loginUser(e) {
		e.preventDefault();
		try {
			const validation = await axios({
				method: 'post',
				url: 'http://localhost:5000/sign-in',
				data: {
					email,
					password,
				},
			});
			await setToken(validation.data);
			console.log(token);

			navigation('/home', { state: { token: validation.data } });
		} catch (err) {
			console.log(err);
		}
	}

	return (
		<s.SignUpContainer>
			<s.Logo classname="logo" src={logo} alt="logo" />
			<form onSubmit={loginUser}>
				<input
					type="email"
					placeholder="E-mail"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
						//	console.log(email);
					}}
				/>
				<input
					type="password"
					placeholder="Senha"
					value={password}
					onChange={(e) => {
						setPassword(e.target.value);
					}}
				/>
				<input className="submit" type="submit" value="Entrar" />
			</form>
			<Link to="/sign-up">Primeira vez? Cadastre-se!</Link>
		</s.SignUpContainer>
	);
}
