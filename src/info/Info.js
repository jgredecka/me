import self from "../img/self.png"
import kseaplus from "../img/kseaplus.png";
import kinet from "../img/kinet.png";
import pdbparser from "../img/pdbparser.png";

export let colors = ["rgb(0,255,164)", "rgb(74,112,243)"];

export const info = {
    firstName: "Justyna",
    lastName: "Gredecka",
    initials: "jg",
    position: "a Full Stack Engineer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '👩‍💻',
            text: 'TypeScript, JavaScript, Python, React.js, Flask'
        },
        {
            emoji: "🏢",
            text: "Software Engineer at Healx"
        },
        {
            emoji: '🌎',
            text: 'Currently based in the UK'
        },
        {
            emoji: '☕',
            text: 'Tea connoisseur'
        },
        {
            emoji: "📧",
            text: "justynagredecka@outlook.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/jgredecka",
            icon: "fa fa-github",
            label: 'GitHub'
        },
        {
            link: "https://stackoverflow.com/users/10213506/vendredisurmer",
            icon: "fa fa-stack-overflow",
            label: "StackOverflow",
        },
        {
            link: "https://linkedin.com/in/gredecka",
            icon: "fa fa-linkedin",
            label: 'LinkedIn'
        },
        {
            link: "https://www.instagram.com/jgredecka",
            icon: 'fa fa-instagram',
            label: 'Instagram'
        },
    ],
    portfolio: [
        {
            title: "KSEAPlus",
            live: "https://ksea-plus.herokuapp.com",
            source: "https://github.com/jgredecka/kseaplus",
            image: kseaplus
        },
        {
            title: "KiNet",
            source: "https://github.com/jgredecka/kinet",
            image: kinet
        },
        {
            title: "PDBParser",
            source: "https://github.com/jgredecka/pdbparser",
            image: pdbparser
        },
    ]
}