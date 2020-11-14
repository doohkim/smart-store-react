/* eslint-disable no-const-assign */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Pagination from './Pagination';
// import SampleInput from './SampleInput';
// import SampleItem from './SampleItem';

import SmapleItem from './SampleItem';
const SampleResultBlock = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    border: solid 1px #cccccc;
    width: 1080px;
    height: 967px;
    float: left;
    border-radius: 4px;
    .div-header {
        position: sticky;
        display: flex;
        flex-direction: row;
        width: 1080px;
        height: 47px;
        background-color: #ffffff;
    }
    .div-contents {
        display: flex;
        flex-direction: column;
        width: 1080px;
        height: 810px;
        border-radius: 4px;
    }
    .data-header-keyword {
        font-family: NotoSansCJKkr;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        justify-content: center;
        color: #555555;
        width: 45px;
        height: 24px;
        padding: 12px 52.5px 11px 52px;
        border-right: solid 1px #eeeeee;
    }
    .data-header-rank {
        font-family: NotoSansCJKkr;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #555555;
        width: 88px;
        height: 24px;
        padding: 12px 20.5px 11px 18.5px;
        border-right: solid 1px #eeeeee;
    }

    .data-header-PC {
        font-family: NotoSansCJKkr;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #555555;
        width: 69px;
        height: 24px;
        padding: 12px 20.5px 11px 18.5px;
        border-right: solid 1px #eeeeee;
    }
    .data-header-Mobile {
        font-family: NotoSansCJKkr;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #555555;
        width: 92px;
        height: 24px;
        padding: 12px 20.5px 11px 18.5px;
        border-right: solid 1px #eeeeee;
    }
    .data-header-total {
        font-family: NotoSansCJKkr;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #555555;
        width: 48px;
        height: 24px;
        padding: 12px 23.5px 11px 22.5px;
        border-right: solid 1px #eeeeee;
    }
    .data-header-productName {
        font-family: NotoSansCJKkr;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #555555;
        width: 45px;
        height: 24px;
        padding: 12px 103px 11px 102px;
        border-right: solid 1px #eeeeee;
    }
    .data-header-storeName {
        font-family: NotoSansCJKkr;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #555555;
        width: 45px;
        height: 24px;
        padding: 12px 35.5px 11px 33.5px;
        border-right: solid 1px #eeeeee;
    }
    .data-header-price {
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: NotoSansCJKkr;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #555555;
        width: 117px;
        height: 24px;
        padding-top: 12px;
        border-right: solid 1px #eeeeee;
        div {
            width: 75px;
            height: 24px;
            text-align: right;
        }
    }
    .data-header-thumbnail {
        font-family: NotoSansCJKkr;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #555555;
        width: 45px;
        height: 24px;
        padding: 12px 27px 11px 26.5px;
    }

    .div-pagination {
        background-color: #f8f8f8;
        height: 120px;
        width: 1080px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const SampleResult = ({ data }) => {
    const data_list = [];
    data.forEach((element) => {
        element.data.complete_result_data.map((result, index) => {
            data_list.push(result);
        });
    });
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const [totalPosts, setTotalPosts] = useState(data_list.length);
    const [startPaginationNumber, setStartPaginationNumber] = useState(1);
    const [nextPaginationNumber, setNextPaginationNumber] = useState(6);
    const [prevPaginationNumber, setPrevPaginationNumber] = useState(0);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data_list.slice(indexOfFirstPost, indexOfLastPost);

    const totalPageNumber = Math.ceil(totalPosts / postsPerPage);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const decreasePaginate = (pageNumber) => {
        // console.log('nextPaginationNumber', nextPaginationNumber);
        // console.log('prevPaginationNumber', prevPaginationNumber);
        // console.log('pageNumber', pageNumber);
        // console.log('currentPage', currentPage);
        if (pageNumber < 1) {
            setCurrentPage(1);
            setStartPaginationNumber(1);
            // console.log('pagenumber < 1', currentPage);
        } else if (pageNumber % prevPaginationNumber === 0) {
            console.log('pageNumber % prevPaginationNumber === 0');
            if (prevPaginationNumber - 5 === 0) {
                setNextPaginationNumber(6);
                setPrevPaginationNumber(0);
                setStartPaginationNumber(1);
            } else {
                setNextPaginationNumber(pageNumber + 1);
                setPrevPaginationNumber(pageNumber - 5);
                setStartPaginationNumber(pageNumber - 4);
            }
            setCurrentPage(pageNumber);
        } else {
            // console.log('just decrase page');
            setCurrentPage(pageNumber);
        }
    };
    const increasePaginate = (pageNumber) => {
        // console.log('nextPaginationNumber', nextPaginationNumber);

        // console.log(prevPaginationNumber);
        if (pageNumber % nextPaginationNumber === 0) {
            console.log('pageNumber', pageNumber, 'next page step 6 + 5');
            if (pageNumber > totalPageNumber) {
                setCurrentPage(totalPageNumber);
            } else {
                setStartPaginationNumber(nextPaginationNumber);
                setNextPaginationNumber(nextPaginationNumber + 5);
                setPrevPaginationNumber(prevPaginationNumber + 5);
                setCurrentPage(pageNumber);
            }
            console.log('11배수', pageNumber, '===', nextPaginationNumber);
            console.log(prevPaginationNumber);
        } else if (pageNumber === totalPageNumber) {
            console.log('pageNumber', pageNumber);
            console.log('startPaginationNumber', startPaginationNumber);
            setCurrentPage(totalPageNumber);
        } else if (pageNumber > totalPageNumber) {
            console.log('pageNumber more', pageNumber);
            setStartPaginationNumber(totalPageNumber - 5);
            setCurrentPage(totalPageNumber);
        } else {
            console.log(pageNumber);
            setCurrentPage(pageNumber);
        }
    };

    if (currentPage < 1) {
        setCurrentPage(1);
    } else if (currentPage > totalPageNumber) {
        setCurrentPage(totalPageNumber);
    }
    return (
        <SampleResultBlock>
            <div className="div-header">
                <div className="data-header-keyword">키워드</div>
                <div className="data-header-rank">순위/페이지</div>
                <div className="data-header-PC">PC</div>
                <div className="data-header-Mobile">모바일</div>
                <div className="data-header-total">상품 수</div>
                <div className="data-header-productName">상품명</div>
                {/* <div className="data-header-storeName">스토어</div> */}
                <div className="data-header-price">
                    <div>가격(원)</div>
                </div>
                <div className="data-header-thumbnail">썸네일</div>
            </div>
            <div className="div-contents">
                {currentPosts.map((result, key) => (
                    <SmapleItem key={key} result={result} />
                ))}
            </div>
            <div className="div-pagination">
                <Pagination
                    startPaginationNumber={startPaginationNumber}
                    totalPageNumber={totalPageNumber}
                    paginate={paginate}
                    currentPage={currentPage}
                    increasePaginate={increasePaginate}
                    decreasePaginate={decreasePaginate}
                />
            </div>
        </SampleResultBlock>
    );
};
export default SampleResult;
