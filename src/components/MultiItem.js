/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import axios from '../../node_modules/axios/index';
import { FaRegFileExcel } from 'react-icons/fa';
const MultiItemBlock = styled.div`
    display: flex;
    // width 100%는 중앙정렬을 방해함
    /* width: 100%; */
    /* @media screen and (max-width: 768px) {
        overflow-x: auto;
    } */
    .image-upload {
        background-color: #5af5d5;
        border-radius: 6px;
        padding: 2px;
        margin-top: 1rem;
        margin-bottom: 1rem;

        input {
            display: none;
        }
    }
    .companyInput {
        margin-top: 18px;
        border: none;
        width: 100px;
        height: 28px;
        color: black;
        text-align: center;
        border-bottom-left-radius: 4px;
        border-top-left-radius: 4px;
        margin-left: 10px;
        font-size: 10px;
        text-align: center;
        ::placeholder {
            color: black;
        }
        /* @media screen and (max-width: 768px) {
            overflow-x: auto;
            width: 50%;
        } */
    }
    .keywordInput {
        margin-top: 18px;
        width: 300px;
        border: none;
        height: 28px;
        text-align: center;
        border-left: 1px groove gray;
        border-bottom-right-radius: 4px;
        border-top-right-radius: 4px;
        font-size: 10px;
        ::placeholder {
            color: black;
        }
        /* @media screen and (max-width: 768px) {
            overflow-x: auto;
            width: 100%;
        } */
    }

    & + & {
        margin-top: 3rem;
    }
`;

const MultiItem = () => {
    const [data, setData] = useState(null);
    const [form, setForm] = useState({ keyword: '', company: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [filedata, setFiledata] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileLoading, setFileLoading] = useState(false);

    const onChange = useCallback(
        (e) => {
            const { name, value } = e.target;
            setForm({
                ...form,
                [name]: value,
            });
        },
        [form],
    );
    const onClick = useCallback(
        async (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();

                try {
                    const response = await axios.post(
                        'http://localhost:8000/api/search/v1/single_drf/',
                        { keyword: form.keyword, company: form.company },
                    );
                    setData(response.data);
                    setLoading(true);
                    alert('5초 정도 걸립니다.');
                } catch (error) {
                    setError(error);
                    console.log(error);
                }
                setForm({
                    keyword: '',
                    company: '',
                });
            }
        },
        [form],
    );
    const onFileChange = useCallback((e) => {
        if (e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
            console.log('find');
            onFileUpload(e.target.files[0]).then((response) => {
                console.log(response);
            });
        } else {
            console.log('not find');
            console.log(e.target.files[0]);
        }
    });

    const onFileUpload = useCallback(async (selectedFile) => {
        alert('5초 정도 걸립니다.');

        try {
            const form = new FormData();
            console.log(selectedFile);
            form.append('file', selectedFile);
            console.log(form);
            const response = await axios.post(
                'http://localhost:8000/api/search/v1/upload/test/',
                form,
            );
            console.log(response);
            setFiledata(response.data);
            setFileLoading(true);
        } catch (error) {
            setError(error);
            console.log('error');
            console.log(error);
        }
    }, []);

    return (
        <MultiItemBlock>
            <form>
                <div class="image-upload">
                    <label for="file-input">
                        <FaRegFileExcel />
                    </label>
                    <input
                        id="file-input"
                        type="file"
                        name="file"
                        onChange={onFileChange}
                    />
                </div>
            </form>
            <input
                type="text"
                name="company"
                className="companyInput"
                placeholder="쇼핑몰 이름 입력"
                value={form.company}
                onChange={onChange}
            />
            <input
                type="text"
                name="keyword"
                className="keywordInput"
                placeholder="ex. 후라이팬, 냄비, 조리기구, (',' 콤마필수)"
                value={form.keyword}
                onChange={onChange}
                onKeyPress={onClick}
                required
            />
        </MultiItemBlock>
    );
};

export default MultiItem;
