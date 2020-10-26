import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ArtboardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 30px 0;
    align-items: center;

    @media (min-width: 1401px) {
        flex: 20%;
        max-width: 20%;
    }
    @media (min-width: 1201px) and (max-width: 1400px) {
        flex: 25%;
        max-width: 25%;
    }
    @media (min-width: 1025px) and (max-width: 1200px) {
        flex: 33%;
        max-width: 33%;
    }
    @media (min-width: 769px) and (max-width: 1024px) {
        flex: 50%;
        max-width: 50%;
    }
    @media (max-width: 768px) {
        flex: 100%;
        max-width: 100%;
    }
`;

const ThumbnailWrapper = styled.div`
    height: 305px;
    display: flex;
    align-items: center;
`;
const Thumbnail = styled.img`
    max-height: 305px;
    max-width: 240px;
`;

const Label = styled.label`
    color: ${(props) => props.theme.labelColor};
    font-size: 1.2rem;
    margin-top: 20px;
`;

function ArtboardItem({ data: { name, files } }) {
    return (
        <ArtboardWrapper>
            <ThumbnailWrapper>
                <Thumbnail
                    src={files[0].thumbnails[0].url}
                    srcSet={`${files[1].thumbnails[0].url} 2x`}
                    alt={name}
                />
            </ThumbnailWrapper>
            <Label>{name}</Label>
        </ArtboardWrapper>
    );
}

ArtboardItem.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        files: PropTypes.arrayOf(
            PropTypes.shape({
                thumbnails: PropTypes.arrayOf(
                    PropTypes.shape({
                        url: PropTypes.string.isRequired,
                        height: PropTypes.number.isRequired,
                        width: PropTypes.number.isRequired,
                    })
                ).isRequired,
            }).isRequired
        ).isRequired,
    }).isRequired,
};

export default ArtboardItem;
