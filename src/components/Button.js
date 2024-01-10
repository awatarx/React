import React from 'react';


const Button = (props) => {
  const { variant, size, onClick, children } = props;

  return (
    <button
      type="button"
      className={`btn btn-${variant || 'primary'} btn-${size || 'md'}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
