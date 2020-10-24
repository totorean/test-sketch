import React from 'react';
import { useQuery, gql } from '@apollo/client';

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

export default function DocumentView() {
    const { loading, error, data } = useQuery(DOCUMENT_DATA);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    return data.share.version.document.artboards.entries.map(({ name }) => <p>{name}</p>);
}
