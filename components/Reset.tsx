import { IconContext } from 'react-icons';
import { BsArrowRepeat } from 'react-icons/bs';
import { CardHolderProps } from './CardHolder';

const Reset = (props: CardHolderProps) => {
    const resetAnswer = () => {
        props.setTotals(0);
        props.setWrongs(0);
    };

    return (
        <div
            className="group bg-red-500 flex flex-col items-center w-1/3 p-6 shadow-card hover:bg-red-400 active:bg-red-500 transition ease-out duration-250"
            onClick={resetAnswer}
        >
            <IconContext.Provider
                value={{
                    className:
                        'text-white text-4xl md:text-6xl cursor-pointer transform group-hover:scale-110 transition ease-out duration-250',
                }}
            >
                <BsArrowRepeat />
            </IconContext.Provider>
            <p className="text-white font-bold text-xl pt-2 select-none">
                Reset
            </p>
        </div>
    );
};

export default Reset;
