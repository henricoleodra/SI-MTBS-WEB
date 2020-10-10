import React from 'react';
import {
    Layout,
    Lobby
} from '../../Containers';

const Index = () => {
    const Content = () => {
        return <Lobby/>
    }

    return (
        <Layout step={1} cur={'lobby'}>
            <Content/>
        </Layout>
    );
}

export default Index;