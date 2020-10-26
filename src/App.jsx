import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DocumentView from './templates/DocumentView';
import ArtboardView from './templates/ArtboardView';

const client = new ApolloClient({
    uri: 'https://graphql.sketch.cloud/api',
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <div className="App">
                    <Switch>
                        <Route path="/" exact>
                            <DocumentView />
                        </Route>
                        <Route path="/:artboardIndex">
                            <ArtboardView />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </ApolloProvider>
    );
}

export default App;
