"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

// Створення нового компонента для посилань на соціальні мережі
const SocialLinks = () => {
    return (
        <div className="flex flex-row items-end py-3 sm:py-7 gap-4 sm:gap-10">
            <a href="https://www.instagram.com/" className="flex-none order-1 flex-grow-0">
                <Image
                    src="/images/icon/instagram.svg"
                    alt="Instagram"
                    width={50}
                    height={50}
                />
            </a>
            <a href="https://ua.linkedin.com/" className="flex-none order-1 flex-grow-0">
                <Image
                    src="/images/icon/linkedIn.svg"
                    alt="LinkedIn"
                    width={50}
                    height={50}
                />
            </a>
            <a href="https://dribbble.com/" className="flex-none order-1 flex-grow-0">
                <Image
                    src="/images/icon/dribbble.svg"
                    alt="Dribbble"
                    width={50}
                    height={50}
                />
            </a>
            <a href="https://www.behance.net/" className="flex-none order-1 flex-grow-0">
                <Image
                    src="/images/icon/behance.svg"
                    alt="Behance"
                    width={50}
                    height={50}
                />
            </a>
        </div>
    );
};

const HeroSection = () => {
    return (
        <section className="py-8 sm:py-12 lg:py-16" id="home" >
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <motion.div
                    initial={{opacity: 0, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5}}
                    className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
                >
                    <div
                        className="absolute w-[300px] h-[300px] sm:w-[600px] sm:h-[516px] bg-[#FD6F00] opacity-5 blur-[40px] rounded-full pointer-events-none"></div>
                    <div className="mb-2">
                        <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#707070]">Hi I am</h1>
                        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#959595]">Mahmood Fazile</h1>
                    </div>
                    <div className="flex flex-col items-center sm:items-start">
                        <h1 className="text-3xl sm:text-4xl lg:text-8xl lg:leading-normal font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] mb-6">
                            <TypeAnimation
                                sequence={[
                                    "Web Developer",
                                    1000,
                                    "UI/UX Designer",
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </h1>
                    </div>
                    <SocialLinks/>
                    <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-4 mt-6">
                        <Link
                            href="/#contact"
                            className="px-8 py-3 w-full sm:w-fit bg-gradient-to-r from-[#FD6F00] to-[#E46400] rounded-lg text-white"
                        >
                            Hire Me
                        </Link>
                        <Link
                            href="/"
                            className="px-8 py-3 w-full sm:w-fit border-2 border-[#959595] rounded-lg text-[#959595] hover:bg-[#959595] hover:text-white transition-colors"
                        >
                            Download CV
                        </Link>
                    </div>
                </motion.div>
                <motion.div
                    initial={{opacity: 0, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5}}
                    className="col-span-4 place-self-center mt-16 lg:mt-0"
                >
                    <div
                        className="rounded-full bg-[rgba(255,255,255,0.04)] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <Image
                            src="/images/hero-image.png"
                            alt="hero image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 filter grayscale"
                            width={320}
                            height={581}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;