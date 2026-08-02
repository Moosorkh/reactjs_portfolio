import { getIconComponent } from "../../icons/iconRegistry";

const TechIcon = ({ name, icon, color, size = 50 }) => {
  const IconComponent = getIconComponent(icon);

  return (
    <span className="relative group p-2 rounded-full transition-all duration-300 ease-in-out hover:scale-110">
      {IconComponent ? <IconComponent color={color} size={size} /> : null}
      <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max text-white text-xs bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
        {name}
      </span>
    </span>
  );
};

export default TechIcon;
