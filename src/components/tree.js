import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  useParams } from 'react-router-dom';
import { Accordion, AccordionDetails,AccordionSummary } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ArrowForwardIosSharp } from '@mui/icons-material';

import Branch from './branch';
import Node from './node';

import { getFileData } from '../actions/fileActions';
import '../css/tree.css';

export const MuiAccordion = styled((props) => (
    <Accordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));

export const MuiAccordionSummary = styled((props) => (
    <AccordionSummary
      expandIcon={<ArrowForwardIosSharp sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));

const Tree = () => {
    const [ filData, setFileData ] = useState([]);
    const params = useParams();
    let arr = [];
    if (params && params['*']) {
        arr = params['*'].split('/');
    }
    const [ exp, setExp ] = useState([...arr]);
    const dispatch = useDispatch();
    const { data } = useSelector(store => store.fileData);

    useEffect(() => {
        dispatch(getFileData());
    }, []);

    useEffect(() => {
        setFileData([...data]); 
    }, [data]);

    const handleChange = (key) => (event, isExpanded) => {
        if(isExpanded) {
            exp.push(key);
        } else {
            exp.splice(exp.indexOf(key), 1);
        }
        setExp([...exp]);
      };

    return (
        <div>
            {
                (filData || []).map((item) => {
                    if (!item.children) {
                        return (
                            <div className={'folder'} key={item.key}>
                                <Node
                                    item={item}
                                    level={0}
                                    url={''}
                                />
                            </div>
                        )
                    } else
                    return(
                        <MuiAccordion onChange={handleChange(item.key)} expanded={exp.includes(item.key)}>
                        <MuiAccordionSummary key={item.folder}>
                            <Node
                                item={item}
                                level={0}
                                url={''}
                            />
                        </MuiAccordionSummary>
                        <AccordionDetails sx={{ backgroundColor: '#f7f7f7' }}>
                            {
                                (item.children || []).map((b) => {
                                    return (
                                        <Branch
                                            url={'/'.concat(item.key)}
                                            key={b.key}
                                            level={1}
                                            item={b}
                                            expanded={exp}
                                            onExpand={handleChange}
                                        />
                                    )
                                })
                            }
                        </AccordionDetails>
                        </MuiAccordion>
                    )
                })
            }
        </div>
    )
}

export default Tree;