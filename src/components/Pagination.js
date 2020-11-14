/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './SampleInputcss.css';
import styled from 'styled-components';
import leftArrow from '../img/left-arrow.svg';
import rightArrow from '../img/right-arrow.svg';
const PaginationBlock = styled.div`
    display: flex;
    flex-direction: row;
    width: 360px;
    height: 41px;
    /* display: inline-block; */
    /* position: sticky; */
    top: 0;

    /* div {
        color: black;
        float: left;
        padding: 8px 16px;
        text-decoration: none;
    } */
    .arrow {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        border: solid 1px #f4f4f4;
        background-color: #ffffff;
        img {
            width: 6px;
            height: 10px;
            object-fit: contain;
        }
    }
    .outline-page {
        display: flex;
        width: 350px;
        height: 50px;
        border: solid 1px #eeeeee;
        background-color: #ffffff;
        vertical-align: middle;
        justify-items: center;

        .plain-page {
            display: flex;
            flex: 1;
            align-items: center;
            justify-content: center;
            width: 50px;
            height: 50px;
            border: solid 1px #eeeeee;
            background-color: #ffffff;

            div {
                width: 8px;
                height: 20px;
                font-family: NotoSansCJKkr;
                font-size: 14px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: normal;
                letter-spacing: normal;
                color: #555555;
            }
            /* :focus {
                color: #05c3a7;
            } */
        }
        .current-page {
            display: flex;
            flex: 1;
            align-items: center;
            justify-content: center;
            width: 50px;
            height: 50px;
            border: solid 1px #eeeeee;
            background-color: #ffffff;
            div {
                width: 9px;
                height: 20px;
                font-family: NotoSansCJKkr;
                font-size: 14px;
                font-weight: bold;
                font-stretch: normal;
                font-style: normal;
                line-height: normal;
                letter-spacing: normal;
                text-align: center;
                color: #05c3a7;
            }
        }
    }
`;

const Pagination = ({
    startPaginationNumber,
    totalPageNumber,
    paginate,
    currentPage,
    increasePaginate,
    decreasePaginate,
}) => {
    const pageNumber = [];
    for (let i = 1; i <= totalPageNumber; i++) {
        pageNumber.push(i);
    }
    console.log(currentPage);
    return (
        <PaginationBlock>
            <div
                className="arrow"
                key={currentPage - 1}
                onClick={() => decreasePaginate(currentPage - 1)}
            >
                <img src={leftArrow} />
            </div>
            <div className="outline-page">
                {pageNumber
                    .slice(startPaginationNumber - 1, startPaginationNumber + 4)
                    .map((pageNum) => (
                        <div
                            className={
                                pageNum === currentPage
                                    ? 'current-page'
                                    : 'plain-page'
                            }
                            key={pageNum}
                            onClick={() => paginate(pageNum)}
                        >
                            <div>{pageNum}</div>
                        </div>
                    ))}
            </div>
            <div
                className="arrow"
                key={currentPage + 1}
                onClick={() => increasePaginate(currentPage + 1)}
            >
                <img src={rightArrow} />
            </div>
        </PaginationBlock>
    );
};

export default Pagination;
