import { cyberPunk, ghost, gta, rdr2 } from "../assets/images"

export const navLinks = [
    { href: "#home", label: "Home"},
    { href: "#trending", label: "Trending Games"},
    { href: "#about-us", label: "About Us"},
    { href: "#portfolio", label: "Portfolio"},
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