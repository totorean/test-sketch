import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const theme = {
    bgBody: '#F7F7F7',
    textColor: '#121212',
    labelColor: '#727272',
    bgHeader: '#FFFFFF',
    borderHeader: '#EBEBEB',

    headerHeight: '60px',
};

export const SketchHeader = styled.header`
    color: ${theme.textColor};
    filter: drop-shadow(0 1px 3px ${theme.borderHeader});
    height: ${theme.headerHeight};
    background-color: ${theme.bgHeader};
    padding: 15px 20px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
`;

export const TransparentButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
`;

export const CenteredParagraph = styled.p`
    font-size: 1.4rem;
    text-align: center;
    margin-top: 200px;
`;

export const CenteredDiv = styled.div`
    text-align: center;
    margin-top: 200px;
`;
