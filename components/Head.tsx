import React from 'react';
import Head from 'next/head';
import { QuestionProps } from '../types/QuestionProps';


const HeadComponent = (props: QuestionProps) => {
    const headTitle = `Controle de Exercícios (${props.total}/${
        props.total - props.wrong
    })`;
    return (
        <Head>
            <title>{headTitle}</title>
            <meta name="description" content="Created by bruno Resende" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
};

export default HeadComponent;
