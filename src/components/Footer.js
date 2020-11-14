import React from 'react';
import styled from 'styled-components';

export const FooterBlock = styled.div`
    display: absolute;
    width: 1920px;
    height: 315px;
    background-color: #111111;
    background-color: #000;
    text-align: center;
    color: rgba(255, 255, 255, 0.6);
    /* font-size: 1rem; */
    .contents {
        & h2 {
            margin: 0;
            height: 19px;
            color: #fff;
            width: auto;
            font-size: 22px;
            font-size: 22px;
            letter-spacing: 0.14px;
            font-weight: 400;
            color: #fff;
        }

        & p {
            font-size: 14px;
            letter-spacing: 0.14px;
            font-weight: 400;
            line-height: normal;
            margin: 0;
            letter-spacing: 0;
            line-height: 22px;
            color: rgba(255, 255, 255, 0.4);
        }
        & span {
            margin: 0 15px 0 0;
            font-size: 13px;
            letter-spacing: 0.14px;
            font-weight: 400;
            line-height: 2rem;
            color: #8f95a3;
            cursor: pointer;
        }
    }
    & + & {
        margin-top: 3rem;
    }
`;
export const FooterWrap = styled.div`
    max-width: 1024px;
    margin: 0 auto;
`;
const Footer = () => {
    return (
        <FooterBlock>
            <FooterWrap>
                <div className="contents">
                    <h2>Footer</h2>
                    <p>사업자 정보</p>
                </div>
            </FooterWrap>
        </FooterBlock>
    );
};
export default Footer;
