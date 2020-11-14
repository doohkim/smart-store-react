/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import excelImg from '../img/ic-excel.svg';
import searchImg from '../img/ic-search-able.svg';
import deleteImg from '../img/ic-delete.svg';

const SampleInputBlock = styled.div`
    width: 1080px;
    height: 76px;
    display: flex;
    flex-direction: row;
    /* position: sticky; */
    top: 0;
    .ic-delete {
        margin-right: 20px;
        width: 30px;
        height: 30px;
        img {
            width: 28px;
            height: 28px;
            object-fit: contain;
        }
    }
    .ic-search-div {
        width: 70px;
        button {
            background-color: white;
            border: none;
        }
    }
    .ic-search-able {
        width: 40px;
        height: 40px;
        object-fit: contain;
    }
    .ic-excel {
        width: 76px;
        height: 76px;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;

        .excel-img {
            background-color: #05c3a7;
            border: none;
            border-radius: 8px;
            width: 34px;
            height: 41px;
            object-fit: contain;
            padding-left: 21px;
            padding-right: 21px;
            padding-top: 18px;
            padding-bottom: 17px;
        }
        input {
            display: none;
        }
    }
    .div-keyword {
        width: 988px;
        height: 76px;
        border-radius: 8px;
        background-color: #ffffff;
        margin-left: 16px;
        display: flex;
        flex-direction: row;
        /* justify-content: center; */
        align-items: center;
    }
    .companyInput-div {
        width: 226px;
        height: 76px;
        border-radius: 8px;
        display: flex;
        background-color: #ffffff;
        justify-content: flex-start;
        align-items: center;
    }

    .companyInput {
        margin-left: 30px;
        border: none;
        width: 160px;
        height: 36px;
        font-family: NotoSansCJKkr;
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #111111;
        ::placeholder {
            color: black;
        }
        :focus {
            outline: none;
        }
    }
    .keywordInput-div {
        width: 760px;
        height: 76px;
        border-radius: 8px;
        display: flex;
        justify-content: flex-start;
        background-color: #ffffff;
        align-items: center;
    }
    .keywordInput {
        padding-left: 30px;
        border: none;
        border-left: 1px groove gray;
        width: 600px;
        height: 36px;
        font-family: NotoSansCJKkr;
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #111111;
        ::placeholder {
            color: black;
        }
        :focus {
            outline: none;
        }
    }

    & + & {
        margin-top: 3rem;
    }
`;

const SampleInput = ({ onClick, onChange, form, onFileChange }) => {
    const [placeholder, setPlaceholder] = useState(
        "ex. 후라이팬, 냄비, 조리기구, (',' 콤마필수)",
    );
    const onPlaceholderDelete = useCallback(() => {
        setPlaceholder('');
    }, []);
    return (
        <SampleInputBlock>
            <form>
                <div className="ic-excel">
                    <label htmlFor="file-input">
                        <img src={excelImg} className="excel-img" />
                    </label>
                    <input
                        id="file-input"
                        type="file"
                        name="file"
                        onChange={onFileChange}
                    />
                </div>
            </form>
            <form onSubmit={onClick}>
                <div className="div-keyword">
                    <div className="companyInput-div">
                        <input
                            type="text"
                            name="company"
                            className="companyInput"
                            placeholder="리빙몰"
                            value={form.company}
                            onChange={onChange}
                        />
                    </div>
                    <div className="keywordInput-div">
                        <input
                            type="text"
                            name="keyword"
                            className="keywordInput"
                            placeholder={placeholder}
                            value={form.keyword}
                            onChange={onChange}
                            /* form sumit 을 사용하면 자동으로 keypress 작동이 됨*/
                            // onKeyPress={onClick}
                            required
                        />
                    </div>
                    <div className="ic-delete" onClick={onPlaceholderDelete}>
                        <img
                            src={deleteImg}
                            className="ic_placeholder_delete"
                        />
                    </div>
                    <div className="ic-search-div">
                        <button type="submit">
                            <img src={searchImg} className="ic_search_able" />
                        </button>
                    </div>
                </div>
            </form>
        </SampleInputBlock>
    );
};

export default SampleInput;
