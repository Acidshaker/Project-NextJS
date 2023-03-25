import Link from 'next/link';
import { useState } from 'react';
import { IconLogo } from '../../assets/logo/IconLogo';
import { Arrow } from '../../assets/svg/Arrow';
import { Circle } from '../../assets/svg/Circle';
import { Heartred } from '../../assets/svg/Heartred';
import { Plus } from '../../assets/svg/Plus';
import { Profile } from '../../assets/svg/Profile';

const Header = () => {
  const [isLogged] = useState(false);

  return (
    <header className="bg-black text-white flex items-center justify-between px-4 sm:px-12 py-4 min-h-[70px] text-sm">
      <div>
        <Link href={'/'}>
          <IconLogo />
        </Link>
      </div>
      <div className="space-x-6 flex flex-row items-center">
        <div>
          <Link
            href={'/create-post'}
            className="flex flex-row space-x-6 items-center"
          >
            <Plus />
            <p>Crear publicación</p>
            <p>Login</p>
            <p>Sing Up</p>
          </Link>
        </div>
        {isLogged ? (
          <>
            <Link href={'/profile'} className=" flex gap-1 items-center">
              <Heartred />
              <p>Mis votos</p>
            </Link>
            <div className="flex gap-1 items-center">
              <Link href={'/profile'} className="relative">
                <div>
                  <Circle />
                </div>
                <div className="absolute top-1/4 right-1/4">
                  <Profile />
                </div>
              </Link>
              <Link href={'/profile'}>
                <p>maricruz@gmail.com</p>
              </Link>
              <div className="flex items-center cursor-pointer">
                <Arrow />
              </div>
            </div>
          </>
        ) : (
          <Link href={'/'}></Link>
        )}
      </div>
    </header>
  );
};

export default Header;
