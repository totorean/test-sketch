import React from 'react';
import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';
import { Link, useRouteMatch } from 'react-router-dom';
import DocumentHeader from '../sections/DocumentHeader';
import ArtboardItem from '../components/ArtboardItem';

const DOCUMENT_DATA = gql`
    query GetDocumentData {
        share(shortId: "Y8wDM") {
            shortId
            version {
                document {
                    name
                    artboards {
                        entries {
                            name
                            isArtboard
                            files {
                                url
                                height
                                width
                                scale
                                thumbnails {
                                    url
                                    height
                                    width
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

const ArtboardList = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export default function DocumentView() {
    const { loading, error, data } = useQuery(DOCUMENT_DATA);
    const { path, url } = useRouteMatch();

    if (loading) return <p>Loading...</p>;
    if (error) return `Error! ${error}`;

    console.log(data);
    console.log(path);
    console.log(url);
    return (
        <>
            <DocumentHeader docName={data.share.version.document.name} />
            <ArtboardList>
                {data.share.version.document.artboards.entries.map((artboard, index) => (
                    <Link to={`/${index}`} key={artboard.name.toLowerCase().replace(' ', '-')}>
                        <ArtboardItem data={artboard} />
                    </Link>
                ))}
            </ArtboardList>
        </>
    );
}
