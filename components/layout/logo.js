import classes from './logo.module.css';
import Image from 'next/image';

function Logo() {
  return ( 
 <Image
  src={`/images/logo/spadLogov1.jpg`}
  alt={'Spad Software Logo'}
  width={256}
  height={56}
/>
);
}

export default Logo;
