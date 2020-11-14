import React from 'react';
import styled from 'styled-components';
import MultiItem from './MultiItem';
const MultiResultBlock = styled.div`
    width: 100%;
    display: flex;
    /* text-align: center; */
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

const MultiResult = () => {
    return (
        <MultiResultBlock>
            <MultiItem />
        </MultiResultBlock>
    );
};

export default MultiResult;
