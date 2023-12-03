import { createGlobalStyle } from "styled-components";

import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
        @font-face {
		font-family: 'JalnanGothicTTF';
		src: url('/Assets/Font/JalnanGothicTTF.ttf');
	    }
    }
	body{
		font-family: 'JalnanGothicTTF';
	}
	button: {
		border: none;
	}
	input {
		outline: none;
	}

`;
export default GlobalStyles;
