import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
    return (
        <div className="middle" id="skilldiv">
            <div>
                <h1>MY SKILLS</h1>
            </div>
            <div className="firstclass">
                <div>
                    <div>HTML</div>
                </div>
                <div className="first">
                    <motion.div
                        initial={{ width: "0" }}
                        whileInView={{ width: "90%" }}
                        transition={{ duration: 1.5 }}
                        className="one"
                    ></motion.div>
                </div>
            </div>
            <div className="firstclass">
                <div>
                    <div>CSS</div>
                </div>
                <div className="first">
                    <motion.div
                        initial={{ width: "0" }}
                        whileInView={{ width: "85%" }}
                        transition={{ duration: 1.5 }}
                        className="two"
                    ></motion.div>
                </div>
            </div>
            <div className="firstclass">
                <div>
                    <div>JAVASCRIPT</div>
                </div>
                <div className="first">
                    <motion.div
                        initial={{ width: "0" }}
                        whileInView={{ width: "75%" }}
                        transition={{ duration: 1.5 }}
                        className="three"
                    ></motion.div>
                </div>
            </div>
            <div className="firstclass">
                <div>
                    <div>REACT</div>
                </div>
                <div className="first">
                    <motion.div
                        initial={{ width: "0" }}
                        whileInView={{ width: "70%" }}
                        transition={{ duration: 1.5 }}
                        className="four"
                    ></motion.div>
                </div>
            </div>
            <div className="firstclass">
                <div>
                    <div>C/C++</div>
                </div>
                <div className="first">
                    <motion.div
                        initial={{ width: "0" }}
                        whileInView={{ width: "65%" }}
                        transition={{ duration: 1.5 }}
                        className="five"
                    ></motion.div>
                </div>
            </div>
            <div className="firstclass">
                <div>
                    <div>PRESENTATION</div>
                </div>
                <div className="first">
                    <motion.div
                        initial={{ width: "0" }}
                        whileInView={{ width: "80%" }}
                        transition={{ duration: 1.5 }}
                        className="six"
                    ></motion.div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
