import React, { Dispatch } from 'react';
import { QuestionProps } from '../types/QuestionProps';
import ErrorCard from './ErrorCard';
import QuestionCard from './QuestionCard';
import RightButton from './RightButton';
import RightCard from './RightCard';
import WrongButton from './WrongButton';
import { motion } from 'framer-motion';

export interface CardHolderProps extends QuestionProps {
    setTotals: Dispatch<React.SetStateAction<number>>;
    setWrongs: Dispatch<React.SetStateAction<number>>;
    toggle?: boolean;
}

const CardHolder = (props: CardHolderProps) => {
    return (
        <div className="bg-darkIndigo shadow-card mt-10 mx-6 flex flex-col md:grid md:grid-cols-2">
            <QuestionCard total={props.total} wrong={props.wrong} />

            {props.toggle ? (
                <ErrorCard wrong={props.wrong} total={props.total} />
            ) : (
                <RightCard total={props.total} wrong={props.wrong} />
            )}

            <RightButton
                total={props.total}
                setTotals={props.setTotals}
                setWrongs={props.setWrongs}
                wrong={props.wrong}
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
