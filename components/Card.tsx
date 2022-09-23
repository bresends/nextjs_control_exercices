import { motion } from 'framer-motion';
import React from 'react';
import { QuestionProps } from '../types/QuestionProps';

interface CardProps extends QuestionProps {
    color: string;
    title: string;
    display: number;
}

const Card = (props: CardProps) => {
    const color = props.color === 'green' ? 'text-rightGreen' : 'text-wrongRed';
    return (
        <div className="text-lightGray text-center flex flex-col select-none items-center font-bold border-b-[1px] border-lightGray/10 md:border-r-[1px] md:text-2xl">
            <p className="pt-4 md:text-4xl md:pt-8">{props.title}</p>
            <motion.div
                key={props.display}
                initial={{ opacity: 0, y: 50 }}
                animate={{ y: 0, opacity: 1 }}
                className="py-3 text-5xl h-full flex flex-col justify-center items-center md:py-[5vh]"
            >
                <p className={`${color} font-bold md:text-8xl xl:text-[10vh]`}>
                    {props.display}
                </p>
            </motion.div>
        </div>
    );
};

export default Card;
