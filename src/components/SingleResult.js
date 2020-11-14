import React from 'react';
import styled from 'styled-components';
import SingleItem from './SingleItem';

const SingleResultBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 100%;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const SingleResult = ({ data }) => {
    return (
        <SingleResultBlock>
            {data.complete_result_data.map((result, key) => (
                <SingleItem key={key} result={result} />
            ))}
        </SingleResultBlock>
    );
};
export default SingleResult;
