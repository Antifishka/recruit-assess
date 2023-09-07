import { CircularProgress } from '@chakra-ui/react'
import { theme } from '../globalStyles/theme';

export const Loader = () => (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center h-full">
        <CircularProgress isIndeterminate color={theme.colors.background}/>
    </div>
);