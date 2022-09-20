import React from 'react';
import Image from 'next/image';

const Header = () => {
    return (
        <header className="flex justify-center items-center py-6 space-x-5 md:justify-start md:py-8 md:px-6">
            <Image src="/Vector.svg" alt="My Logo" width={48} height={48} />
            <h1 className="text-2xl text-white font-bold md:text-5xl">
                Controle de Questões
            </h1>
        </header>
    );
};

export default Header;
