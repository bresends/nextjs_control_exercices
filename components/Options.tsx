import React, { Dispatch } from 'react';
import Reset from './Reset';
import Settings from './Settings';
import { QuestionProps } from '../types/QuestionProps';

export interface OptionsProps extends QuestionProps {
    setTotals: Dispatch<React.SetStateAction<number>>;
    setWrongs: Dispatch<React.SetStateAction<number>>;
    setToggle: Dispatch<React.SetStateAction<boolean>>;
    toggle?: boolean;
}

const Options = (props: OptionsProps) => {
    return (
        <div className="flex justify-center mt-10">
            <Reset
                setTotals={props.setTotals}
                setWrongs={props.setWrongs}
                total={props.total}
                wrong={props.wrong}
            />
            <Settings
                setTotals={props.setTotals}
                setWrongs={props.setWrongs}
                total={props.total}
                wrong={props.wrong}
                toggle={props.toggle}
                setToggle={props.setToggle}
            />
        </div>
    );
};

export default Options;
