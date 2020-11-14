/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback } from 'react';
import axios from 'axios';
import SingleResult from './SingleResult';

const Single = () => {
    const [data, setData] = useState(null);
    const [filedata, setFiledata] = useState(null);
    const [form, setForm] = useState({ keyword: '', company: '' });
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [fileLoading, setFileLoading] = useState(false);
    const [error, setError] = useState(null);

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

    const onFileSubmit = useCallback((e) => {
        e.preventDefault();
        onFileUpload(selectedFile).then((response) => {
            console.log(response);
        });
    });
    const onFileChange = useCallback((e) => {
        setSelectedFile(e.target.files[0]);
    });
    const onFileUpload = useCallback(async (selectedFile) => {
        try {
            const form = new FormData();
            form.append('file', selectedFile);
            console.log(form);
            const response = await axios.post(
                'http://localhost:8000/api/search/v1/upload/test/',
                form,
            );
            console.log(response);
            setFiledata(response.data);
            setFileLoading(true);
        } catch (e) {
            setError(e);
            console.log(error);
        }
    }, []);
    const onSubmit = useCallback(
        async (e) => {
            e.preventDefault();
            alert('5초 정도 걸립니다.');
            try {
                const response = await axios.post(
                    'http://localhost:8000/api/search/v1/single_drf/',
                    { keyword: form.keyword, company: form.company },
                );
                setData(response.data);
                setLoading(true);
            } catch (error) {
                setError(error);
                console.log(error);
            }
            setForm({
                keyword: '',
                company: '',
            });
        },
        [form],
    );

    return (
        <div>
            <h1>Single</h1>
            <form onSubmit={onFileSubmit}>
                <input type="file" name="file" onChange={onFileChange}></input>
                <button type="submit">upload</button>
            </form>

            <form onSubmit={onSubmit}>
                <div>
                    <input
                        type="text"
                        name="keyword"
                        placeholder="상품 이름 입력하세요"
                        value={form.keyword}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="company"
                        placeholder="회사 이름 입력하세요"
                        value={form.company}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <button type="submit">검색</button>
                </div>
            </form>
            {loading ? (
                data && <textarea value={JSON.stringify(data, null, 10)} />
            ) : (
                <div>데이터가 보여질 위치 입니다.</div>
            )}
            {data ? <SingleResult data={data} /> : null}
            {fileLoading
                ? filedata && (
                      <textarea value={JSON.stringify(filedata, null, 10)} />
                  )
                : null}
        </div>
    );
};
export default Single;
