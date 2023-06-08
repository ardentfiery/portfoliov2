import React from "react";
import './Styles.css'

const Project = () => {
    const arrayOfProject = [
        {
            link:"https://ourecomsite.netlify.app",
            name:"Ecommerce Site",
            description:"This is a simple ecommerce site built using reactjs.",
            img:"ecom.png"
        },
        {
            link: "https://tooday.netlify.app",
            name:"To-Do list",
            description:"This is a todo list site built using reactjs.",
            img:"todo.png"
        },
        {
            link: "https://qrcodeisgenerated.netlify.app",
            name:"QR code Generator",
            description:"This is a QR code generator  site that generates QR code for any text.",
            img:"qr.png"
        },
        
        
        {
            link:"https://brainquizapp.netlify.app",
            name:"Quiz Site",
            description:"This is a simple quiz site built using reactjs.",
            img:"quiz.png"
        },
        
        
        {
            link:"https://knowbooks.netlify.app",
            name:"Books Site",
            description:"This is a simple books site built using  API.",
            img:"book.png"
        },
        
        
        {
            link: "https://trackingcrypto.netlify.app",
            name:"Crypto Tracker",
            description:"This is a crytpotracking site built using coingecko API.",
            img:"crypt.png"
        },
        
        
        
        
        
        
       
       
        
        
       
    ];
    return (
        <div id="projectdiv">
            {arrayOfProject.map((currel) => {
                return (
                    <div className="projecthold">
                        <a target="_blank" className="href" href={currel.link}>
                            <div className="image_desc"> 
                                <div className="imgholder"><img className="projectimg" src={currel.img}></img></div>
                                <div className="names">{currel.name}</div>
                                <div className="description">{currel.description}</div>
                            </div>
                        </a>
                    </div>
                );
            })}
        </div>
    );
};

export default Project;
