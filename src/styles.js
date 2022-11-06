import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

:root {
    --primary-color: #fff;
    --secondary-color: #000;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

a {
    text-decoration: none;
}
`

export default GlobalStyle