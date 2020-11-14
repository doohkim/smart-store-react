import React from 'react';
import styled from 'styled-components';

const SampleTableHeadersBlock = styled.div`
    .thumbnail {
        font-size: 12px;
        color: white;
    }

    & + & {
        margin-top: 3rem;
    }
`;

const SampleTableHeaders = ({ headers }) => {
    console.log(headers);
    return (
        <SampleTableHeadersBlock>
            <div className="thumbnail">{headers}</div>
            {/* <div className="contents">
                <div>{headers.page}</div>
            </div>
            <div className="contents">
                <div>{headers.each_page_rank}</div>
            </div>
            <div className="contents">
                <div>{headers.keword}</div>
            </div>
            <div className="contents">
                <div>{headers.PC_search}</div>
            </div>
            <div className="contents">
                <div>{headers.Mobile_search}</div>{' '}
            </div>
            <div className="contents">
                <div>{headers.title}</div>
            </div>
            <div className="contents">
                <div>{headers.brand}</div>
            </div>
            <div className="contents">
                <div>{headers.rank}</div>
            </div> */}
        </SampleTableHeadersBlock>
    );
};

export default SampleTableHeaders;
