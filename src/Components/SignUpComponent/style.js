import styled from 'styled-components';

export const SignUpContainer = styled.div`
	background: #8c11be;
	width: 100%;
	height: 100vh;

	display: flex;
	flex-direction: column;
	padding-top: 40%;
	align-items: center;
	a {
		text-decoration: none;
		font-family: 'Raleway';
		font-style: normal;
		font-weight: 700;
		font-size: 15px;
		line-height: 18px;
		margin-top: 36px;
		color: #ffffff;
	}
	form {
		width: 80%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.submit {
			background: #a328d6;
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
`;
export const Logo = styled.img`
	width: 147px;
	height: 50px;
	margin-bottom: 24px;
`;
