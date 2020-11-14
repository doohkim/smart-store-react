import React from 'react';
import styled from 'styled-components';
const HederBlock = styled.div`
    display: flex;
    width: 1920px;
    height: 83px;
    box-shadow: 0 2px 12px 4px rgba(0, 0, 0, 0.04);
    justify-content: center;

    .nav-item {
        /* background-color: green; */
        width: 1080px;
        height: 83px;
        display: flex;
        align-items: center;
    }
    .logo-item {
        width: 52px;
        height: 41px;
        /* padding-left: 20px;
        padding-right: 20px;
        padding-top: 8px;
        padding-bottom: 8px; */
        font-family: NotoSansCJKkr;
        font-size: 28px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #05c3a7;
    }
    .flex-item-gnb {
        display: flex;
        margin-left: auto;
    }
    .login-link {
        margin-right: 32px;
        width: 50px;
        height: 27px;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 8px;
        padding-bottom: 8px;

        font-family: NotoSansCJKkr;
        font-size: 18px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: right;
        color: #05c3a7;

        &:hover {
            color: #ffffff;
            background-color: #05c3a7;
            border-radius: 8px;
        }
    }
    .singup-link {
        width: 67px;
        height: 27px;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 8px;
        padding-bottom: 8px;
        font-family: NotoSansCJKkr;
        font-size: 18px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: right;
        color: #05c3a7;
        &:hover {
            color: #ffffff;
            background-color: #05c3a7;
            border-radius: 8px;
        }
    }
`;
const SampleHeader = () => {
    return (
        <HederBlock>
            <div className="nav-item">
                <div className="logo-item">로고</div>
                <div className="flex-item-gnb">
                    <div className="login-link">로그인</div>
                    <div className="singup-link">회원가입</div>
                </div>
            </div>
        </HederBlock>
    );
};

export default SampleHeader;
