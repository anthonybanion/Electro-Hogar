import SocialIcon from "../atoms/SocialIcon";

const SocialIconsGroup = () => (
    <div className="flex flex-col gap-2">

        <div className="flex gap-2">
            <SocialIcon href="https://www.instagram.com" iconClass="bi bi-instagram" bgColor="bg-gradient-to-tr from-yellow-300 via-pink-600 to-purple-600" label="Instagram" />
            <SocialIcon href="https://www.facebook.com" iconClass="bi bi-facebook" bgColor="bg-[#1877F2]" label="Facebook" />
        </div>
    </div>
);

export default SocialIconsGroup;