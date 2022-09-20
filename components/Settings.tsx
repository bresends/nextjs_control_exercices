import { IconContext } from 'react-icons';
import { BsGearWide } from 'react-icons/bs';
import { CardHolderProps } from '../Layouts/CardHolder';

const Settings = (props: CardHolderProps) => {
    const changeToggle = () => {
        console.log('Working');
    };

    return (
        <div
            className="group bg-rightGreen flex flex-col items-center w-1/3 p-6 shadow-card hover:bg-red-400 transition ease-out duration-250"
            onClick={changeToggle}
        >
            <IconContext.Provider
                value={{
                    className: 'text-white text-4xl md:text-6xl cursor-pointer',
                }}
            >
                <BsGearWide />
            </IconContext.Provider>
            <p className="text-white font-bold text-xl pt-2">Configurar</p>
        </div>
    );
};

export default Settings;