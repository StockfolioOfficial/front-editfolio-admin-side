import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
@import url("https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css");

  ${normalize}

  body,
div,
span,
h1,
h2,
h3,
h4,
h5,
h6,
p,
a,
abbr,
address,
em,
img,
q,
strong,
b,
i,
ol,
ul,
li,
form,
label,
article,
figure,
figcaption,
footer,
nav,
section,
main {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
}
ol,
ul,
li {
  list-style: none;
}
h1,
h2,
h3,
h4,
h5,
h6,
b,
strong,
i,
em {
  font-weight: normal;
  font-style: normal;
}
textarea {
  border: none;
  overflow: auto;
  outline: none;
  box-shadow: none;
  resize: none;
  cursor: text;
}
input,
button {
  border: none;
  outline: none;
  background: transparent;
}
button {
  cursor: pointer;
}
a {
  text-decoration: none;
  color: inherit;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

* {
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  box-sizing: border-box;
}
`;

export default GlobalStyle;
