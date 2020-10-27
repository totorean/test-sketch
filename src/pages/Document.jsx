import React from 'react';
import { Route, useParams, useRouteMatch } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import { CenteredParagraph } from '../style/globalTheme';
import ArtboardListHeader from '../sections/ArtboardListHeader';
import ArtboardListView from '../sections/ArtboardListView';
import ArtboardView from '../sections/ArtboardView';
import ArtboardHeader from '../sections/ArtboardHeader';

const GET_DOCUMENT_DATA = gql`
    query GetDocumentData($docId: ID!) {
        share(shortId: $docId) {
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

export default function Document() {
    const { documentId } = useParams();
    const { path } = useRouteMatch();
    const { loading, error, data } = useQuery(GET_DOCUMENT_DATA, {
        variables: { docId: documentId },
    });

    function getArtboard(index) {
        return data.share.version.document.artboards.entries[index];
    }

    if (loading) return <CenteredParagraph>Loading...</CenteredParagraph>;
    if (error)
        return <CenteredParagraph>Error fetching document data! {error.message}</CenteredParagraph>;

    return (
        <>
            <Route exact path={path}>
                <ArtboardListHeader docName={data.share.version.document.name} />
                <ArtboardListView artboards={data.share.version.document.artboards.entries} />
            </Route>
            <Route
                path={`${path}/a/:artboardIndex`}
                render={(routeParams) => {
                    const currentArtboard = getArtboard(routeParams.match.params.artboardIndex);
                    return (
                        <>
                            <ArtboardHeader
                                artboardName={currentArtboard.name}
                                count={data.share.version.document.artboards.entries.length}
                            />
                            <ArtboardView artboard={currentArtboard} />
                        </>
                    );
                }}
            />
        </>
    );
}
