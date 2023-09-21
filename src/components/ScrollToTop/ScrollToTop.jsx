import { useEffect, useState } from 'react';
import './ScrollToTop.css';

export default function ScrollToTop({ show }) {
    const scrollToTop = () => {
        window.scroll({ top: true });
    }
    const onKeyPress = e => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            scrollToTop();
        }
    }
    return (
        <div
            tabIndex={2}
            aria-label='scroll to top'
            role='button'
            className={`scroll-to-top-container ${show ? '' : 'invisible'}`}
            onClick={scrollToTop}
            onKeyDown={onKeyPress}>

        </div>
    );
}