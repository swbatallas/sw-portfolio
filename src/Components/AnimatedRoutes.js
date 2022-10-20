import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Profile from './../Pages/Profile/Profile';
import Skills from './../Pages/Skills/Skills';
import Projects from './../Pages/Projects/Projects';
import ErrorPage from './../Pages/ErrorPage';
import { AnimatePresence } from 'framer-motion'

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Profile />}>
                    <Route path='/skills' element={<Skills />} />
                    <Route path='/projects' element={<Projects />} />
                </Route>
                <Route path='/*' element={<ErrorPage />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes