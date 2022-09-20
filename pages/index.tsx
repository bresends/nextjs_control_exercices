import type { NextPage } from 'next';
import { useState } from 'react';
import CardHolder from '../components/CardHolder';
import HeadComponent from '../components/Head';
import Header from '../components/Header';

const Home: NextPage = () => {
    const [total, setTotal] = useState(0);
    const [wrong, setWrong] = useState(0);
    const [toggle, setToggle] = useState(false);

    return (
        <div className="container mx-auto">
            <HeadComponent total={total} wrong={wrong} />
            <Header />
            <CardHolder total={total} wrong={wrong} />
        </div>
    );
};

export default Home;
