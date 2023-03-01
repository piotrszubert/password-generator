import React from 'react';
import Clipboard from 'clipboard';
import { toast } from 'react-toastify';

type Props = {
  text: string;
};

const CopyButton: React.FC<Props> = ({ text }) => {
    const buttonRef = React.useRef<HTMLButtonElement>(null);

    React.useEffect(() => {
        const clipboard = new Clipboard(buttonRef.current as HTMLElement);

        clipboard.on('success', () => {
            console.log('aaaa')
            toast.success('Password copied to clipboard!');
        });

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