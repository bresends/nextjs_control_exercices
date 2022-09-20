import React from 'react';
import { QuestionProps } from '../types/QuestionProps';
import { IconContext } from 'react-icons';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Wrong = (props: QuestionProps) => {
    return (
        <div className="flex justify-center py-8 ">
            <IconContext.Provider
                value={{
                    className: 'text-wrongRed text-5xl',
                }}
            >
                <AiOutlineCloseCircle />
            </IconContext.Provider>
        </div>
    );
};

export default Wrong;
