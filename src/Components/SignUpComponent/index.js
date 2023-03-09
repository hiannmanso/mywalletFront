import * as s from './style';
import { useState } from 'react';
import logo from './../../Assets/MyWallet.svg';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUpContainer() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const navegation = useNavigate();

	function createNewAccount(e) {
		if (password != confirmPassword) {
			alert('As senhas não são iguais, confirme sua senha corretamente');
		}
		e.preventDefault();
		if (password !== confirmPassword) {
			console.log('passwords nao sao iguais.');
			return;
		}
		axios({
			method: 'post',
			url: `${process.env.REACT_APP_URL}/sign-up`,
			data: {
				name,
				email,
				password,
			},
		})
			.then((response) => {
				console.log(response);
				navegation('/');
			})
			.catch((error) => {
				console.log(error);
				alert('email já em uso, tente outro por favor.');
			});
	}
	return (
		<s.SignUpContainer>
			<s.Logo classname="logo" src={logo} alt="logo" />
			<form onSubmit={createNewAccount}>
				<input
					type="text"
					placeholder="Nome"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					type="email"
					placeholder="E-mail"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type="password"
					placeholder="Senha"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<input
					type="password"
					placeholder="Confirme a senha"
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
				/>
				<input className="submit" type="submit" value="Criar Conta" />
			</form>
			<Link to="/">Já tem uma conta? Entre agora!</Link>
		</s.SignUpContainer>
	);
}
