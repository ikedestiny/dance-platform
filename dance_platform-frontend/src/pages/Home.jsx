import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Pincard from '../components/Pincard';
import WaveBalls from '../components/WaveBalls';

import demoVideo1 from '../pins/demoVideo1.mp4';
import demoVideo2 from '../pins/demoVideo2.mp4';
import demoVideo3 from '../pins/demoVideo3.mp4';
import DemoVideo4 from '../pins/demoVideo4.mp4';
import DemoVideo5 from '../pins/DemoVideo5.mp4';
import DemoVideo6 from '../pins/DemoVideo6.mp4';
import demoImage1 from '../pins/demoImage1.jpg';
import demoImage2 from '../pins/demoImage2.jpg';
import demoImage3 from '../pins/demoImage3.jpeg';
import demoImage4 from '../pins/demoImage4.jpeg';
import demoImage5 from '../pins/demoImage5.jpeg';


function Home() {
    const [pins, setPins] = useState([]);

    useEffect(() => {
        const demoPins = [
            { _id: '1', type: 'video', src: demoVideo2 },
            { _id: '2', type: 'image', src: demoImage1 },
            { _id: '3', type: 'video', src: demoVideo1 },
            { _id: '4', type: 'image', src: demoImage2 },
            { _id: '5', type: 'video', src: demoVideo3 },
            { _id: '6', type: 'video', src: DemoVideo4 },
            { _id: '7', type: 'image', src: demoImage3 },
            { _id: '8', type: 'video', src: DemoVideo5 },
            { _id: '9', type: 'video', src: DemoVideo6 },
            { _id: '10', type: 'image', src: demoImage4 },
            { _id: '11', type: 'image', src: demoImage5 },
        ];
        setPins(demoPins);
    }, []);

    return (
        <div className="relative min-h-screen px-6 py-10 text-neutral-100">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl sm:text-5xl font-extrabold text-center text-orange-500 mb-12 drop-shadow-md"
            >
                Discover Artistic Expressions
            </motion.h1>

            <motion.div
                className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.15,
                        },
                    },
                }}
            >
                {pins.map((pin) => (
                    <motion.div
                        key={pin._id}
                        variants={{
                            hidden: { opacity: 0, scale: 0.95 },
                            visible: { opacity: 1, scale: 1 },
                        }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                    >
                        <Pincard pin={pin} />
                    </motion.div>
                ))}
            </motion.div>

            <WaveBalls />
        </div>
    );
}

export default Home;
