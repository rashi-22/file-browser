import React from 'react';
import { Outlet } from 'react-router-dom';
import Tree from './tree';

const FileBrowser = () => {
    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <div style={{ width: '20%', borderRight: '1px solid lightgray', padding: '0 1rem' }}>
                <Tree />
            </div>
            <div style={{ width: '80%', borderRight: '1px solid lightgray', padding: '1rem' }}>
                <Outlet />
            </div>
        </div>
    )
}
export default FileBrowser;