/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import SampleInput from './SampleInput';
import axios from '../../node_modules/axios/index';
import SampleResult from './SampleResult';
import * as XLSX from 'xlsx';
import { CSVLink, CSVDownload } from 'react-csv';
const BodyBlock = styled.div`
    display: flex;
    width: 1920px;
    height: 995px;
    /* background-color: green; */
    justify-content: center;
    .body-content-bloack {
        display: flex;
        flex-direction: column;
        width: 1080px;
        height: 995px;
        /* background-color: gray; */
        align-items: flex-start;
        h1 {
            margin-top: 240px;
            width: 578px;
            height: 140px;
            font-family: NotoSansCJKkr;
            font-size: 48px;
            font-weight: 900;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.46;
            letter-spacing: normal;
            color: #ffffff;
        }
        p {
            width: 702px;
            height: 38px;
            font-family: NotoSansCJKkr;
            font-size: 26px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #ffffff;
        }
    }
`;

const Body = () => {
    const [data, setData] = useState(null);
    const [totalData, setTotalData] = useState(null);
    let data_list = [];
    const [form, setForm] = useState({ keyword: '', company: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [filedata, setFiledata] = useState(null);

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
            // 버튼없이 진행할 때는 if문 사용
            // if (e.key === 'Enter') {
            // setLoading(true);
            e.preventDefault();

            try {
                const keywordList = form.keyword.split(',');
                const postItem = (keyword, index) => {
                    return axios.post(
                        `http://18.188.83.127:80/api/search/v1/test${index}/`,
                        // `http://localhost:80/api/search/v1/test${index}/`,
                        {
                            keyword: keyword,
                            company: form.company,
                        },
                    );
                };
                const multiAPIRequest = keywordList.map((keyword, index) =>
                    postItem(keyword, index),
                );
                Promise.all(multiAPIRequest).then((responses) => {
                    console.log('responses', responses);
                    setData(responses);
                    // setLoading(true);
                });

                alert('5초 정도 걸립니다.');
            } catch (keywordError) {
                setError(keywordError);
                console.log(keywordError);
            }
            setForm({
                keyword: '',
                company: '',
            });
            setLoading(false);
            // }
        },
        [error, form.company, form.keyword, loading],
    );
    const onFileChange = useCallback(async (e) => {
        e.preventDefault();
        if (e.target.files[0]) {
            console.log('find');
            readExcel(e.target.files[0]);
        } else {
            console.log('not find');
            console.log(e.target.files[0]);
        }
    });
    const readExcel = useCallback((file) => {
        const promise = new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsArrayBuffer(file);
            fileReader.onload = (e) => {
                const bufferArray = e.target.result;
                const wb = XLSX.read(bufferArray, { type: 'buffer' });
                const wsname = wb.SheetNames[0];
                const ws = wb.Sheets[wsname];
                const data = XLSX.utils.sheet_to_json(ws);
                resolve(data);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
        promise.then((d) => {
            console.log(d);
            const postItem = async (keyword, index) => {
                return await axios.post(
                    `http://18.188.83.127:80/api/search/v1/test${index}/`,
                    {
                        keyword: keyword,
                        company: form.company,
                    },
                );
            };

            d.forEach((element, index) => {
                console.log(element.keyword, index);
                postItem(element.keyword, index).then((response) => {
                    response.data.complete_result_data.map((result, index) => {
                        data_list.push(result);
                    });
                    setFiledata(data_list);
                });
            });
        });
    }, []);

    return (
        <BodyBlock>
            <div className="body-content-bloack">
                <h1>
                    내 상품 순위,
                    <br /> 아직도 하나하나 검색하세요?
                </h1>
                <p>
                    키워드를 입력하거나, 엑셀파일을 업로드해서 한 번에
                    확인하세요.
                </p>
                <SampleInput
                    form={form}
                    onChange={onChange}
                    onClick={onClick}
                    loading={loading}
                    onFileChange={onFileChange}
                />
                <div>
                    {filedata ? (
                        <CSVLink data={filedata}>Download</CSVLink>
                    ) : (
                        <div>{null}</div>
                    )}
                </div>
                <div>
                    {data ? <SampleResult data={data} /> : <div>{null}</div>}
                </div>
            </div>
        </BodyBlock>
    );
};

export default Body;
