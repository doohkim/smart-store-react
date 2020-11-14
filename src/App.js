import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import Footer from './components/Footer';
import img from './img/smartstorebackground.png';
import SampleHeader from './components/SampleHeader';
import Body from './components/Body';
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 1920px;
    height: 1080px;
    /* height: 10000px; */
    background-image: url(${img});
    backdrop-filter: blur(2px);
    background-color: rgba(52, 52, 52, 0.5);

    .head1 {
        position: relative;
        color: white;
        text-align: center;
        margin-top: 5rem;
    }
    .head2 {
        position: relative;
        color: white;
        text-align: center;
    }
    .description {
        position: relative;
        color: white;
        text-align: center;
        font-size: 10pt;
    }
    .recentsearch {
        width: 100%;
        display: flex;
        justify-content: center;
        vertical-align: middle;
        button {
            background: none;
            color: white;
        }
        input {
            border: none;
            background: none;
            color: white;
            padding: 4px;
        }
    }
`;

const App = () => {
    return (
        <div>
            <Container>
                <SampleHeader />
                <Body />
            </Container>
            <Footer />
        </div>
    );
};

export default withRouter(App);
