import React from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import HowItWorksSection from './HowItWorksSection';
import TestimonialsSection from './TestimonialsSection';
import CTASection from './CTASection';

const Homepage = () => {
    return (
        <>
            <HeroSection></HeroSection>
            <FeaturesSection></FeaturesSection>
            <HowItWorksSection></HowItWorksSection>
            <TestimonialsSection></TestimonialsSection>
            <CTASection></CTASection>
        </>
    );
};

export default Homepage;