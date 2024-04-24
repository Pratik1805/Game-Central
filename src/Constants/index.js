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
        Title:"Welcome to Grand Theft Auto",
        Description:"Grand Theft Auto (GTA) is the iconic open-world action-adventure series developed by Rockstar Games. Explore vast cities, engage in thrilling missions, and immerse yourself in the criminal underworld. With dynamic gameplay, immersive storylines, and a thriving online community, GTA offers an unparalleled gaming experience. Join us and embark on an adventure unlike any other.",
        link:"https://youtu.be/QdBZY2fkU-0?si=7N3gGb6wwDfO7u_w",
        read:"https://www.rockstargames.com/VI",
        read:"https://www.rockstargames.com/VI",
    },
    {
        id:2,
        href:"https://store.steampowered.com/agecheck/app/2215430/",
        src:ghost,
        Title:"Welcome to Ghost of Tsushima",
        Description:"Ghost of Tsushima is an epic action-adventure game developed by Sucker Punch Productions. Set in the late 13th century during the Mongol invasion of Japan, players assume the role of Jin Sakai, a samurai warrior fighting to protect his homeland. Embark on a journey across the island of Tsushima, mastering the art of the samurai and embracing the way of the Ghost as you wage a desperate guerrilla war against overwhelming odds. With stunning visuals, immersive gameplay, and a captivating story inspired by historical events, Ghost of Tsushima delivers an unforgettable gaming experience that will leave you breathless. Join us on this epic quest and become the legend that Tsushima needs.",
        link:"https://youtu.be/RcWk08PBe7k?si=aJNqCwmgHuKbSj_-",
        read:"https://www.playstation.com/en-in/games/ghost-of-tsushima/",
    },
    {
        id:3,
        href:"https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/",
        src:rdr2,
        Title:"Welcome to Red Dead Redemption 2",
        Description:"Red Dead Redemption 2, developed by Rockstar Games, is a sprawling open-world Western adventure set in America's unforgiving heartland. Players step into the boots of Arthur Morgan, an outlaw and member of the Van der Linde gang, navigating the wilds of the American frontier as they evade lawmen and rival gangs. From the rugged mountains to the sprawling plains, every corner of the vast open world is teeming with life, offering endless opportunities for exploration and adventure. With its immersive story, richly detailed world, and unparalleled attention to detail, Red Dead Redemption 2 sets a new standard for open-world gaming. Join us on this epic journey and discover what it truly means to live and die in the wild, wild west.",
        link:"https://youtu.be/gmA6MrX81z4?si=IClkMvEejL4HYCmn",
        read:"https://www.rockstargames.com/reddeadredemption2",
    },
    {
        id:4,
        href:"https://store.steampowered.com/agecheck/app/1091500/",
        src:cyberPunk,
        Title:"Welcome to Cyberpunk 2077",
        Description:"Cyberpunk 2077, developed by CD Projekt Red, is a futuristic open-world RPG set in the dystopian metropolis of Night City. Players take on the role of V, a mercenary navigating the gritty underworld of cybernetic enhancements, corporate intrigue, and urban decay. In a world where power is everything and information is currency, every choice you make will shape the destiny of not just V, but the entire city. With its immersive narrative, breathtaking visuals, and unparalleled depth of gameplay, Cyberpunk 2077 offers an unforgettable journey into a dark and dangerous future. Join us in Night City and experience the thrill of the most anticipated game of the decade.",
        link:"https://youtu.be/qIcTM8WXFjk?si=1YDIcsIh2EpDh7Wj",
        read:"https://www.cyberpunk.net/us/en/",
        
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
    //TODO:ADD Href to personal links
    { src: facebook, alt: "facebook logo" },
    { src: instagram, alt: "twitter logo" },
    { src: twitter, alt: "instagram logo" },
    { src: LinkedIn, alt: "LinkedIn logo" },
]; 