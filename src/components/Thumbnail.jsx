import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ArtboardLink = styled(Link)`
    display: flex;
    flex-direction: column;
    margin: 30px 0;
    align-items: center;
    text-decoration: none;
    border: 1px solid transparent;
    box-sizing: border-box;

    &:hover,
    &:active {
        border: 1px dashed ${(props) => props.theme.labelColor};
    }

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
    margin: 20px 0 5px 0;
`;

export default function ArtboardListItem({ imgSource, imgSource2x, label, linkTo }) {
    return (
        <ArtboardLink to={linkTo}>
            <ThumbnailWrapper>
                <Thumbnail
                    src={imgSource}
                    srcSet={`${imgSource} 1x, ${imgSource2x} 2x`}
                    alt={label}
                />
            </ThumbnailWrapper>
            <Label>{label}</Label>
        </ArtboardLink>
    );
}

ArtboardListItem.propTypes = {
    imgSource: PropTypes.string.isRequired,
    imgSource2x: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired,
};
