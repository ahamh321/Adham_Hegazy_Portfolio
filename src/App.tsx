/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SplashScreen } from './components/SplashScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Work } from './components/Work';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AnimatedSection } from './components/AnimatedSection';
import { ContinuousScrollSpine } from './components/ContinuousScrollSpine';

export default function App() {
  const [showSplash, setShowSplash] = useState<boolean>(true);
  const [splashKey, setSplashKey] = useState<number>(0);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  const handleReplayIntro = () => {
    setSplashKey((prev) => prev + 1);
    setShowSplash(true);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="min-h-screen bg-[#fafaf7] text-[#121212] selection:bg-black selection:text-[#fafaf7] relative font-body antialiased overflow-x-hidden">
      
      {/* Intro Splash Animation */}
      {showSplash && (
        <SplashScreen
          key={splashKey}
          onComplete={handleSplashComplete}
          isReplay={splashKey > 0}
        />
      )}

      {/* Full-Page Continuous Scrolling Spine Line */}
      {!showSplash && <ContinuousScrollSpine />}

      {/* Main Portfolio Experience */}
      <div className={`transition-opacity duration-1000 ${showSplash ? 'opacity-0' : 'opacity-100'}`}>
        
        {/* Minimal Navigation Bar */}
        <Navbar onReplayIntro={handleReplayIntro} />

        <main className="relative z-20">
          {/* 01: Hero Section */}
          <Hero />

          {/* 02: About / Profile Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <AnimatedSection id="about-section" sectionNumber="02" title="PROFILE">
              <About />
            </AnimatedSection>
          </div>

          {/* 03: Selected Work Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <AnimatedSection id="work-section" sectionNumber="03" title="WORK">
              <Work />
            </AnimatedSection>
          </div>

          {/* 04: Education & Certifications Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <AnimatedSection id="certificates-section" sectionNumber="04" title="CREDENTIALS">
              <Certificates />
            </AnimatedSection>
          </div>

          {/* 05: Contact Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <AnimatedSection id="contact-section" sectionNumber="05" title="CONNECT">
              <Contact />
            </AnimatedSection>
          </div>
        </main>

        {/* Footer */}
        <Footer />

      </div>

    </div>
  );
}
