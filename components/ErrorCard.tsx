import React from 'react';
import { QuestionProps } from '../types/QuestionProps';

const ErrorCard = (props: QuestionProps) => {
    return (
        <div className="text-lightGray flex flex-col items-center font-bold border-b-[1px] border-lightGray/20 md:border-r-[1px] md:border-b-0">
            <p className="py-6">Questões</p>
            <p className="text-wrongRed text-5xl font-bold pb-6">
                {props.wrong}
            </p>
        </div>
    );
};

export default ErrorCard;
