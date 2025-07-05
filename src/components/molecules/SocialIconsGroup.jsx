import SocialIcon from "../atoms/SocialIcon";

const SocialIconsGroup = () => (
    <div className="flex flex-col gap-2">
        <h2 className="mb-1 text-lg md:text-xl font-semibold">Redes Sociales</h2>
        <div className="flex gap-2">
            <SocialIcon href="https://www.instagram.com" iconClass="bi bi-instagram" bgColor="bg-gradient-to-tr from-yellow-300 via-pink-600 to-purple-600" label="Instagram" />
            <SocialIcon href="https://www.facebook.com" iconClass="bi bi-facebook" bgColor="bg-[#1877F2]" label="Facebook" />
            <SocialIcon href="https://www.x.com" iconClass="bi bi-twitter-x" bgColor="bg-black" label="X/Twitter" />
            <SocialIcon href="https://www.linkedin.com" iconClass="bi bi-linkedin" bgColor="bg-white" textColor="text-[#0A66C2]" label="LinkedIn" />
        </div>
    </div>
);

export default SocialIconsGroup;