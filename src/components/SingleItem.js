import React from 'react';
import styled from 'styled-components';

const SingleItemBlock = styled.div`
    display: flex;

    .thumbnail {
        margin-right: 1rem;
        img {
            display: block;
            width: 80px;
            height: 60px;
            object-fit: cover;
        }
    }
    .contents {
        h2 {
            margin: 0;
            a {
                color: black;
            }
        }
        p {
            margin: 0;
            line-height: 1.5;
            margin-top: 0.5rem;
            white-space: normal;
        }
    }
    & + & {
        margin-top: 3rem;
    }
`;

const SingleItem = ({ result }) => {
    return (
        <SingleItemBlock>
            <div className="thumbnail">
                <img src={result.image} alt="thumbnail" />
            </div>
            <div className="contents">
                <h2>{result.title}</h2>
                <p>{result.page}</p>
            </div>
        </SingleItemBlock>
    );
};

export default SingleItem;
