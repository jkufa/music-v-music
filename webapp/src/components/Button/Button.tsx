import React from 'react';
import './Button.scss';

enum ButtonTypes {
  Confirm,
  Cancel,
  Next
}

type Props = {
  text: string;
  styling?: string;
  buttonType?: ButtonTypes;
};

const Button = (props: Props) => {
  return (
    <div className={'button-container'}>
      <button>{ props.text }</button>
    </div>
  );
}

export default Button;