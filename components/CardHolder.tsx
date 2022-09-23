import React, { Dispatch } from 'react';
import { QuestionProps } from '../types/QuestionProps';
import Card from './Card';
import RightButton from './RightButton';
import WrongButton from './WrongButton';

export interface CardHolderProps extends QuestionProps {
    setTotals: Dispatch<React.SetStateAction<number>>;
    setWrongs: Dispatch<React.SetStateAction<number>>;
    toggle?: boolean;
}

const CardHolder = (props: CardHolderProps) => {
    return (
        <div className="bg-darkIndigo shadow-card mt-10 mx-auto flex flex-col md:grid md:grid-cols-2 xl:w-2/3 lg:min-h-[40vh]">
            <Card
                color="green"
                display={props.total}
                title="Questões"
                total={props.total}
                wrong={props.wrong}
            />

            {props.toggle ? (
                <Card
                    color="red"
                    display={props.wrong}
                    title="Erros"
                    total={props.total}
                    wrong={props.wrong}
                />
            ) : (
                <Card
                    color="green"
                    display={props.total - props.wrong}
                    title="Acertos"
                    total={props.total}
                    wrong={props.wrong}
                />
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
