import {APP_NAME} from '@/lib/constants';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return ( <footer className="w-full border-t">
        <div className="wrapper flex-between">
            <div className="flex-start">
                <span className='font-bold text-2xl'>{APP_NAME}</span>
                </div>
                <div className="flex-end">
                    <span>&copy; {currentYear} {APP_NAME}</span>
                    </div>
                    </div>
                    </footer> );
}
 
export default Footer;