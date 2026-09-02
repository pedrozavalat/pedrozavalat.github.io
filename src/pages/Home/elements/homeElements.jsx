import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useEffect, useState } from "react";
import { IoIosDocument } from "react-icons/io";
import { FaLinkedin, FaGithub, FaChevronDown } from "react-icons/fa";
import { MdMail } from 'react-icons/md';
import './HomeElements.css';
import Card from "../../../components/Card/Card";
import { Column, Row } from "../../../components/Table/Table";
import Line from "../../../components/Line/Line";
import MePhoto from "../../../../public/me3.png";
import saviia from '../../../../public/saviia.png';
import saviialib from '../../../../public/saviialib.png';
import Projects from "./HomeProjects";
import { InformationCard } from "./homeInformation";


export const ProfileCard = ({ }) => {

    return (
        <Card styles={[`home-card profile-card`]} style={{ width: '100%', maxWidth: '400px', textAlign: 'left' }}>
            <img src={MePhoto} width={120} height={225} alt="Profile" />
            <h3>Pedro Pablo Zavala Tejos</h3>
            <div>
                <p>
                    <MdMail style={{ verticalAlign: 'middle', marginRight: 8, color: "gray" }} />
                    <a href="">pedropablozavalat [at] uc [dot] cl</a>
                </p>
                <p>
                    <FaLinkedin style={{ verticalAlign: 'middle', marginRight: 8, color: "gray" }} />
                    <a
                        href="https://www.linkedin.com/in/pedro-pablo-zavala-tejos-671203244/"
                        target="_blank"
                        rel="noopener noreferrer"

                    >
                        LinkedIn profile
                    </a>
                </p>
                <p>
                    <FaGithub style={{ verticalAlign: 'middle', marginRight: 8, color: "gray" }} />
                    <a
                        href="https://github.com/pedrozavalat"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        @pedrozavalat
                    </a>
                </p>

                <p>
                    <IoIosDocument style={{ verticalAlign: 'middle', marginRight: 8, color: "gray" }} />
                    <span style={{ width: '5px', display: 'inline-block' }}></span>
                    <a
                        href="docs/CV_Pedro_Pablo_Zavala_EN.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        CV (EN)
                    </a>
                    <span style={{ width: '5px', display: 'inline-block' }}></span>
                    <a
                        href="docs/CV_Pedro_Pablo_Zavala_ES.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        CV (ES)
                    </a>
                </p>

            </div>
        </Card>
    )
}


export const HomeOverview = ({ }) => {

    return (
        <div className="home">
            <ProfileCard />
            <InformationCard />
        </div>
    );
}