import PropTypes from "prop-types";
import TechIcon from "./TechIcon";

const TechCategory = ({ title, technologies, direction, rowRef }) => {
  const repeatedTechnologies = Array.from({ length: 3 }, () => technologies).flat();

  return (
    <section className="technology-category">
      <div className="technology-category__heading">
        <h3>{title}</h3>
      </div>
      <div ref={rowRef} className="technology-marquee" data-direction={direction}>
        <div className="technology-marquee__track">
          {[false, true].map((isClone) => (
            <div
              key={isClone ? "clone" : "primary"}
              className={`technology-marquee__group${isClone ? " technology-marquee__group--clone" : ""}`}
              aria-hidden={isClone ? "true" : undefined}
            >
              {repeatedTechnologies.map((tech, index) => (
                <TechIcon
                  key={`${tech.name}-${index}`}
                  name={tech.name}
                  icon={tech.icon}
                  color={tech.color}
                  decorative={index >= technologies.length || isClone}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

TechCategory.propTypes = {
  title: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
  direction: PropTypes.oneOf(["left", "right"]).isRequired,
  rowRef: PropTypes.func.isRequired,
};

export default TechCategory;
