import React, { useState } from 'react';
import { Container } from 'reactstrap';
import { Wrapper } from './style';

const Footer = () => {
    return (
        <Wrapper>
            <Container className="text-center wrapper-footer mx-0 p-3 shadow-lg" fluid>
                <h1 className="text-white footer-text">Copyright © 2020 Tim Pengembangan SI-MTBS</h1>
            </Container>
        </Wrapper>
    );
}

export default Footer;