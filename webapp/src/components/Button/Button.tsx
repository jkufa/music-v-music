import React from 'react';
import './Button.scss';

enum ButtonTypes {
  Confirm,
  Cancel,
  Next,
}

type Props = {
  text: string;
  styling?: string;
  buttonType?: ButtonTypes;
  clickEvent: any;
};

const Button = (props: Props) => {
  return (
    <div className={'button-container'}>
      <button onClick={props.clickEvent}>{props.text}</button>
    </div>
  );
};

export default Button;
