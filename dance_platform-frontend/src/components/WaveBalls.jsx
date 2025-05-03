import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function WaveBalls() {
    const ballCount = 10;
    const ballSize = 30; // size in pixels
    const waveAmplitude = 50;
    const waveSpeed = 2;
    const colorSpeed = 6;

    const colors = ['#f97316', '#1e293b', '#475569', '#0f172a']; // Orange + Slate shades


    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const colorAnimation = {
        backgroundColor: colors,
        transition: {
            repeat: Infinity,
            duration: colorSpeed,
            ease: 'linear',
            times: Array.from({ length: colors.length }, (_, i) => i / (colors.length - 1)),
        },
    };

    return (
        <div
            className="fixed inset-0 flex items-center justify-center  overflow-hidden"
            aria-hidden="true"
        >
            <div className="relative w-full max-w-6xl h-64">
                {[...Array(ballCount)].map((_, index) => {
                    const xPosition = (index / (ballCount - 1)) * screenWidth * 0.6;

                    const waveAnimation = {
                        y: [
                            0,
                            -waveAmplitude * Math.sin(index),
                            0,
                            waveAmplitude * Math.cos(index),
                            0,
                        ],
                        x: [
                            0,
                            10 * Math.sin(index * 0.5),
                            0,
                            -10 * Math.cos(index * 0.5),
                            0,
                        ],
                        scale: [
                            1,
                            1.15 + 0.05 * Math.sin(index),
                            1,
                            0.9 + 0.1 * Math.cos(index),
                            1,
                        ],
                        transition: {
                            repeat: Infinity,
                            duration: waveSpeed,
                            ease: 'easeInOut',
                            delay: index * 0.12,
                        },
                    };

                    return (
                        <motion.div
                            key={index}
                            className="absolute rounded-full shadow-lg"
                            style={{
                                width: `${ballSize}px`,
                                height: `${ballSize}px`,
                                left: `${xPosition}px`,
                                bottom: '0px',
                            }}
                            animate={{ ...waveAnimation, ...colorAnimation }}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default WaveBalls;
