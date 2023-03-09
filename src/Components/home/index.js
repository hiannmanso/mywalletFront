import * as s from './style';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

import exit from './../../Assets/exit.svg';
import remove from './../../Assets/ant-design_minus-circle-outlined.svg';
import add from './../../Assets/ant-design_plus-circle-outlined.svg';

export default function Home() {
	//const { token } = useContext(userContext);
	const navigation = useNavigate();
	const { token } = useLocation().state;
	const [infoUser, setInfoUser] = useState('');
	const [userTransaction, setUserTransaciton] = useState('');
	const [loadTransactions, setLoadTransactions] = useState(false);
	const [total, setTotal] = useState(0);

	function deleteTransaction(id) {
		if(window.confirm('Deseja deletar esse item?')===true){
			axios({
				method: 'delete',
				url: `${process.env.REACT_APP_URL}/transaction/${id}`,
			})
				.then((response) => {
					console.log(response);
					setLoadTransactions(!loadTransactions);
				})
				.catch((error) => {
					console.log(id);
					console.log(error);
				});
			
		}
	}

	useEffect(() => {
		console.log({ token });
		axios({
			method: 'get',
			url: `${process.env.REACT_APP_URL}/sign-in`,
			headers: {
				authorization: token,
			},
		})
			.then((response) => {
				console.log('token:', token);

				console.log(response);
				setInfoUser(response.data);
				setLoadTransactions(!loadTransactions);
			})
			.catch((err) => {
				console.log('erro no get');
				console.log(err);
			});
	}, []);
	useEffect(() => {
		axios({
			method: 'get',
			url: `${process.env.REACT_APP_URL}/transaction/${infoUser._id}`,
		})
			.then((response) => {
				setUserTransaciton(response.data);
				let cont = 0;
				for (let item of response.data) {
					if (item.type === 'add') {
						cont += Number(item.value);
					} else {
						cont -= Number(item.value);
					}
				}
				console.log(cont);
				setTotal(cont);
				console.log(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [loadTransactions]);
	return (
		<s.Home>
			<header>
				{!infoUser ? (
					<h1>Carregando dados...</h1>
				) : (
					<h1>Olá,{infoUser.name}</h1>
				)}

				<img
					src={exit}
					alt="skip"
					onClick={() => {
						if(window.confirm('Deseja sair da sua conta?')===true){

							navigation('/');
						}
					}}
				/>
			</header>
			<main>
				{!userTransaction ? (
					<h1>Não há registros de entrada ou saída</h1>
				) : (
					userTransaction.map((transaction) => {
						if (transaction.type === 'add') {
							console.log(transaction);

							return (
								<div>
									<div className="description">
										<h3>{transaction.date}</h3>
										<h4>{transaction.description}</h4>
									</div>
									<div className="price">
										<h2 className="green">
											{Number(transaction.value).toFixed(
												2
											)}
										</h2>
										<s.Cancel
											onClick={() => {
												deleteTransaction(
													transaction._id
												);
											}}
										>
											x
										</s.Cancel>
									</div>
								</div>
							);
						} else {
							return (
								<div>
									<div className="description">
										<h3>{transaction.date}</h3>
										<h4>{transaction.description}</h4>
									</div>
									<div className="price">
										<h2 className="red">
											{Number(transaction.value).toFixed(
												2
											)}
										</h2>
										<s.Cancel
											onClick={() => {
												deleteTransaction(
													transaction._id
												);
											}}
										>
											x
										</s.Cancel>
									</div>
								</div>
							);
						}
					})
				)}
				<div className="total">
					<p className="saldo">SALDO</p>

					{Number(total) > 0 ? (
						<p className="green"> {Number(total).toFixed(2)}</p>
					) : (
						<p className="red"> {Number(total).toFixed(2)}</p>
					)}
				</div>
			</main>
			<footer>
				<button
					onClick={() => {
						navigation(`/transaction/${infoUser._id}`, {
							state: { token, type: 'add' },
						});
					}}
				>
					<img src={add} alt="add" />
					<h1>
						Nova <br />
						entrada
					</h1>
				</button>

				{/* <Link to={`/transaction/${infoUser._id}/${type2}`}> */}
				<button
					onClick={() => {
						navigation(`/transaction/${infoUser._id}`, {
							state: { token, type: 'remove' },
						});
					}}
				>
					<img src={remove} alt="remove" />
					<h1>
						Nova <br />
						saida
					</h1>
				</button>
			</footer>
		</s.Home>
	);
}
