import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CenteredDiv } from '../style/globalTheme';

const HomeParagraph = styled.div`
    font-size: 1.4rem;
    margin-bottom: 30px;
`;

const HomeLink = styled(Link)`
    font-size: 1.4rem;
    margin: 10px;
`;

export default function Home() {
    return (
        <CenteredDiv>
            <HomeParagraph>Choose a document:</HomeParagraph>
            <span>
                <HomeLink to="/Y8wDM"> Document Y8wDM</HomeLink>
                <HomeLink to="/4W43q">Document 4W43q</HomeLink>
            </span>
        </CenteredDiv>
    );
}
