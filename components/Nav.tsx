import {headerLogo} from '../public/assets/images';
import {hamburger } from '../public/assets/icons'

import Image from 'next/image';
const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
                <Image src={headerLogo} alt='logo' width={130} height={29}/>
            </a>
        </nav>
    </header>
  )
}

export default Nav