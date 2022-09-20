import { IconContext } from 'react-icons';
import { BsGear } from 'react-icons/bs';
import { OptionsProps } from './Options';

const Settings = (props: OptionsProps) => {
    return (
        <div
            className="group bg-rightGreen flex flex-col items-center w-1/3 p-6 shadow-card hover:bg-green-400 active:bg-green-500 transition ease-out duration-250"
            onClick={() => props.setToggle(!props.toggle)}
        >
            <IconContext.Provider
                value={{
                    className:
                        'text-white text-4xl md:text-6xl cursor-pointer transform group-hover:scale-110 transition ease-out duration-250',
                }}
            >
                <BsGear />
            </IconContext.Provider>
            <p className="text-white font-bold text-xl pt-2 select-none">
                Layout
            </p>
        </div>
    );
};

export default Settings;
