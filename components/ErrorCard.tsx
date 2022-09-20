import { motion } from 'framer-motion';
import React from 'react';
import { QuestionProps } from '../types/QuestionProps';

const ErrorCard = (props: QuestionProps) => {
    return (
        <div className="text-lightGray select-none flex flex-col items-center font-bold border-b-[1px] border-lightGray/10 md:border-r-[1px] md:text-2xl">
            <p className="py-6 md:py-8">Erros</p>
            <motion.div
                key={props.wrong}
                initial={{ opacity: 0, y: 50 }}
                animate={{ y: 0, opacity: 1 }}
            >
                <p className="text-wrongRed text-5xl font-bold pb-6 md:text-[160px] md:pb-12">
                    {props.wrong}
                </p>
            </motion.div>
        </div>
    );
};

export default ErrorCard;
