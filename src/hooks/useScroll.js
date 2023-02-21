import { useEffect, useState } from 'react'

export function useScroll() {
    const [scrollPosition, setScrollPosition] = useState(0)

    const onScroll = () => {
        const scrollProgress = window.scrollY
        const pageHeight = document.body.scrollHeight - window.innerHeight
        setScrollPosition((scrollProgress / pageHeight) * 100)
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return scrollPosition
}