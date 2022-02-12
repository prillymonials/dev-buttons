import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  color,
  size,
  variant,
  disabled,
  disabledShadow,
  startIcon,
  endIcon,
  children,
}) => {
  const classNames = [
    // Base Class
    'ui-btn',
    // Color
    `ui-btn--${color}`,
    // Size
    `ui-btn--${size}`,
    // Variant
    (variant !== 'normal') && `ui-btn--${variant}`,
    // No Shadow
    disabledShadow && 'ui-btn--no-shadow',
  ].filter(Boolean).join(' ');

  return (
    <button type="button" className={classNames} disabled={disabled}>
      {startIcon && <span className="material-icons ui-btn-icon ui-btn-icon--left">{startIcon}</span>}
      {children}
      {endIcon && <span className="material-icons ui-btn-icon ui-btn-icon--right">{endIcon}</span>}
    </button>
  );
};

Button.propTypes = {
  /**
   * Color of the button.\n
   * Possible value: `default`,`primary`,`secondary`.
   */
  color: PropTypes.oneOf(['default', 'primary', 'secondary']),
  /**
   * The size of the button.\n
   * Possible value: `sm` `md` `lg`.
   */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /**
   * The variant of the button.\n
   * Possible value: `normal` `outline` `text`.
   */
  variant: PropTypes.oneOf(['normal', 'outline', 'text']),
  /**
   * Disabled state of the button.
   */
  disabled: PropTypes.bool,
  /**
   * Shadow state of the button.
   */
  disabledShadow: PropTypes.bool,
  /**
   * Icon before the label of the Button.
   */
  startIcon: PropTypes.string,
  /**
   * Icon after the label of the Button.
   */
  endIcon: PropTypes.string,
};

Button.defaultProps = {
  color: 'default',
  size: 'md',
  variant: 'normal',
  disabled: false,
  disabledShadow: false,
};
