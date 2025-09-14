import React from "react";
import icon from "./icon111.png";
import iconTwo from "./icon112.png";



function Services() {
    return (
        <section id="Services">
            <h2>SERVICES</h2>
            <div className="ServiceDiv">
                <div>
                    <img className="icon" src={icon} alt="l1" />
                    <h3>WEB DEVELOPMENT</h3>
                    <br />
                    <p>Elevate your digital presence with my professional web development services. As a full stack web developer, I build fast, secure, and scalable websites that deliver seamless functionality and exceptional user experiences.</p>
                    <br />
                    <h3>WHAT I OFFER:</h3>
                    <ul>
                        <li>Custom  Website Development</li>
                        <li>Full Stack Development (Frontend & Backend)</li>
                        <li>API Development & Integration</li>
                        <li>Database Design & Management</li>
                        <li>E-commerce Development</li>
                        <li>Website Optimization for Speed & Performance</li>
                        <li>Ongoing Support & Maintenance</li>
                    </ul>

                </div>


                <div>
                    <img className="icon" src={iconTwo} alt="l2" />
                    <h3>MOBILE APP DEVELOPMENT</h3>
                    <br />
                    <p>Bring your ideas to life with my expert mobile development services. As a skilled full stack mobile developer, I create sleek, user-friendly, and highperforming apps that keep users engaged and deliver real results.</p>
                    <br />
                    <h3>WHAT I OFFER:</h3>
                    <ul>
                        <li>Custom Mobile App Design and Development</li>
                        <li>Cross-Platform Apps (iOS & Android)</li>
                        <li>API Integration & Backend Development</li>
                        <li>E-commerce & Payment Integration</li>
                        <li>App Redesign and Optimization</li>
                        <li>App Maintenance, Updates & Support</li>
                    </ul>
                </div>
            </div>

        </section>
    )
}

export default Services;