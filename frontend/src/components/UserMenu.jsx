import { useDispatch } from 'react-redux';
import operations from '../redux/auth/auth-operations';
import { useAuth } from '../hooks';
import { useMediaQuery } from 'usehooks-ts';
import { MdLogout } from 'react-icons/md';
import { theme } from '../constans/theme';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();
    const matches = useMediaQuery('(min-width: 640px)');

    return (
        <div className='flex gap-3 items-center font-semibold'>
                <div className='overflow-hidden rounded-full w-[40px] h-[40px] bg-secondary'>
                    <img src={user?.avatarURL || 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png'}
                    alt="avatar"
                    width="40px"
                    className='overflow-hidden'/>
                </div>
            
            {matches && <p>{user.nickname}</p>}
            
            <button type="button" onClick={() => dispatch(operations.logOut())}>
                <MdLogout size={20} color={theme.colors.background}
                    className='hover:fill-accent transition duration-300 ease-in-out'/>
            </button>
        </div>
    );
};