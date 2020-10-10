import React from 'react';
import {
    Layout,
    Beranda 
} from '../../Containers'

const Index = ( props ) => {
    return (
        <Layout step={0} cur={'beranda'}>
            <Beranda/>
        </Layout>
    );
}  

export default Index;