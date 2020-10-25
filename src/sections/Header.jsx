import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../style/globalTheme';
import logo from '../assets/sketch-logo.svg';
import separator from '../assets/separator.svg';

const StyledHeader = styled.header`
    color: ${(props) => props.theme.textColor};
    filter: drop-shadow(0 1px 3px ${(props) => props.theme.borderHeader});
    height: 60px;
    background-color: ${(props) => props.theme.bgHeader};
    padding: 15px 20px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Container = styled.div`
    display: flex;
    align-items: center;
`;

const LogoImg = styled.img`
    height: 27px;
`;

const SeparatorImg = styled.img`
    margin: 0px 20px;
    height: 35px;
`;

const DocName = styled.p`
    font-size: 1.6rem;
`;

function Header({ docName }) {
    return (
        <ThemeProvider theme={theme}>
            <StyledHeader>
                <Container>
                    <LogoImg src={logo} alt="sketch logo" />
                    <SeparatorImg src={separator} alt="" />
                    <DocName>{docName}</DocName>
                </Container>
            </StyledHeader>
        </ThemeProvider>
    );
}

Header.propTypes = {
    docName: PropTypes.string.isRequired,
};

export default Header;
