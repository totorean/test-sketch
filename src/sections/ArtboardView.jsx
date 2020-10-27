import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ArtboardWrapper = styled.div`
    width: 100vw;
    height: calc(100vh - ${(props) => props.theme.headerHeight});
    padding: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
`;

const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
    display: block;
`;

export default function ArtboardView({ artboard }) {
    return (
        <ArtboardWrapper>
            <Image
                src={artboard.files[0].url}
                srcSet={`${artboard.files[0].url} 1x, ${artboard.files[1].url} 2x`}
                alt={artboard.name}
            />
        </ArtboardWrapper>
    );
}

ArtboardView.propTypes = {
    artboard: PropTypes.shape({
        name: PropTypes.string.isRequired,
        files: PropTypes.arrayOf(
            PropTypes.shape({
                url: PropTypes.string.isRequired,
            }).isRequired
        ).isRequired,
    }).isRequired,
};
