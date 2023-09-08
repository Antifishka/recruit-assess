import { Oval } from  'react-loader-spinner'
import { theme } from '../globalStyles/theme';

export const Loader = () => (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center h-full">
        <Oval
            height={50}
            width={50}
            color={theme.colors.background}
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor={theme.colors.secondaryText}
            strokeWidth={4}
            strokeWidthSecondary={4} />
    </div>
);