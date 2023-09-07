import React from 'react';
import { FilePresent } from '@mui/icons-material';

const Preview = (props) => {
    const { node } = props;
    return (
        <div>
            <div>info</div>
            <div style={{ textAlign: 'center' }}><FilePresent style={{ textAlign: 'center', fontSize: '70px' }} /></div>
            <div>
                <h5>Properties</h5>
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>Name</span>
                        <span>
                            {
                                node &&
                                node.folder
                            }
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Preview;