import PropTypes from 'prop-types';

export const QuestionItem = ({ title, description, options }) => {
    return (
        <li
            className="max-w-[680px] w-full px-[32px] py-[24px] border border-border rounded-3xl">
            <div className='ml-auto mb-3 px-[14px] py-[12px] max-w-max rounded-lg shadow-button font-medium uppercase sm:text-s text-primary bg-secondary
                transition duration-300 ease-in-out hover:bg-accent focus-visible:bg-accent cursor-pointer'>
                {title}
            </div>
            <p className='mb-4 text-xs'>{description}</p>

            {options?.map((option ) =>
                <>
                    <div className='p-4'>
                        <label className='flex items-center gap-2'>
                            <input type='radio' />
                            <span className='text-xs'>{option}</span>
                        </label>
                    </div>
                </>
            )}
        </li>
    )
}

QuestionItem.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
};