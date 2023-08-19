import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../styles/Collapse.scss';

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSvgRotated, setSvgRotated] = useState(false);
  const [isVisible, setVisible] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
    setSvgRotated(!isSvgRotated);
    setVisible(!isVisible);
  };

  return (
    <div className={`collapse ${isOpen ? 'active' : ''}`}>
      <div className="collapse__header" onClick={toggleCollapse}>
        <h3 className="collapse__title">{title}</h3>
        <svg className={`collapse__svg ${isSvgRotated ? 'rotated' : ''}`} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
      </div>
      {isOpen && (
        <div className={`collapse__content ${isVisible ? 'visible' : ''}`}>
            {children}
        </div>
      )}
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Collapse;