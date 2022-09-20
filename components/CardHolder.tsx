import React from 'react';
import { QuestionProps } from '../types/QuestionProps';
import Question from './Question';

const CardHolder = (props: QuestionProps) => {
    return (
        <div className="bg-darkIndigo py-8 shadow-card">
            <Question total={props.total} />
        </div>
    );
};

export default CardHolder;
