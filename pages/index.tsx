import { motion } from 'framer-motion';
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
        const layout = localStorage.getItem('toggle');
        if (storageTotal) {
            setTotal(Number(storageTotal));
        }
        if (storageWrong) {
            setWrong(Number(storageWrong));
        }
        if (layout) {
            setToggle(JSON.parse(layout));
        }
    }, []);

    return (
        <div className="container mx-auto">
            <Header />
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ y: 0, opacity: 1 }}
            >
                <HeadComponent total={total} wrong={wrong} />
                <CardHolder
                    total={total}
                    wrong={wrong}
                    setTotals={setTotal}
                    setWrongs={setWrong}
                    toggle={toggle}
                />

                <Options
                    setTotals={setTotal}
                    setWrongs={setWrong}
                    total={total}
                    wrong={wrong}
                    toggle={toggle}
                    setToggle={setToggle}
                />
            </motion.div>
        </div>
    );
};

export default Home;
