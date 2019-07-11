import React from "react";
import IButton from "../../interfaces/button";
import "../../styles/components/_button.scss";
import { variantTypes } from "../../types/button";
import classNamesDefault from "../../utils/class-names-default";
import Icon from "../icon";

class Button extends React.PureComponent<IProps> {
  private static defaultProps = {
    variant: "primary",
  };

  public render() {
    const {
      variant,
      fluid,
      disabled,
      icon,
      round,
      children,
      ...props
    } = this.props;
    return (
      <button
        className={classNamesDefault({ variant, fluid, disabled, round })}
        disabled={disabled}
        {...props}
      >
        {icon && <Icon name={icon} />}
        {children && <span>{children}</span>}
      </button>
    );
  }
}

interface IProps extends IButton {
  variant?: variantTypes;
  fluid?: boolean;
  disabled?: boolean;
  icon?: string;
  round?: boolean;
}

export default Button;