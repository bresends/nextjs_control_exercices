import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import CardHolder from '../components/CardHolder';
import HeadComponent from '../components/Head';
import Header from '../components/Header';
import Options from '../components/Options';

const Home: NextPage = () => {
    const [total, setTotal] = useState(0);
    const [wrong, setWrong] = useState(0);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        const storageTotal = localStorage.getItem('total');
        const storageWrong = localStorage.getItem('wrong');
        if (storageTotal) {
            setTotal(Number(storageTotal));
        }
        if (storageWrong) {
            setWrong(Number(storageWrong));
        }
    }, []);

    return (
        <div className="container mx-auto">
            <Header />
            <HeadComponent total={total} wrong={wrong} />
            <CardHolder
                total={total}
                wrong={wrong}
                setTotals={setTotal}
                setWrongs={setWrong}
            />
            <Options setTotals={setTotal} setWrongs={setWrong} />
        </div>
    );
};

export default Home;
