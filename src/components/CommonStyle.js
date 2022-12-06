import { createGlobalStyle } from 'styled-components'

const CommonStyle = createGlobalStyle`
 html{
     font-size: 100px !important;
     font-family: "Quicksand";
 }
 html,body{
    font-family: "Quicksand";
    overflow-x: hidden;
    overflow-y: scroll;
    &::-webkit-scrollbar{
        display: none;
    }
 }
 @media screen and (min-width: 1681px) {
    html {
        font-size:120px !important
    }
}
 @media screen and (max-width: 1680px) {
    html {
        font-size:100px !important
    }
}

@media screen and (max-width: 736px) {
    html {
        font-size:80px !important
    }
}

@media screen and (max-width: 414px) {
    html {
        font-size:60px !important
    }
}
`

export default CommonStyle
