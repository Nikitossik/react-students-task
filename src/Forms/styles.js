import styled from 'styled-components';

export const Group = styled.div`
    &.form-group label{
        color: #412E5B;
        font-weight: 600;
    }

    &.form-check label{
        font-weight: 800;
        color: #412E5B;
    }

    & input[type='']{
        max-width: 150px;
    }

    &.form-group input{
        border-radius: 10px;
        border:none;
        font-weight: 600;
        background: #fff;
        color: #412E5B;
        border: 2px solid #7C3ED0;
    }

    &.form-group input::placeholder{
        color: #986CD5;
        font-weight: 500;
    }

    &.input-group span{
        display: block;
        width: 100px;
        text-align: center;
        background: #fff;
        color: #412E5B;
        font-weight: 700;
        margin-right: 10px;
        border: 2px solid #C8B1E9;
    }
    &.input-group input{
        border: 2px solid #C8B1E9;
        color: #412E5B;
        font-weight: 900;
    }

    &.input-group input::placeholder{
        color: #986CD5;
        font-weight: 400;
    }

    & [type='submit']{
        margin: 10px auto;
    }

    & #searchBar{
        border-radius: 10px;
        border:none;
    }

    & #searchBar{
        font-weight: 600;
        color: #412E5B;
    }

    & #searchBar::placeholder{
        color: #986CD5;
        font-weight: 400;
    }

    & #avg-mark-span{
        display: block;
        font-size: 18px;
        color: #412E5B;
        text-align: center;
        font-weight: bold;
    }

`;

Group.displayName = 'FormGroup';

export const Select = styled.select`
    & {
        background: #986CD5 !important;
        color:#fff  !important;
        font-weight: 700;
        display:block;
        padding-top: 5px;
        padding-left: 10px;
    }

    & option{
        display:block;
        font-weight: 700;
        background: #BBA9D5 !important;
    }
`;

Select.displayName = 'Select';