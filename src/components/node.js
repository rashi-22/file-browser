import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Folder } from '@mui/icons-material';

const Node = (props) => {
    const { item, level, url, key } = props;
    const navigate = useNavigate();

    const redirectToContent = () => {
        const newUrl = url.concat('/', item.key)
        navigate(newUrl);
    }

    return (
        <div
            style={{ paddingLeft: `${level * 30}px`, display: 'flex', alignItems: 'center' }}
            onClick={redirectToContent}
            key={key}
        >
            <Folder style={{ marginRight: '4px' }} /> {item.folder}
        </div>
    )
}
export default Node;