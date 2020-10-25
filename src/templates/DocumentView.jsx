import React, { Fragment } from 'react';
import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';
import Header from '../sections/Header';
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
    justify-content: center;
`;

export default function DocumentView() {
    const { loading, error, data } = useQuery(DOCUMENT_DATA);

    if (loading) return <p>Loading...</p>;
    if (error) return `Error! ${error}`;

    return (
        <>
            <Header docName={data.share.version.document.name} />
            <ArtboardList>
                {data.share.version.document.artboards.entries.map((artboard) => (
                    <ArtboardItem data={artboard} />
                ))}
            </ArtboardList>
        </>
    );
}
