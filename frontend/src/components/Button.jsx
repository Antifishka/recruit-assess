import PropTypes from 'prop-types';

export const Button = ({ type = 'button', onClick, children }) => {
    return (
        <button type={type} onClick={onClick}
            className='px-[14px] py-[12px] max-w-max rounded-lg shadow-button font-medium uppercase sm:text-s text-primary bg-secondary
            transition duration-300 ease-in-out hover:bg-accent focus-visible:bg-accent'>
            {children}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node,
};