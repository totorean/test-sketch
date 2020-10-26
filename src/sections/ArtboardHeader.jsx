import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navigator from '../components/Navigator';
import CloseButton from '../components/CloseButton';
import { SketchHeader } from '../style/globalTheme';
import separator from '../assets/separator.svg';

const Container = styled.div`
    display: flex;
    align-items: center;
    width: 33%;
`;

const SeparatorImg = styled.img`
    margin: 0px 20px;
    height: 35px;
`;

const ArtboardName = styled.p`
    font-size: 1.6rem;
    text-align: center;
    width: 33%;
`;

function ArtboardHeader({ artboardName }) {
    return (
        <SketchHeader>
            <Container>
                <CloseButton closeHandler={() => {}} />
                <SeparatorImg src={separator} alt="" />
                <Navigator count={12} startIndex={3} goToItem={() => {}} />
            </Container>
            <ArtboardName>{artboardName}</ArtboardName>
        </SketchHeader>
    );
}

ArtboardHeader.propTypes = {
    artboardName: PropTypes.string.isRequired,
};

export default ArtboardHeader;
