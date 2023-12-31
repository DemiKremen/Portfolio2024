import React, { useEffect, useState } from 'react';
import { SiAdobeillustrator, SiAdobephotoshop, SiCanva, SiAdobeindesign, SiAdobeaftereffects } from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import ProgressBar from './ProgressBar';
import './menu.css';

const SkillItem = ({ icon, skill, width }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById('skills-section');
      const scrollPosition = window.scrollY + window.innerHeight;
      const targetPosition = skillsSection.offsetTop;

      if (scrollPosition >= targetPosition) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`skill-item ${isVisible ? 'visible' : ''}`}>
      {icon}
      <div className="flex-grow-1">
        <p className="mb-0">{skill}</p>
        <ProgressBar width={width} isVisible={isVisible} />
      </div>
    </div>
  );
};

const Menu = () => {
  return (
    <div className="container" id="skills-section">
      <SkillItem icon={<SiAdobeillustrator size={24} />} skill="Illustrator" width={90} />
      <SkillItem icon={<SiAdobephotoshop size={24} />} skill="Photoshop" width={75} />
      <SkillItem icon={<SiCanva size={24} />} skill="Canva" width={100} />
      <SkillItem icon={<SiAdobeindesign size={24} />} skill="Indesign" width={50} />
      <SkillItem icon={<SiAdobeaftereffects size={24} />} skill="After Effects" width={30} />
      <SkillItem icon={<CgFigma size={24} />} skill="Figma" width={80} />
      <SkillItem icon={<FaReact size={24} />} skill="React" width={50} />
      <SkillItem icon={<FaHtml5 size={24} />} skill="HTML 5" width={50} />
    </div>
  );
};

export default Menu;

