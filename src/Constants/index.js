import { AR_VR_design, LinkedIn, desktop, facebook, instagram, mobile, ps4, threeDModel, twitter, vr } from "../assets/icons"
import { Project1, Project2, Project3, Project4, cyberPunk, ghost, gta, rdr2 } from "../assets/images"

export const navLinks = [
    { href: "#home", label: "Home"},
    { href: "#trending", label: "Trending Games"},
    { href: "#projects", label: "Our Projects"},
    { href: "#about", label: "About us"},
]

export const trendingGames = [
    //TODO:ADD link to componenet
    {
        id:1,
        href:"https://store.steampowered.com/agecheck/app/271590/",
        src:gta,
    },
    {
        id:2,
        href:"https://store.steampowered.com/agecheck/app/2215430/",
        src:ghost,
    },
    {
        id:3,
        href:"https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/",
        src:rdr2,
    },
    {
        id:4,
        href:"https://store.steampowered.com/agecheck/app/1091500/",
        src:cyberPunk,
    }
]
export const services = [
    {
        id:1,
        src: mobile,
        title:"Mobile Game Development",
    },
    {
        id:2,
        src: desktop,
        title: "PC Game Development",
    },
    {
        id:3,
        src: ps4,
        title: "PS4 Game Development",
    },
    {
        id:4,
        src: vr,
        title: "AR/VR Solutions",
    },
    {
        id:5,
        src: AR_VR_design,
        title: "AR/VR design",
    },
    {
        id:6,
        src: threeDModel,
        title: "3D Modelings",
    },
]

export const recentProjects = [
    {
        id:1,
        src: Project1,
        title:"Game Parlour",
    },
    {
        id:2,
        src: Project2,
        title:"FPS Games",
    },
    {
        id:3,
        src: Project3,
        title:"PC Assembling",
    },
    {
        id:4,
        src: Project4,
        title:"PS5 Game",
    },
]
export const footerLinks = [
    {
        id:1,
        title:"Portfolio",
    },
    {
        id:2,
        title:"Careers",
    },
    {
        id:3,
        title:"Contact Us",
    },
]
export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: instagram, alt: "twitter logo" },
    { src: twitter, alt: "instagram logo" },
    { src: LinkedIn, alt: "LinkedIn logo" },
]; 