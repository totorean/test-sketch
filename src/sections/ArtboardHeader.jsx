import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
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

export default function ArtboardHeader({ artboardName, count }) {
    const { documentId, artboardIndex } = useParams();
    const history = useHistory();

    return (
        <SketchHeader>
            <Container>
                <CloseButton
                    closeHandler={() => {
                        history.push(`/${documentId}`);
                    }}
                />
                <SeparatorImg src={separator} alt="" />
                <Navigator
                    count={parseInt(count, 10)}
                    index={parseInt(artboardIndex, 10)}
                    goToIndex={(index) => {
                        history.push(`/${documentId}/a/${index}`);
                    }}
                />
            </Container>
            <ArtboardName>{artboardName}</ArtboardName>
        </SketchHeader>
    );
}

ArtboardHeader.propTypes = {
    artboardName: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
};
