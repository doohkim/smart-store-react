import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HederBlock = styled.div`
    display: flex;
    flex-direction: row;
    width: 1920px;
    height: 83px;
    box-shadow: 0 2px 12px 4px rgba(0, 0, 0, 0.04);
    .flex-item {
        flex: none;
    }
    .flex-item-gnb {
        margin-right: auto;
        color: #5af5d5;
        border-radius: 4px;
        box-sizing: border-box;
        padding: 0.5rem;
        align-content: center;
        background: none;
    }
`;

const Button = styled.div`
    color: black;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 0.5rem;
    align-content: center;
    margin-right: 1rem;
    background: none;
    @media screen and (max-width: 768px) {
        overflow-x: auto;
        /* width: 50%; */
    }

    .link {
        display: flex;
        color: #5af5d5;
        background: none;
        font-size: 20px;
        &:hover {
            color: white;
            background: rgba(90, 245, 213, 1);
            border-radius: 4px;
        }
    }
`;
const Header = () => {
    return (
        <HederBlock>
            <div className="flex-item-gnb">로고</div>
            <Button>
                <Link className="link" to="/">
                    HOME
                </Link>
            </Button>

            <Button>
                <Link className="link" to="/multi">
                    Multi-KeyWord
                </Link>
            </Button>
        </HederBlock>
    );
};
export default Header;
