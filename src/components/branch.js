import React from 'react';
import { AccordionDetails } from '@mui/material';
import { MuiAccordionSummary, MuiAccordion } from './tree';
import Node from './node';

const Branch = (props) => {
    const { item, level, url, expanded = [], onExpand = () => {} } = props;

    const hasChildren = item.children && item.children.length > 0;

    const renderChildren = () => {
        const child = item.children.map((i) => {
            return (
                <Branch
                    url={url.concat('/', item.key)}
                    key={i.key}
                    item={i}
                    level={level + 1}
                    expanded={expanded}
                    onExpand={onExpand}
                />
            )
        })
        return child;
    }

    return (
        <div>
            {
                hasChildren ? (
                    <MuiAccordion onChange={onExpand(item.key)} expanded={expanded.includes(item.key)}>
                        <MuiAccordionSummary>
                            <Node url={url} item={item} level={level} />
                        </MuiAccordionSummary>
                        <AccordionDetails sx={{ backgroundColor: '#f7f7f7' }}>
                        {
                            renderChildren()
                        }
                        </AccordionDetails>
                    </MuiAccordion>
                ) : (
                    <Node url={url} item={item} level={level} />
                )

            }
        </div>
    )
}
export default Branch;