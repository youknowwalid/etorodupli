import { useEffect, useRef } from 'react';

export type InfoMessage = {
  title: string;
  body: string;
};

type InfoDialogProps = {
  message: InfoMessage;
  onClose: () => void;
};

export default function InfoDialog({ message, onClose }: InfoDialogProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="dialog-backdrop" onMouseDown={onClose}>
      <section
        aria-labelledby="demo-dialog-title"
        aria-modal="true"
        className="demo-dialog"
        onMouseDown={(event) => event.stopPropagation()}
        role="dialog"
      >
        <button
          aria-label="Close dialog"
          className="dialog-close"
          onClick={onClose}
          ref={closeRef}
          type="button"
        >
          ×
        </button>
        <span className="dialog-kicker">Local reconstruction demo</span>
        <h2 id="demo-dialog-title">{message.title}</h2>
        <p>{message.body}</p>
        <button className="button button-green" onClick={onClose} type="button">
          Got it
        </button>
      </section>
    </div>
  );
}
