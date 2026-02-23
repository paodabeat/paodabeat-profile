import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

// Import Layout Components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Import Section Components đã tách
import HeroSection from '../components/HeroSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import AcademicSection from '../components/AcademicSection';

export default function Home() {
    // Logic tạo thanh tiến trình cuộn (Scroll Progress Bar)
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="relative min-h-screen overflow-x-hidden bg-neutral-50 dark:bg-[#0a0a0a] text-neutral-900 dark:text-white font-sans selection:bg-primary/30 transition-colors duration-300">

            {/* Thanh tiến trình Scroll */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-primary z-60 origin-left"
                style={{ scaleX }}
            />

            <Navbar />

            <main>
                <HeroSection />
                <ExperienceSection />
                <ProjectsSection />
                <SkillsSection />
                <AcademicSection />
            </main>

            <Footer />
        </div>
    );
}