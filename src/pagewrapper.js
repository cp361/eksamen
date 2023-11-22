"use client";

import { motion, AnimatePresence } from 'framer-motion'

export function PageWrapper({ children }) {
    return (
        <>
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 25 }}
                    transition={{ delay: 0.25 }}
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </>
    )
}