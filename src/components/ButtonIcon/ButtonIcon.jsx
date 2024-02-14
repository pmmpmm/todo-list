import React from 'react';
import classNames from 'classnames/bind';
import styles from './ButtonIcon.module.css';

export default function ButtonIcon({
  type,
  label,
  variant,
  size,
  color,
  className,
  onClick,
  children,
}) {
  const cx = classNames.bind(styles);
  return (
    <button
      type={type}
      aria-label={label}
      className={cx([
        'icon',
        `${variant ? variant : ''}`,
        `${size ? size : ''}`,
        `${color ? color : ''}`,
        `${className ? className : ''}`,
      ])}
      onClick={onClick ? onClick : null}
    >
      {children}
    </button>
  );
}
