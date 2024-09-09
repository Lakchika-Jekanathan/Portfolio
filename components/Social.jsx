import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram, FaFacebook } from "react-icons/fa";

const Socials = [
    { icon: <FaGithub />, path: "https://github.com/Lakchika-Jekanathan" },
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/lakchika-jekanathan/" },
    { icon: <FaInstagram />, path: "https://www.instagram.com/lachchu__?igsh=bG4zbDU1M3NnOGdu" },
    { icon: <FaFacebook />, path: "https://www.facebook.com/Lachchu001?mibextid=ZbWKwL" },
];

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {Socials.map((item, index) => (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            ))}
        </div>
    );
};

export default Social;
