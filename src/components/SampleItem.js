/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';

const SampleItemBlock = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #ffffff;

    .data-content-keyword {
        width: 149.5px;
        height: 80px;
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
        color: #111111;
        vertical-align: middle;
        overflow: hidden;
        border-right: solid 1px #eeeeee;
        border-top: solid 1px #eeeeee;
        .content-inner-keyword {
            width: 88px;
            height: 24px;
            text-align: center;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
    .data-content-rank {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 127px;
        height: 80px;
        font-family: NotoSansCJKkr;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        /* text-align: center; */
        color: #111111;
        border-right: solid 1px #eeeeee;
        border-top: solid 1px #eeeeee;
        .content-inner-rank {
            width: 88px;
            height: 24px;
            text-align: center;
        }
    }
    .data-content-PC {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 108px;
        height: 80px;
        font-family: NotoSansCJKkr;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #111111;
        border-right: solid 1px #eeeeee;
        border-top: solid 1px #eeeeee;
        .content-inner-PC {
            width: 69px;
            height: 24px;
            text-align: center;
        }
    }
    .data-content-Mobile {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 131px;
        height: 80px;
        font-family: NotoSansCJKkr;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #111111;
        border-right: solid 1px #eeeeee;
        border-top: solid 1px #eeeeee;
        .content-inner-Mobile {
            width: 92px;
            height: 24px;
            text-align: center;
        }
    }
    .data-content-total {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 94px;
        height: 80px;
        font-family: NotoSansCJKkr;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #111111;
        text-align: center;
        border-right: solid 1px #eeeeee;
        border-top: solid 1px #eeeeee;
    }
    .data-content-productName {
        display: flex;
        align-items: center;
        justify-content: center;
        /* vertical-align: middle; */
        width: 247px;
        height: 80px;
        font-family: NotoSansCJKkr;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #111111;
        border-right: solid 1px #eeeeee;
        border-top: solid 1px #eeeeee;

        .content-inner-productName {
            width: 220px;
            height: 60px;
            /* text-align: right; */
            /* white-space: nowrap; */
            /* overflow: hidden; */
            text-overflow: ellipsis;
        }
    }
    .data-content-storeName {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 114px;
        height: 80px;
        font-family: NotoSansCJKkr;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #111111;
        border-right: solid 1px #eeeeee;
        border-top: solid 1px #eeeeee;
        .content-inner-storeName {
            width: 75px;
            height: 24px;
            text-align: right;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
    .data-content-price {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 117px;
        height: 80px;
        font-family: NotoSansCJKkr;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #111111;
        border-right: solid 1px #eeeeee;
        border-top: solid 1px #eeeeee;
        .content-inner-price {
            width: 75px;
            height: 24px;
            text-align: right;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
    .data-content-thumbnail {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 98.5px;
        height: 80px;
        font-family: NotoSansCJKkr;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #111111;
        border-top: solid 1px #eeeeee;
        img {
            width: 60px;
            height: 60px;
            object-fit: contain;
            border-radius: 8px;
        }
    }
`;

const SampleItem = ({ result }) => {
    return (
        <SampleItemBlock>
            <div className="data-content-keyword">
                <div className="content-inner-keyword">{result.keword}</div>
            </div>
            <div className="data-content-rank">
                <div className="content-inner-rank">
                    {result.page + ' / ' + result.each_page_rank}
                </div>
            </div>

            <div className="data-content-PC">
                <div className="content-inner-PC">{result.PC_search}</div>
            </div>

            <div className="data-content-Mobile">
                <div className="content-inner-Mobile">
                    {result.Mobile_search}
                </div>
            </div>
            <div className="data-content-total">
                <div className="content-inner-total">{result.total}</div>
            </div>

            <div className="data-content-productName">
                <div className="content-inner-productName">{result.title}</div>
            </div>
            {/* <div className="data-content-storeName">
                <div className="content-inner-storeName">{result.mallName}</div>
            </div> */}
            <div className="data-content-price">
                <div className="content-inner-price">{result.lowPrice}</div>
            </div>

            <div className="data-content-thumbnail">
                <img src={result.image} />
            </div>
        </SampleItemBlock>
    );
};

export default SampleItem;
