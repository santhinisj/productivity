import { SITE_TITLE } from '../../constants/constants';

const Footer = () => {
  return (
    <footer className='text-center py-4 border-t-2 border-black-200 bg-orange-50' style={{borderColor:"black"}}>
      <p className='mb-1'>{SITE_TITLE} &copy;</p>
      <p>&copy;Designed & developed by Santhini Sasidharan</p>
    </footer>
  );
};

export default Footer;
