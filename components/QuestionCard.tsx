import React from 'react';
import { QuestionProps } from '../types/QuestionProps';

const QuestionCard = (props: QuestionProps) => {
    return (
        <div className="text-lightGray flex flex-col select-none items-center font-bold border-b-[1px] border-lightGray/10 md:border-r-[1px] md:text-2xl">
            <p className="py-6 md:py-8">Questões</p>
            <p className="text-rightGreen text-5xl font-bold pb-6 md:text-[160px] md:pb-12 xl:pb-20">
                {props.total}
            </p>
        </div>
    );
};

export default QuestionCard;
