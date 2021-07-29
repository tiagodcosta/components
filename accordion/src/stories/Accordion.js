import React, { useState, useRef, useEffect } from 'react';
import './accordion.css';

function Accordion({ title, children }) {
  const [active, setActive] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = active ? `${contentRef.current.scrollHeight}px` : '0px';
  }, [active]);

  const toggleActive = () => {
    setActive(!active);
  };
 
  return (
    <section className="accordion">
      <button className="accordion__header" type="button" onClick={toggleActive} aria-label="Open accordion">
        <p className="accordion__title">{title}</p>
        <span className="accordion__symbol">{!active ? <span>&#x002B;</span> : <span>&#x002D;</span> }</span>
      </button>
      <section className="accordion__content" ref={contentRef}>
        {children}
      </section>
    </section>
  );
}

export default Accordion;