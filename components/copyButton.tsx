import React from 'react';
import Clipboard from 'clipboard';

type Props = {
  text: string;
};

const CopyButton: React.FC<Props> = ({ text }) => {
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    const clipboard = new Clipboard(buttonRef.current as HTMLElement);

    return () => {
      clipboard.destroy();
    };
  }, []);

  return (
    <button ref={buttonRef} data-clipboard-text={text}>
      Copy
    </button>
  );
};

export default CopyButton;