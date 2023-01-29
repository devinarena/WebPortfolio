
/**
* @file animated.js
* @author Devin Arena
* @since 12/6/2021
* @description Animates some of the components to create a cool effect.
*/

import { chakra, shouldForwardProp } from "@chakra-ui/system";
import { motion } from "framer-motion";

const AnimatedDiv = chakra(motion.div, {
    shouldForwardProp: prop => {
        return shouldForwardProp(prop) || prop === 'transition';
    }
});

const SlideIn = ({ children, delay, time, direction }) => {
    let ix = 0, fx = 0;
    if (direction === 'left')
        ix = 10;
    else if (direction == 'right')
        ix = -10;

    return (
        <AnimatedDiv initial={{ x: ix, opacity: 0 }} animate={{ x: fx, opacity: 1 }}
            transition={{ duration: time, delay }} animation={{ delay: delay }} >
            {children}
        </AnimatedDiv>
    );
};

const SlideInManual = ({ children, direction, percentage }) => {
    let ix = 0, fx = 0;
    if (direction === 'left')
        ix = 50;
    else if (direction == 'right')
        ix = -50;

    let x = (ix - fx) * percentage;

    console.log(percentage);

    return (
        <AnimatedDiv transform={"translateX(" + x + "px)"} opacity={1.0 - percentage} className="slideInManual" >
            {children}
        </AnimatedDiv>
    );
};

const Grow = ({ children, delay, time }) => {

    return (
        <AnimatedDiv initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1.0, opacity: 1 }}
            transition={{ duration: time, delay }}>
            {children}
        </AnimatedDiv>
    );
};

export { SlideIn, SlideInManual, Grow };