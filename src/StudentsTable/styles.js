import styled from 'styled-components';

export const StudentsContent = styled.div`
    background: #FFE4EA;
    padding: 20px;
    min-height: 60vh;

    &.empty{
        display:table;
    }

    &.empty h2{
        font-size: 2rem;
        color: #7C3ED0;
        text-align: center;
        vertical-align:middle;
        display:table-cell;
    }

    & .table td{
        background: #FFF;
    }

    & .table th{
        background: #FFF0F3;
        font-size: 1.1rem;
    }

    & .table td, .table th {
        border: 2px solid #c8b1e9;
        text-align: center;
        vertical-align: middle;
        color: #412E5B;
        
    }

`;

StudentsContent.displayName = 'StudentsContent';
