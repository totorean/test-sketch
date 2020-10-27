import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SketchHeader } from '../style/globalTheme';
import logo from '../assets/sketch-logo.svg';
import separator from '../assets/separator.svg';

const Container = styled.div`
    display: flex;
    align-items: center;
`;

const LogoImg = styled.img`
    width: 3rem;
`;

const SeparatorImg = styled.img`
    margin: 0px 20px;
    height: 35px;
`;

const DocName = styled.p`
    font-size: 1.6rem;
`;

export default function ArtboardListHeader({ docName }) {
    return (
        <SketchHeader>
            <Container>
                <Link to="/" title="Home">
                    <LogoImg src={logo} alt="sketch logo" />
                </Link>
                <SeparatorImg src={separator} alt="" />
                <DocName>{docName}</DocName>
            </Container>
        </SketchHeader>
    );
}

ArtboardListHeader.propTypes = {
    docName: PropTypes.string.isRequired,
};
