import React, { useState } from 'react';
import { Field, ImageField, Text, Image, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import LinkWrapper from '@/components/helpers/LinkWrapper/LinkWrapper';

interface HeaderDataProps {
  LogoContent: Field<string>;
  NavigationLinks: NavigationLinksProps[];
  MenuIcon: ImageField;
}
interface NavigationLinksProps {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    Links: LinkField;
  };
}
export type HeaderProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: HeaderDataProps;
};

const Header = ({ fields }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <div className="bg-[#1363c6] p-4  w-full z-10">
        <div className="container mx-auto">
          <div className="flex  justify-between items-center px-[15px]">
            <div className="">
              <Text
                tag="h3"
                className="text-4xl font-bold text-white"
                field={fields?.LogoContent}
              />
            </div>
            {/* FOR Mobile */}
            <div className="block md:hidden">
              <button onClick={toggleMenu} className="text-white focus:outline-none">
                <Image field={fields?.MenuIcon} className="w-[50px] h-[50px]" />
              </button>
            </div>
            {/* For Desktop */}
            <div className="hidden md:block">
              <ul className="flex">
                {fields?.NavigationLinks?.map((item, index) => (
                  <li key={index} className="cursor-pointer">
                    <LinkWrapper
                      className="text-base text-white font-bold font-mono hover:text-[#1363c6] hover:bg-white p-2 rounded-lg mr-8"
                      field={item?.fields?.Links}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden w-full bg-subColor">
          <ul className="text-center flex flex-col ">
            {fields?.NavigationLinks?.map((item, index) => (
              <li
                className=" cursor-pointer text-base py-2 text-white font-bold font-raleway hover:text-white md:mr-8 bg-[#1363c6] "
                key={index}
              >
                <LinkWrapper
                  className="text-base  font-bold font-raleway hover:text-[#1363c6] mr-8 "
                  field={item?.fields?.Links}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default Header;
