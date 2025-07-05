const SocialIcon = ({
  href,
  iconClass,
  bgColor,
  textColor = 'text-white',
  label,
  size = '10',
  p = '2',
  className = '',
  as = 'a', // 'a' para footer, 'i' para decorativo
}) => {
  const classes = `p-${p} size-${size} flex items-center justify-center rounded-full ${bgColor} ${textColor} ${className}`;

  const icon = (
    <i
      className={`${iconClass} text-lg md:text-xl pt-0.5`}
      aria-hidden="true"
      title={label}
    />
  );

  if (as === 'i') {
    return (
      <>
        {icon}
      </>
    );
  }

  // default: anchor
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`${classes} hover:scale-110 transition-transform w-8 sm:w-10 h-8 sm:h-10`}
    >
      {icon}
    </a>
  );
};

export default SocialIcon;