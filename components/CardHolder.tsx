import React from 'react';
import { QuestionProps } from '../types/QuestionProps';
import ErrorCard from './ErrorCard';
import QuestionCard from './QuestionCard';

const CardHolder = (props: QuestionProps) => {
    return (
        <div className="bg-darkIndigo shadow-card mt-10 mx-6">
            <QuestionCard total={props.total} wrong={props.wrong} />
            <ErrorCard total={props.total} wrong={props.wrong} />
        </div>
    );
};

export default CardHolder;
