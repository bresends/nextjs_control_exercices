import { IconContext } from 'react-icons';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { CardHolderProps } from '../Layouts/CardHolder';

const Wrong = (props: CardHolderProps) => {
    const countWrongAnswer = () => {
        // String to number
        const total = Number(props.total);
        const wrong = Number(props.wrong);
        props.setTotals(total + 1);
        props.setWrongs(wrong + 1);
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
