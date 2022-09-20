import React, { Dispatch } from 'react';
import { QuestionProps } from '../types/QuestionProps';
import ErrorCard from '../components/ErrorCard';
import QuestionCard from '../components/QuestionCard';
import RightButton from '../components/RightButton';
import WrongButton from '../components/WrongButton';

export interface CardHolderProps extends QuestionProps {
    setTotals: Dispatch<React.SetStateAction<number>>;
    setWrongs: Dispatch<React.SetStateAction<number>>;
}

const CardHolder = (props: CardHolderProps) => {
    return (
        <div className="bg-darkIndigo shadow-card mt-10 mx-6 flex flex-col md:grid md:grid-cols-2">
            <QuestionCard total={props.total} />
            <ErrorCard total={props.total} wrong={props.wrong} />
            <RightButton
                total={props.total}
                setTotals={props.setTotals}
                setWrongs={props.setWrongs}
            />
            <WrongButton
                total={props.total}
                wrong={props.wrong}
                setTotals={props.setTotals}
                setWrongs={props.setWrongs}
            />
        </div>
    );
};

export default CardHolder;
