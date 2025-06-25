const SocialIcon = ({ href, iconClass, bgColor, textColor = 'text-white', label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className={`p-2 size-10 flex items-center justify-center rounded-full hover:scale-110 transition-transform ${bgColor}`}
  >
    <i className={`${iconClass} text-2xl pt-1 ${textColor}`}></i>
  </a>
);

export default SocialIcon;