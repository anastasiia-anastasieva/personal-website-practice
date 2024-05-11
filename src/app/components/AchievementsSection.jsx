"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
    () => {
        return import("react-animated-numbers");
    },
    { ssr: false }
);

const achievementsList = [
    {
        metric: "Experiences",
        value: "5",
        postfix: "+",
    },
    {
        metric: "Project done",
        value: "20",
        postfix: "+",
    },
    {
        metric: "Happy Clients",
        value: "80",
        postfix: "+",
    },
];

const AchievementsSection = () => {
    return (
        <div className="py-8 px-0 xl:gap-16 sm:py-16 xl:px-0">
            <div className="bg-white bg-opacity-5 rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
                {achievementsList.map((achievement, index) => {
                    return (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0 gap-3 relative w-36 h-19"
                        >
                            <h2 className="text-[#FD6F00] text-4xl font-bold flex flex-row">
                                {achievement.prefix}
                                <AnimatedNumbers
                                    includeComma
                                    animateToNumber={parseInt(achievement.value)}
                                    locale="en-US"
                                    className="text-[#FD6F00] text-4xl font-bold"
                                    configs={(_, index) => {
                                        return {
                                            mass: 1,
                                            friction: 100,
                                            tensions: 140 * (index + 1),
                                        };
                                    }}
                                />
                                {achievement.postfix}
                            </h2>
                            <p className="text-[#DFDFDF] text-lg font-bold">{achievement.metric}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AchievementsSection;