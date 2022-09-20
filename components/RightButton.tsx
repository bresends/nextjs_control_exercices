import React from 'react';
import { QuestionProps } from '../types/QuestionProps';
import { IconContext } from 'react-icons';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const RightButton = (props: QuestionProps) => {
    return (
        <div className="flex justify-center py-8 border-b-[1px] border-lightGray/10">
            <IconContext.Provider
                value={{
                    className: 'text-rightGreen text-5xl',
                }}
            >
                <AiOutlineCheckCircle />
            </IconContext.Provider>
        </div>
    );
};

export default RightButton;
