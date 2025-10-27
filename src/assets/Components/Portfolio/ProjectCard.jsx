import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { triggerConfetti } from '../../../utils/confetti';

const ProjectCard = ({ project }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleCardClick = (e) => {
        // Only trigger confetti if not clicking a link
        if (!e.target.closest('a') && !e.target.closest('button')) {
            triggerConfetti();
        }
    };

    return (
        <div
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
            onClick={handleCardClick}
        >
            <div className="relative group">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                    <div className="flex gap-4">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                            aria-label="View GitHub Repository"
                        >
                            <FaGithub size={20} />
                        </a>
                        {project.demo && project.demo !== "#" && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-teal-500 hover:bg-teal-600 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                                aria-label="View Live Demo"
                            >
                                <FaExternalLinkAlt size={20} />
                            </a>
                        )}
                    </div>
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>

                <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-blue-900/30 text-blue-300 text-xs rounded-full border border-blue-500/30"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-blue-400 text-sm hover:text-blue-300 transition-colors flex items-center gap-1"
                >
                    {isExpanded ? 'Show Less' : 'Show More'}
                    <span className="transform transition-transform duration-300" style={{ transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)' }}>
                        →
                    </span>
                </button>

                {isExpanded && (
                    <ul className="list-disc pl-5 mt-4 text-sm text-gray-400 space-y-1 animate-fadeIn">
                        {project.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
