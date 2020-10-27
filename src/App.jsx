import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Document from './pages/Document';

const client = new ApolloClient({
    uri: 'https://graphql.sketch.cloud/api',
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <div className="App">
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/:documentId">
                        <Document />
                    </Route>
                </div>
            </Router>
        </ApolloProvider>
    );
}

export default App;
