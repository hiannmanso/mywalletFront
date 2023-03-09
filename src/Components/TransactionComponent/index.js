import { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import * as s from './style';

export default function TransactionComponent() {
	const { id } = useParams();
	const navigation = useNavigate();
	const { token, type } = useLocation().state;
	const [value, setValue] = useState('');
	const [description, setDescription] = useState('');

	async function sendTransaction(e) {
		if (value != Number(value)) {
			alert('Insira um valor válido!');
			return;
		}
		if (description === '') {
			alert('Insira uma descrição!');
			return;
		}
		console.log({ value });
		console.log({ type });
		e.preventDefault();

		axios({
			method: 'post',
			url: `${process.env.REACT_APP_URL}/transaction/${id}`,
			data: {
				value,
				description,
				type,
			},
		})
			.then((response) => {
				console.log(response);
				navigation('/home', { state: { token } });
			})
			.catch((err) => {
				console.log(err);
			});
	}
	return (
		<s.TransactionContainer>
			<header>
				<h1>Nova {type === 'add' ? 'Entrada' : 'Saida'}</h1>
			</header>
			<form onSubmit={() => sendTransaction}>
				<input
					type="text"
					value={value}
					placeholder="Valor"
					onChange={(e) => {
						setValue(e.target.value);
					}}
				/>
				<input
					type="text"
					value={description}
					placeholder="Descrição"
					onChange={(e) => {
						setDescription(e.target.value);
					}}
				/>
				{type === 'add' ? (
					<input
						className="submit"
						onClick={sendTransaction}
						value="Salvar Entrada"
					/>
				) : (
					<input
						className="submit"
						onClick={sendTransaction}
						value="Salvar Saida"
					/>
				)}
			</form>
		</s.TransactionContainer>
	);
}
