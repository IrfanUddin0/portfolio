import './Divider.css'

import React, { useEffect, useState,  useRef } from 'react';

export default function Divider() {
    // eslint-disable-next-line
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const dref = useRef();

    return (
        <div className='cont' ref={dref}>
            <div className='divider' style={{ backgroundPositionX: dref.current? dref.current.offsetTop + window.pageYOffset / 2: window.pageYOffset / 2 + 'px' }}>
            </div>
        </div>
    )
}