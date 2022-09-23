import React from 'react';
import Image from 'next/image';

const Header = () => {
    return (
        <header className="flex justify-center select-none items-center mt-6 space-x-5 md:justify-start 2xl:p-8 lg:px-6">
            <Image src="/Vector.svg" alt="My Logo" width={48} height={48} />
            <h1 className="text-2xl text-white font-bold md:text-4xl">
                Controle de Questões
            </h1>
        </header>
    );
};

export default Header;
