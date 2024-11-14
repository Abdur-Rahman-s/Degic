// Hero.js
import React from 'react';
import Button from '@mui/material/Button';
import { Image, Heading, paragraph } from "../utilities/Hero";

function Hero() {
    return (
        <section>
            <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center px-6 lg:px-0 container mx-auto h-screen gap-10">
                
                {/* Text Section */}
                <div className="text-center lg:text-left flex flex-col gap-5 max-w-md lg:max-w-lg">
                    <h1 className="text-[24px] md:text-[36px] lg:text-[48px] font-bold leading-snug">
                        {Heading}
                    </h1>
                    
                    <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
                        {paragraph}
                    </p>

                    {/* Button section */}
                    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto items-center sm:justify-start mt-4">
                        <Button
                            style={{
                                backgroundColor: '#5F62E2',
                                color: '#FFFFFF',
                                borderRadius: '8px',
                                padding: '12px 24px',
                                fontSize: '16px',
                                fontWeight: '600',
                            }}
                            className="w-full sm:w-auto shadow-md hover:shadow-lg transition"
                        >
                            Get Started
                        </Button>
                        <Button
                            style={{
                                backgroundColor: '#5F62E226',
                                color: '#5F62E2',
                                borderRadius: '8px',
                                padding: '12px 24px',
                                fontSize: '16px',
                                fontWeight: '600',
                            }}
                            className="w-full sm:w-auto shadow-md hover:shadow-lg transition"
                        >
                            Learn More
                        </Button>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="w-full max-w-sm md:max-w-md lg:max-w-lg mt-8 lg:mt-0">
                    <img src={Image} alt="Hero Image" className="w-full" />
                </div>
            </div>
        </section>
    );
}

export default Hero;
