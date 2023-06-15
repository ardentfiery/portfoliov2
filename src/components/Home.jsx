import React from "react";
import "./Styles.css";
import { SlSocialInstagram } from "react-icons/sl";
import { CiFacebook } from "react-icons/ci";
import { BsGithub,BsTwitter } from "react-icons/bs";

import {AiOutlineLinkedin,AiOutlineFacebook} from "react-icons/ai"
import {FaFacebookF} from "react-icons/fa"
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";

const Home = () => {
    return (
        <div>
            <div className="homeholder">
                <div className="leftdivhold">
                    <div className="left_div">
                        <div className="name">Sabina Thapa</div>
                        <div className="second_line">
                            <h3>Currently a Computer Engineering Student !</h3>
                        </div>
                        <div className="third_line">
                            <p>
                                I build fully responsive frontend websites. My
                                expertise lies in crafting captivating and
                                user-friendly frontend websites.
                            </p>
                        </div>
                        <div className="fourthold">
                            <div className="lineabout">
                                <div className="line"></div>
                                <div className="about">
                                    <a className="abt" href="#aboutpage">
                                        ABOUT
                                    </a>
                                </div>
                            </div>

                            <div className="lineabout">
                                <div className="line"></div>
                                <div className="about">
                                    <a className="link" href="#skilldiv">
                                        SKILLS
                                    </a>{" "}
                                </div>
                            </div>
                            <div className="lineabout">
                                <div className="line"></div>
                                <div className="about">
                                    <a className="project" href="#projectdiv">
                                        {" "}
                                        PROJECTS
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="socialmedia">
                            <div>
                               <a target="_blank" href="https://www.instagram.com/sabinakshe0100/"><SlSocialInstagram className="socials" /></a> 
                            </div>
                            <div>
                               <a target="_blank" href="https://www.facebook.com/sabina.thapakshettry"><FaFacebookF className="socials"  /></a> 
                            </div>
                            <div>
                               <a target="_blank" href="https://github.com/ardentfiery"><BsGithub className="socials" /></a> 
                            </div>
                            <div>
                               <a target="_blank" href="https://twitter.com/Sabinakshe"><BsTwitter className="socials" /></a> 
                            </div>
                            <div>
                               <a target="_blank" href="https://www.linkedin.com/in/sabina-thapa-a52707241/"><AiOutlineLinkedin className="socials" /></a> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right_div" >
                    <About/>
                    <Skills/>
                    <Project/>
                </div>
            </div>
        </div>
    );
};

export default Home;
