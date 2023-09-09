import { useState } from 'react';
import { useAuth } from '../hooks';
import { ReactComponent as Icon }  from '../assets/icons/plus.svg';
import { Modal } from "./Modal";
import QuestonEditor from "./QuestionEditor";
import toast from 'react-hot-toast';

export const AddButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { isLoggedIn } = useAuth();

    const toggleModal = () => setIsModalOpen(state => !state);

    const denyAction = () => toast.error('Please log in!');

    return (
        <>
            <div className='flex justify-end items-center gap-3 pt-4 mb-4'>
                <p className='text-xs md:text-s'>Add question</p>
                <button type="button"
                    onClick={isLoggedIn ? toggleModal : denyAction} 
                    className='flex justify-center items-center w-[40px] h-[40px] rounded-full bg-background hover:bg-accent
                        transition duration-300 ease-in-out'>
                    <Icon className="inline-blok w-[20px] h-[20px] md:w-6 md:h-6 fill-secondary"/>
                </button>
            </div>

            {isModalOpen && (
                <Modal onClose={toggleModal}>
                    <QuestonEditor onAdd={toggleModal} />
                </Modal>)}
        </>    
        
    )
};