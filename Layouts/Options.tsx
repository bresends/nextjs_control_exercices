import React, { Dispatch } from 'react';
import Reset from '../components/Reset';
import Settings from '../components/Settings';

import { QuestionProps } from '../types/QuestionProps';

export interface CardHolderProps extends QuestionProps {
    setTotals: Dispatch<React.SetStateAction<number>>;
    setWrongs: Dispatch<React.SetStateAction<number>>;
}

const Options = (props: CardHolderProps) => {
    return (
        <div className="flex justify-center mt-10 ">
            <Reset setTotals={props.setTotals} setWrongs={props.setWrongs} />
            <Settings setTotals={props.setTotals} setWrongs={props.setWrongs} />
        </div>
    );
};

export default Options;
