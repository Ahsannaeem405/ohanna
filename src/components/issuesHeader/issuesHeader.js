import React from 'react'
import "./issueHeader.css";
import { Button } from 'antd';
import { GoBack, DownWhite } from '../constants/Icons';
const IssuesHeader = () => {
    return (
        <>
            <section className='issueHeader'>
                <section className='go-back'>
                <Button >{GoBack}Back</Button>
                </section>
                <section className='Time-set'>
                <Button>10:29:07 { DownWhite }</Button>
                <Button>Jan, 01, 2021 { DownWhite }</Button>
                </section>
            </section>
        </>
    )
}

export default IssuesHeader;
