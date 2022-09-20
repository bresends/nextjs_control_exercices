import React from 'react';

type Props = {
    total: number;
};

const Question = (props: Props) => {
    return (
        <div>
            <p>Questões</p>
            <p>{props.total}</p>
        </div>
    );
};

export default Question;
