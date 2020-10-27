import React from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import Thumbnail from '../components/Thumbnail';

const ArtboardList = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export default function ArtboardListView({ artboards }) {
    const { url } = useRouteMatch();

    return (
        <ArtboardList>
            {artboards.map((artboard, index) => (
                <Thumbnail
                    label={artboard.name}
                    imgSource={artboard.files[0].thumbnails[0].url}
                    imgSource2x={artboard.files[1].thumbnails[0].url}
                    linkTo={`${url}/a/${index}`}
                    key={artboard.name.toLowerCase().replace(' ', '-')}
                />
            ))}
        </ArtboardList>
    );
}

ArtboardListView.propTypes = {
    artboards: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            files: PropTypes.arrayOf(
                PropTypes.shape({
                    thumbnails: PropTypes.arrayOf(
                        PropTypes.shape({
                            url: PropTypes.string.isRequired,
                        })
                    ).isRequired,
                }).isRequired
            ).isRequired,
        }).isRequired
    ).isRequired,
};
