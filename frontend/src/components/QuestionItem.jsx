import { useMediaQuery } from 'usehooks-ts';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { MdOutlineEdit } from 'react-icons/md';
import PropTypes from 'prop-types';

export const QuestionItem = ({ id, title, description, options }) => {
    const matches = useMediaQuery('(min-width: 380px)');

    return (
        <li key={id}
            className="max-w-[680px] w-full px-5 py-4 border border-border rounded-3xl">
            <div className='flex justify-between items-start'>
                <div className='mb-4 px-[14px] py-[12px] max-w-max rounded-lg shadow-button font-medium uppercase text-xs sm:text-s text-primary bg-secondary
                transition duration-300 ease-in-out hover:bg-accent focus-visible:bg-accent cursor-pointer'>
                { title || "Unknown" }
                </div>

                <div className='flex'>
                    <button type="button"
                        className='question__btn'
                    // onClick={toggleModal}
                    >
                        <MdOutlineEdit size={matches ? "20" : "17"}
                            className='fill-background'/>
                    </button>
                    
                    <button type="button"
                        className='question__btn'
                        // onClick={handleDelete}
                    >
                        <RiDeleteBin6Line size={matches ? "20" : "17"}
                            className='fill-background'/>
                    </button>
                </div>
            </div>
            
            <p className='mb-4 text-xs'>{description}</p>

            {options?.map((option ) =>
                <>
                    <div className='px-4 py-3'>
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
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    description: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
};