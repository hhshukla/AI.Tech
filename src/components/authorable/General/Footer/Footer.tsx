import LinkWrapper from '@/components/helpers/LinkWrapper/LinkWrapper';
import RichTextA11yWrapper from '@/components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';
import { Field, ImageField, LinkField, Text, Image } from '@sitecore-jss/sitecore-jss-nextjs';
import FontAwesomeIcon from 'components/helpers/FontAwesomeIcon/FontAwesomeIcon';

import React from 'react';
interface Fields {
  LogoContent: Field<string>;
  Description: Field<string>;
  AddressLinks: AddressProps[];
  NavigationLinks: NavigationProps[];
  ServiceLinks: ServiceProps[];
  AddressTitle: Field<string>;
  NavigationTitle: Field<string>;
  ServiceTitle: Field<string>;
  BackgroundImage: ImageField;
}
interface AddressProps {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    Text: Field<string>;
  };
}
interface NavigationProps {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    Text: Field<string>;
  };
}
interface ServiceProps {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    Links: LinkField;
  };
}
export type FooterProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: Fields;
};

const Footer = ({ fields }: FooterProps) => {
  return (
    <div className="bg-[#14183e] relative  py-[120px]">
      <div className="absolute top-0 left-0 right-0 bottom-0">
        <Image field={fields?.BackgroundImage} className="w-full h-full lg:h-[450px]" />
      </div>
      <div className="container mx-auto px-[25px]">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-4 lg:gap-6">
          <div>
            <Text
              tag="h3"
              className="text-4xl font-bold text-white mb-4 font-mono"
              field={fields?.LogoContent}
            />
            <RichTextA11yWrapper
              className="text-lg font-semibold text-white mb-4 font-mono"
              field={fields?.Description}
            />
          </div>
          <div>
            <Text
              tag="h3"
              field={fields?.AddressTitle}
              className="text-white text-[28px] font-bold leading-[34px] mb-6 font-mono"
            />
            {fields?.AddressLinks?.map((address, index) => (
              <div key={index}>
                <Text
                  tag="li"
                  field={address?.fields?.Text}
                  className="text-base text-white mb-4"
                />
              </div>
            ))}
          </div>
          <div>
            <Text
              tag="h3"
              field={fields?.NavigationTitle}
              className="text-white text-[28px] font-bold leading-[34px] mb-6 font-mono"
            />
            {fields?.NavigationLinks?.map((link, index) => (
              <div key={index}>
                <Text tag="li" field={link?.fields?.Text} className="text-base text-white mb-4" />
              </div>
            ))}
          </div>
          <div>
            <Text
              tag="h3"
              field={fields?.ServiceTitle}
              className="text-white text-[28px] font-bold leading-[34px] mb-6 font-mono"
            />
            {fields?.ServiceLinks?.map((services, index) => (
              <div key={index} className="flex text-center items-center">
                <FontAwesomeIcon icon="angle-right" className="w-[20px] h-[20px]" />

                <LinkWrapper
                  field={services?.fields?.Links}
                  className="text-base text-white my-2"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
