import React from "react";
import IInput from "../../interfaces/input";
import "../../styles/components/_input.scss";
import classNamesDefault from "../../utils/class-names-default";

class Input extends React.PureComponent<IProps> {
  private static defaultProps = {
    type: "text",
  };

  public render() {
    const { error, variant, label, fluid, subtext, ...props } = this.props;
    return (
      <div className="input-wrapper">
        {label && <label>{label}</label>}
        {subtext && <span>{subtext}</span>}
        <input className={classNamesDefault({ error, variant, fluid })} {...props} />
      </div>
    );
  }
}

interface IProps extends IInput {
  variant?: string;
  error?: boolean;
  label?: string;
  subtext?: string;
  fluid?: boolean;
}

export default Input;
