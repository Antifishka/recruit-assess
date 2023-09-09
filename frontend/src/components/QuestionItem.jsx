import { useState } from 'react';
import { useDispatch } from "react-redux";
import { useMediaQuery } from 'usehooks-ts';
import { useAuth } from '../hooks';
import { deleteQuestion } from "../redux/questions/questions-operations";
import { RiDeleteBin6Line } from 'react-icons/ri';
import { MdOutlineEdit } from 'react-icons/md';
import { Modal } from "./Modal";
import QuestionEditorUpdate from './QuestionEditorUpdate';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';

export const QuestionItem = ({ id, title, description, options }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();
    const matches = useMediaQuery('(min-width: 380px)');
    const { isLoggedIn } = useAuth();

    const toggleModal = () => setIsModalOpen(state => !state);

    const handleDelete = () => dispatch(deleteQuestion(id));

    const denyAction = () => toast.error('Please log in!');

    return (
        <li className="max-w-[680px] w-full px-5 py-4 border border-border rounded-3xl">
            <div className='flex justify-between items-start'>
                <div className='mb-4 px-[14px] py-[12px] max-w-max rounded-lg shadow-button font-medium uppercase text-xs sm:text-s text-primary bg-secondary
                transition duration-300 ease-in-out hover:bg-accent focus-visible:bg-accent cursor-pointer'>
                { title || "Unknown" }
                </div>

                <div className='flex'>
                    <button type="button"
                        onClick={isLoggedIn ? toggleModal : denyAction}
                        className='question__btn'>
                        <MdOutlineEdit size={matches ? "20" : "17"}
                            className='fill-background'/>
                    </button>
                    
                    <button type="button"
                        onClick={isLoggedIn ? handleDelete : denyAction}
                        className='question__btn'>
                        <RiDeleteBin6Line size={matches ? "20" : "17"}
                            className='fill-background'/>
                    </button>
                </div>
            </div>
            
            <p className='mb-4 text-xs text-center'>{description}</p>

            {options?.map((option, idx ) =>
                <div key={idx} className='px-4 py-3'>
                    <label className='flex items-center gap-2'>
                        <input type='radio' />
                        <span className='text-xs text-left'>{option}</span>
                    </label>
                </div>
            )}

            {isModalOpen && (
                <Modal onClose={toggleModal}>
                    <QuestionEditorUpdate onUpdate={toggleModal} id={id}/>
                </Modal>)}
        </li>
    )
}

QuestionItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    description: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
};