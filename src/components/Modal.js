import React from 'react';
import ReactDOM from 'react-dom';

function Modal({ children, onClose }) {
  return ReactDOM.createPortal(
    <div
      style={{
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 999,
      }}
    >
      <div
        style={{
          position: 'absolute',
          background: 'rgba(0, 0, 0, 0.5)',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: 1,
        }}
        onClick={onClose}
      />
      <div
        style={{
          position: 'relative',
          background: '#fff',
          borderRadius: '8px',
          padding: '1rem',
          zIndex: 2,
        }}
      >
        {children}
      </div>
    </div>,
    document.body,
  );
}

export default Modal;
