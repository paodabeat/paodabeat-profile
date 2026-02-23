import React, { useState, useEffect } from 'react';

const Typewriter = ({ texts }: { texts: string[] }) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);

    useEffect(() => {
        if (subIndex === texts[index].length + 1 && !reverse) {
            const timeout = setTimeout(() => setReverse(true), 2000);
            return () => clearTimeout(timeout);
        }
        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % texts.length);
            return;
        }
        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 40 : 80, parseInt((Math.random() * 100).toString())));
        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, texts]);

    return (
        <span className="text-blue-400 font-mono tracking-tight">
            {`${texts[index].substring(0, subIndex)}|`}
        </span>
    );
};

export default Typewriter;