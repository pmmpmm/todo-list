import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.css';

export default function Button({
  type,
  label,
  variant,
  size,
  className,
  onClick,
  children,
}) {
  const cx = classNames.bind(styles);

  return (
    <>
      <button
        type={type}
        aria-label={label}
        className={cx([
          `${variant}`,
          `${size ? size : ''}`,
          `${className ? className : ''}`,
        ])}
        onClick={onClick ? onClick : null}
      >
        {children}
      </button>
    </>
  );
}
