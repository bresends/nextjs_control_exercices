import { IconContext } from 'react-icons';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { CardHolderProps } from './CardHolder';

const Wrong = (props: CardHolderProps) => {
    const countWrongAnswer = () => {
        // String to number
        const total = Number(props.total);
        const wrong = Number(props.wrong);
        props.setTotals(total + 1);
        props.setWrongs(wrong + 1);
        localStorage.setItem('total', String(total + 1));
        localStorage.setItem('wrong', String(wrong + 1));
    };

    return (
        <div
            className="group flex justify-center hover:bg-lightIndigo transition ease-out duration-250"
            onClick={countWrongAnswer}
        >
            <IconContext.Provider
                value={{
                    className:
                        'text-wrongRed text-6xl w-full my-8 transform group-hover:scale-110 group-active:scale-90 transition ease-out duration-250',
                }}
            >
                <AiOutlineCloseCircle />
            </IconContext.Provider>
        </div>
    );
};

export default Wrong;
