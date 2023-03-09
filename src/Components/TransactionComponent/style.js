import styled from 'styled-components';

export const TransactionContainer = styled.div`
	//box-sizing: border-box;
	background: #8c11be;
	width: 100%;
	height: 100vh;

	display: flex;
	flex-direction: column;
	padding-top: 10%;
	align-items: center;
	.submit {
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		background: #a328d6;
		width: 75%;
		text-decoration: none;
		border: none;
		border-radius: 5px;
		font-family: 'Raleway';
		font-style: normal;
		font-weight: 700;
		font-size: 20px;
		line-height: 23px;

		color: #ffffff;
	}
	form {
		align-items: center;
		width: 80%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	input:focus {
		outline: none;
	}
	input {
		box-sizing: border-box;
		width: 100%;
		height: 58px;
		margin-bottom: 13px;
		border: none;
		border-radius: 5px;
		padding: 18px 0 17px 15px;
	}
	input::placeholder {
		font-family: 'Raleway';
		font-style: normal;
		font-weight: 400;
		font-size: 20px;
		line-height: 23px;
		color: #000000;
	}
	header {
		padding: 25px 24px 40px 24px;
		width: 90%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		h1 {
			font-family: 'Raleway';
			font-style: normal;
			font-weight: 700;
			font-size: 26px;
			line-height: 31px;

			color: #ffffff;
		}
	}
`;
