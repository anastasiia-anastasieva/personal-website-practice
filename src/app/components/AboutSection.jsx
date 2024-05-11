"use client";
import React, {useTransition, useState, useEffect, useRef} from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const skillsData = [
    {name: 'Figma', level: 100, icon: '/images/icon-skillsData/figma.svg'},
    {name: 'Adobe XD', level: 100, icon: '/images/icon-skillsData/adobe-xd.svg'},
    {name: 'Adobe Photoshop', level: 85, icon: '/images/icon-skillsData/adobe-photoshop.svg'},
    {name: 'Adobe Illustrator', level: 60, icon: '/images/icon-skillsData/adobe-illustrator.svg'},
    {name: 'Adobe Premiere', level: 70, icon: '/images/icon-skillsData/adobe-premiere.svg'},
];

const SkillsContent = () => {
    const [visible, setVisible] = useState(false);
    const [progress, setProgress] = useState({});
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            },
            {threshold: 0.5} // Запускається коли 50% елементу видно
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref]);

    useEffect(() => {
        if (visible) {
            const intervalIds = skillsData.map((skill) => {
                const increment = () => {
                    setProgress((prevProgress) => {
                        const newValue = (prevProgress[skill.name] || 0) + 1;
                        if (newValue > skill.level) {
                            clearInterval(intervalIds[skill.name]);
                            return prevProgress;
                        }
                        return {...prevProgress, [skill.name]: newValue};
                    });
                };
                const id = setInterval(increment, 20);
                return {[skill.name]: id};
            });

            return () => {
                Object.values(intervalIds).forEach(clearInterval);
            };
        }
    }, [visible]);

    return (
        <div ref={ref}
             className="mt-4 mx-auto flex justify-start items-start flex-wrap relative max-w-screen-lg w-full">
            {skillsData.map((skill, index) => (
                <div key={index}
                     className="flex flex-col items-center p-0 gap-6 flex-none order-0 basis-full sm:basis-[18%] min-w-[180px] max-w-[220px]">
                    <div className="relative w-[100px] h-[100px] sm:w-[130px] sm:h-[130px]">
                        <CircularProgressbar
                            value={progress[skill.name] || 0}
                            text={""}
                            styles={buildStyles({
                                pathColor: `rgba(253, 111, 0, ${progress[skill.name] / skill.level})`,
                                trailColor: 'rgb(255, 255, 255, 0.04)',
                                strokeLinecap: 'butt',
                            })}
                        />
                        <Image
                            src={skill.icon}
                            alt={`${skill.name} icon`}
                            width={40}
                            height={40}
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40px] h-[40px] sm:w-[60.19px] sm:h-[60.19px]"
                        />
                    </div>
                    <span
                        className="text-[20px] sm:text-[30px] leading-[24px] sm:leading-[36px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FD6F00] to-[#E46400] w-[60px] sm:w-[80px] h-[24px] sm:h-[36px]">{`${skill.level}%`}</span>
                    <span className="text-[#959595] text-[16px] sm:text-[18px] leading-[20px] sm:leading-[29px] font-bold">{skill.name}</span>
                </div>
            ))}
        </div>
    );
};


const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>React.js</li>
                <li>Next.js</li>
                <li>Electron.js</li>
                <li>SQL</li>
                <li>JavaScript</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>React Certified Developere</li>
                <li>Bachelor of Arts in Graphic Design</li>
            </ul>
        ),
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>Certified Professional in Web Development</li>
                <li>Adobe Certified Expert in Photoshop</li>
            </ul>
        ),
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white py-8 sm:py-16 " id="about">
            <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>
            <p className="text-[#575757] text-center mb-12">User Interface and User Experience and Also video
                editing </p>

            <div className="md:grid md:grid-cols-2 gap-8 items-center xl:gap-16">
                <div className="relative w-full pb-[130%] overflow-hidden">
                    <div
                        className="absolute top-0 left-0 w-full h-full bg-[rgba(255,255,255,0.04)] rounded-t-[50%] rounded-b-[2.5%]"
                        style={{
                            clipPath: 'polygon(0 0, 100% 0, 100% 85%,  0 85%)',
                        }}></div>
                    <div className="absolute top-0 left-0 w-full h-full bg-center bg-no-repeat bg-cover"
                         style={{
                             backgroundImage: 'url(/images/hero-image.png)',
                             backgroundBlendMode: 'luminosity',
                             clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 85%)', // Той самий clip-path
                             filter: 'grayscale(1)'
                         }}></div>
                </div>


                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <p className="lg:text-lg text-[#959595] text-lg leading-[190%] text-justify">
                        A software engineer, the modern-day architect of digital realms, navigates the ethereal
                        landscapes of code, sculpting intangible structures that shape our technological world. With
                        fingers poised over keyboards like virtuoso pianists, they compose symphonies of logic, their
                        minds a labyrinth of algorithms and solutions.Their canvas is a screen, a vast expanse where
                        lines of code dance in intricate patterns, weaving the fabric of programs and applications. Each
                        keystroke is a brushstroke, crafting intricate architectures and breathing life into innovative
                        designs.In this digital atelier, they don the mantle of problem solvers, confronting bugs and
                        glitches like valiant knights in an ever-evolving quest for perfection. Debugging becomes a
                        noble pursuit, unraveling the mysteries hidden within the tangled webs of code. designs.In this
                        digital atelier.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("certifications")}
                            active={tab === "certifications"}
                        >
                            {" "}
                            Certifications{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
            <SkillsContent/>
        </section>
    );
};

export default AboutSection;
