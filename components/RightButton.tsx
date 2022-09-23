import { IconContext } from 'react-icons';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { CardHolderProps } from './CardHolder';

const RightButton = (props: CardHolderProps) => {
    const countRightAnswer = () => {
        // String to number
        const total = Number(props.total);
        props.setTotals(total + 1);
        localStorage.setItem('total', String(total + 1));
    };

    return (
        <div
            onClick={countRightAnswer}
            className="group flex flex-col justify-center border-lightGray/10 border-b-[1px] md:border-r-[1px] md:border-b-0 hover:bg-lightIndigo transition ease-out duration-250"
        >
            <IconContext.Provider
                value={{
                    className:
                        'text-rightGreen w-full text-4xl my-5 transform group-hover:scale-110 group-active:scale-90 transition ease-out duration-250 xl:text-7xl md:text-6xl md:my-8',
                }}
            >
                <AiOutlineCheckCircle />
            </IconContext.Provider>
        </div>
    );
};

export default RightButton;
