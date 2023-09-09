import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, children }) => {
    useEffect(() => {
        const handleKeyDown = e => {
            if (e.code === 'Escape') {
                console.log('Нажали ESC, нужно закрыть модалку');

                onClose();
            }
        };
        
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            };
    }, [onClose]);

    const handleBackdropClick = e => {
        console.log('Кликнули в бекдроп');

        if (e.currentTarget === e.target) {
            onClose();
        }
    }

    return createPortal(  
        <div className='fixed top-0 left-0 z-10 w-screen h-screen bg-backdrop'
            onClick={handleBackdropClick}>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[340px] w-[calc(100vw - 180px)] md:w-[512px]
                p-8 bg-white rounded-2xl shadow-box'>
                {children}
            </div>
        </div>,
        modalRoot,
    )
}

Modal.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};