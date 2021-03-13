import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`

    html, body{
        height:100%;
    }

    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Montserrat', sans-serif;
    }

    .btn-primary{
        background: #7c3ed0;
        border-color: #7c3ed0;
    }

    .btn-primary:hover{
        background: #7D59AF;
        border-color: #7D59AF;
    }

    }
`;

export const MainWrapper = styled.div`
    min-height: 100vh;
    background: #EDB9C5;
    max-width: 1280px;
    margin: 0 auto;
    position: relative;
    padding-top: 80px;
`;

MainWrapper.displayName = 'MainWrapper';

export const Nav = styled.nav`
    width:100%;
    height:60px;
    background: #412E5B;
    position: fixed;
    top:0;
    left:0;
    color: #D9BEFF;
    display: flex;
    justify-content: center;
    align-items: center;

    &, & *{
        z-index:9999;
    }

    & .form-inline{
        margin:0 5px;
    }

    & .form-inline *{
        margin: 0 5px;
        font-size: 1rem;
    }

`;

Nav.displayName = 'Nav';

export const MainContent = styled.div``;

MainContent.displayName = 'MainContent';

export const Sidebar = styled.div`
    padding: 30px 20px 20px 20px; 
    background: #FFE4EA;
`;

Sidebar.displayName = 'Sidebar';