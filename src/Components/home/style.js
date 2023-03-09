import styled from 'styled-components';

export const Home = styled.div`
	background: #8c11be;
	width: 100%;
	height: 100vh;

	display: flex;
	flex-direction: column;
	align-items: center;
	header {
		padding: 25px 24px 22px 24px;
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
		img{
			:hover{
				scale: 1.1;
			}
		}
	}
	main {
		overflow: scroll;
		padding: 10px;
		margin-bottom: 13px;
		position: relative;
		width: 80%;
		height: 446px;
		flex-direction: column;
		background: #ffffff;
		border-radius: 5px;
		display: flex;
		/* justify-content: center;
		align-items: center; */
		.green {
			font-family: 'Raleway';
			font-style: normal;
			font-weight: 400;
			font-size: 16px;
			line-height: 19px;

			color: green;
		}
		.red {
			font-family: 'Raleway';
			font-style: normal;
			font-weight: 400;
			font-size: 16px;
			line-height: 19px;

			color: red;
		}
		div {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			.description {
				h3 {
					margin-right: 10px;
					font-family: 'Raleway';
					font-style: normal;
					font-weight: 400;
					font-size: 16px;
					line-height: 19px;

					color: #c6c6c6;
				}
				h4 {
					font-family: 'Raleway';
					font-style: normal;
					font-weight: 400;
					font-size: 16px;
					line-height: 19px;

					color: #000000;
				}
				.prince {
					/* box-sizing: border-box; */
					display: flex;
					flex-direction: row;
					/* h5 {
						margin-left: 10px;
						width: 40px;
						height: auto;
					} */
				}
			}
		}
		h1 {
			width: 180px;
			height: 46px;
			font-family: 'Raleway';
			font-style: normal;
			font-weight: 400;
			font-size: 20px;
			line-height: 23px;
			text-align: center;

			color: #868686;
		}
	}
	footer {
		width: 85%;
		display: flex;
		align-items: center;
		flex-direction: row;
		button{
			margin-left: 10px;
		}
		justify-content: center;
	}
	button {
		display: flex;
		flex-direction: column;
		padding: 9px 0 9px 8px;
		img {
		}
		h1 {
			width: 64px;
			height: 40px;
			padding: 32.56px 0 0 0;
			font-family: 'Raleway';
			font-style: normal;
			font-weight: 700;
			font-size: 17px;
			line-height: 20px;
			text-align: left;

			color: #ffffff;
		}
		border: none;
		width: 155px;
		height: 114px;
		left: 25px;
		top: 537px;

		background: #a328d6;
		border-radius: 5px;
		:hover{
			scale: 1.1;
		}
	}

	.total {
		position: absolute;
		bottom: 10px;
		left: 10px;
		right: 10px;
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		.saldo {
			font-family: 'Raleway';
			font-style: normal;
			font-weight: 700;
			font-size: 17px;
			line-height: 20px;
			/* identical to box height */

			color: #000000;
		}
	}
`;
export const Cancel = styled.h5`
	margin-left: 10px;
	width: 10px;
	height: auto;

	font-family: 'Raleway';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;
	text-align: center;
	:hover{
		scale:1.2;
		color:black;
		cursor:pointer;
	}
	color: #c6c6c6;
`;
