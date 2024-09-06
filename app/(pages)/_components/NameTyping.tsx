'use client';
import { TypeAnimation } from 'react-type-animation';

export const NameTyping = () => {
  return (
    <TypeAnimation
      className="text-[128px] font-semibold xs:text-5xl xs:pb-[84px] text-center text-nowrap xs:pl-[20px]"
      sequence={[
        'Sauvikesh Lal',
        1000, // wait 1s, incase I add more ??
      ]}
      wrapper="h1"
      speed={20}
      repeat={Infinity}
      cursor={true}
    />
  );
};
