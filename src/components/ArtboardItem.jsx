import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ArtboardItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    align-items: center;
`;
const ArtboardThumbnail = styled.img.attrs((props) => ({
    height: props.originalHeight < 305 ? `${props.originalHeight}px` : 'auto',
    width: props.originalWidth < 240 ? `${props.originalWidth}px` : 'auto',
}))`
    max-height: 305px;
    max-width: 240px;
`;

const ArtboardLabel = styled.label`
    color: ${(props) => props.theme.labelColor};
    font-size: 1.2rem;
`;

function ArtboardItem({ data: { name, files } }) {
    return (
        <ArtboardItemWrapper>
            <ArtboardThumbnail
                src={files[0].thumbnails[0].url}
                srcSet={`${files[1].thumbnails[0].url} 2x`}
                alt={name}
                originalHeight={files[0].thumbnails[0].height}
                originalWidth={files[0].thumbnails[0].width}
            />
            <ArtboardLabel>{name}</ArtboardLabel>
        </ArtboardItemWrapper>
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
