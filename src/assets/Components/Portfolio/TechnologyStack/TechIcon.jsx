import PropTypes from "prop-types";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as DiIcons from "react-icons/di";

const TechIcon = ({ name, icon, color, size = 50, decorative = false }) => {
  // Dynamically load the icon from different icon libraries
  const getIcon = () => {
    if (icon.startsWith("Fa")) {
      const IconComponent = FaIcons[icon];
      return <IconComponent color={color} size={size} />;
    } else if (icon.startsWith("Si")) {
      const IconComponent = SiIcons[icon];
      return <IconComponent color={color} size={size} />;
    } else if (icon.startsWith("Di")) {
      const IconComponent = DiIcons[icon];
      return <IconComponent color={color} size={size} />;
    }
    return null;
  };

  return (
    <span
      className="technology-icon group"
      aria-hidden={decorative ? "true" : undefined}
      aria-label={decorative ? undefined : name}
    >
      {getIcon()}
      <span className="technology-icon__tooltip">
        {name}
      </span>
    </span>
  );
};

TechIcon.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.number,
  decorative: PropTypes.bool,
};

export default TechIcon;
