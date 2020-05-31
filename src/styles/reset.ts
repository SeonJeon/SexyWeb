import { createGlobalStyle } from "styled-components";

const ResetStyle = createGlobalStyle`

@font-face {
  font-family: 'NexonGothic';
  src: url('/public/fonts/NEXON_Gothic.eot');
  src: url('/public/fonts/NEXON_Gothic.eot#iefix') format('embedded-opentype'),
       url('/public/fonts/NEXON_Gothic.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'NexonGothic';
  src: url('/public/fonts/NEXON_Gothic_Bold.eot');
  src: url('/public/fonts/NEXON_Gothic_Bold.eot#iefix') format('embedded-opentype'),
       url('/public/fonts/NEXON_Gothic_Bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-style:normal;
	box-sizing: border-box;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-spacing: 0;
	border-collapse: collapse;
}
hr {
	border: 0;
	border-bottom: 1px solid rgba(0, 0, 0, .15);
	margin: 0;
}
button, input, select, textarea {
	overflow:visible;
	-moz-border-radius:0;
	-webkit-border-radius:0;
	-ms-border-radius:0;
	border-radius:0;
	padding: 0;
	margin: 0;
	border: none;
	box-sizing: border-box;
}
input[type='text'],
input[type='number'],
input[type='password'],
select,
textarea {
	font-size: inherit;
	padding: 0;
	-webkit-appearance: none;
}
a {
	text-decoration: none;
	
	&:hover, &:link, &:visited {
		color: inherit;
	}
}
html, body{
	width: 100%;
	height: 100%;
	min-width: 375px;
	line-height: 1em;
	box-sizing: border-box;
	overflow: hidden;
	font-family: 'NexonGothic', 'Nanum Gothic', 'Malgun Gothic', '맑은 고딕', 'AppleSDGothicNeo', -apple-system, 'SF Pro Display', 'Roboto', 'Helvetica Neue', sans-serif;
	font-stretch: normal;
	font-style: normal;
}
`;

export default ResetStyle;
