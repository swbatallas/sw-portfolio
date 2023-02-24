import { useEffect, useState } from 'react'

export const useScroll = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const updatePosition = () => {
            const currentProgress = window.pageYOffset;
            const scrollHeight = document.body.scrollHeight - window.innerHeight;
            if (scrollHeight) {
                setScrollPosition(
                    Number((currentProgress / scrollHeight).toFixed(2)) * 100
                );
            }
        }

        window.addEventListener("scroll", updatePosition);
        updatePosition();
        return () => window.removeEventListener("scroll", updatePosition);
    }, []);

    return scrollPosition;
}