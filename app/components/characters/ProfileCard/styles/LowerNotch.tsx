import styled from 'styled-components'

export const LowerNotch = styled.div`
	position: absolute;
	bottom: -2px;
	right: 42.8%;
	height: 2rem;
	width: 2.65rem;
	z-index: 0;
	background-color: #13111a;
	border-width: 2px 2px 0 2px;
	border-top-right-radius: 50%;
	border-top-left-radius: 50%;
	display: inline-block;

	@media screen and (max-width: 768px) {
		bottom: -2px;
		height: 2rem;
		width: 2.2rem;
		right: 46%;
	}

	@media screen and (min-width: 1024px) {
		bottom: -2px;
		height: 2.4rem;
		width: 3rem;
		right: 42%;
	}
`
