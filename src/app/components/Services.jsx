import React from 'react';
import Image from 'next/image';

const ServiceCard = ({ title, description }) => (
    <div className="bg-[#1e1e1e] p-6 rounded-lg">
        <div className="flex justify-center items-center mb-4">
            <Image src="/images/icon/Services-icon.svg" alt="App Design Icon" width={48} height={48}/>
        </div>
        <div className="flex items-center justify-center">
            <h2 className="text-[#fd6f00] text-lg font-semibold mb-2">{title}</h2>
        </div>
        <p className="text-[#575757] text-center">{description}</p>
    </div>
);

const ServicesSection = () => (
    <section className="text-white py-8 sm:py-16" id="services">
        <h1 className="text-4xl font-bold text-center mb-8">Services</h1>
        <p className="text-[#575757] text-center mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ServiceCard title="App Design" description="Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur"/>
                <ServiceCard title="App Design" description="Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur"/>
                <ServiceCard title="App Design" description="Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur"/>
                <ServiceCard title="App Design" description="Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur"/>
                <ServiceCard title="App Design" description="Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur"/>
                <ServiceCard title="App Design" description="Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur"/>
            </div>
    </section>
);

export default ServicesSection;
