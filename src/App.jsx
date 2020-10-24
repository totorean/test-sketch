import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import DocumentView from './templates/DocumentView';

const client = new ApolloClient({
    uri: 'https://graphql.sketch.cloud/api',
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <div className="App">
                <header>Sketch Test</header>
                <DocumentView />
            </div>
        </ApolloProvider>
    );
}

export default App;
