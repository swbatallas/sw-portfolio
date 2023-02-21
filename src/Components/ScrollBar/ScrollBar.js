import React from 'react'
import './ScrollBar.css'
import { useScroll } from '../../hooks/useScroll'

export default function ScrollBar() {
    const scrollPosition = useScroll()

    return (
        <div className='progressBar'>
            <div className='progressBarStyle' style={{ width: `${scrollPosition}%` }}></div>
        </div>
    )
}