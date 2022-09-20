import { IconContext } from 'react-icons';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { CardHolderProps } from '../Layouts/CardHolder';

const RightButton = (props: CardHolderProps) => {
    const countRightAnswer = () => {
        // String to number
        const total = Number(props.total);
        props.setTotals(total + 1);
    };

    return (
        <div
            onClick={countRightAnswer}
            className="group flex justify-center py-8 border-lightGray/10 border-b-[1px] md:border-r-[1px] md:border-b-0 md:py-14 xl:py-20 hover:bg-lightIndigo transition ease-out duration-250"
        >
            <IconContext.Provider
                value={{
                    className:
                        'text-rightGreen text-5xl transform group-hover:scale-110 transition ease-out duration-250 md:text-7xl',
                }}
            >
                <AiOutlineCheckCircle />
            </IconContext.Provider>
        </div>
    );
};

export default RightButton;
