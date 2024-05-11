import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#1A1A1A] text-white py-6">
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center space-x-4 text-orange-500">
                    <span>LOGO</span>
                </div>
                <div>
                    <a href="https://github.com/anastasiia-anastasieva/personal-website-practice" target="_blank" rel="noopener noreferrer"
                       className="text-white hover:text-orange-500">GitHub</a> |
                    <a href="https://www.figma.com/community/file/1351551318943737601" target="_blank" rel="noopener noreferrer"
                       className="text-white hover:text-orange-500">Design</a>
                </div>
            </div>
            <div className="text-center text-[#959595] mt-4">
                Developed by Anastasiia Anastasieva
            </div>
        </footer>
    );
};

export default Footer;
