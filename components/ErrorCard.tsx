import React from 'react';
import { QuestionProps } from '../types/QuestionProps';

const ErrorCard = (props: QuestionProps) => {
    return (
        <div className="text-lightGray select-none flex flex-col items-center font-bold border-b-[1px] border-lightGray/10 md:border-r-[1px] md:text-2xl">
            <p className="py-6 md:py-8">Erros</p>
            <p className="text-wrongRed text-5xl font-bold pb-6 md:text-[160px] md:pb-12">
                {props.wrong}
            </p>
        </div>
    );
};

export default ErrorCard;
