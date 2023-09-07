import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { TextField } from '@mui/material';
import { Folder } from '@mui/icons-material';

import Preview from './Preview';
import '../css/content.css';

const Content = () => {
    const [fileList, setFileList] = useState([]);
    const [searchText, setSearchText] = useState('');
    const params = useParams();
    let arr = [];
    if (params && params['*']) {
        arr = params['*'].split('/');
    }

    const { data } = useSelector(store => store.fileData);

    useEffect(() => {
        setFileList([...data]);
    }, [data]);

    const getNode = (data, idx) => {
        if (data && data.length > 0 && idx < arr.length) {
            let node = data.find((d) => d.key === arr[idx]);
            if (idx === arr.length - 1) {
                return node;
            } else {
                if (node && node.children) {
                    return getNode(node.children, idx + 1);
                } else {
                    return null;
                }
            }
        } else {
            return null;
        }
    }

    const searchNode = (data, text) => {
        var leaf;
        data.some(function iterate(d) {
            if (d.folder.includes(text)) {
                leaf = d;
                return true;
            }
            return Array.isArray(d.children) && d.children.some(iterate);
        });
        return leaf;
    }

    const handleSearch = (e) => {
        setSearchText(e.target.value);
    }

    const node = searchText !== '' ? searchNode(fileList, searchText) : getNode(fileList, 0);

    return (
        <div>
            <div className={'outlet-container'}>
                <div className={'content-container'}>
                    <div className={'breadcrumb'}>{arr.join('/ ')}</div>
                    <div className={'search-container'}>
                        <TextField
                            style={{width: '75%'}}
                            placeholder={'Search'}
                            onChange={handleSearch}
                            value={searchText}
                        />
                    </div>
                    {
                        (node && node.children && node.children.length > 0) ? (
                            <div>
                                {
                                    node.children.map((c) => {
                                        return <div key={c.key} className={'content-node'}><Folder />{c.folder}</div>
                                    })
                                }
                            </div>
                        ) : (
                            <div className={'content-node'}>
                                <Folder /><span>{node?.folder}</span>
                            </div>
                        )
                    }
                </div>
                <div className={'preview-container'}>
                    <Preview node={node} />
                </div>
            </div>
        </div>
    )
}
export default Content;