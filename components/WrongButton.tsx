import React from 'react';
import { QuestionProps } from '../types/QuestionProps';
import { IconContext } from 'react-icons';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { CardHolderProps } from './CardHolder';

const Wrong = (props: CardHolderProps) => {
    const countWrongAnswer = () => {
        if (props.total === 0 || props.total) {
            props.setTotals(props.total + 1);
        }
    };

    return (
        <div
            className="group flex justify-center py-8 md:py-14 xl:py-20 hover:bg-lightIndigo transition ease-out duration-250"
            onClick={countWrongAnswer}
        >
            <IconContext.Provider
                value={{
                    className:
                        'text-wrongRed text-5xl transform group-hover:scale-110 transition ease-out duration-250 md:text-7xl',
                }}
            >
                <AiOutlineCloseCircle />
            </IconContext.Provider>
        </div>
    );
};

export default Wrong;
