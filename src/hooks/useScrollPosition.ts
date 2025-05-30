import { useState, useEffect } from 'react';

export default function useScrollPosition() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const updatePosition = () => {
            setScrollPosition(window.pageYOffset);
            setIsScrolled(window.pageYOffset > 50);
        };

        window.addEventListener('scroll', updatePosition);

        // Initial check
        updatePosition();

        return () => window.removeEventListener('scroll', updatePosition);
    }, []);

    return { scrollPosition, isScrolled };
}
