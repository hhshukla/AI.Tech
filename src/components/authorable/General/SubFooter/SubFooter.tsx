import LinkWrapper from '@/components/helpers/LinkWrapper/LinkWrapper';
import RichTextA11yWrapper from '@/components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';
import { Field, ImageField, LinkField, Text, Image } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';
interface Fields {
  SubText: Field<string>;
  Title: Field<string>;
  Description: Field<string>;
  EventCTA: LinkField;
  Image: ImageField;
  CTAbutton: LinkField;
}
export type FooterProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: Fields;
};

const Footer = ({ fields }: FooterProps) => {
  return (
    <div className="bg-[#1363c6]  py-[120px]">
      <div className="">
        <div className=" grid grid-cols-1 md:grid-cols-2 md:gap-4">
          <div className="">
            <Image field={fields?.Image} />
          </div>
          <div className="text-start p-6 w-full ">
            <Text
              tag="h3"
              field={fields?.SubText}
              className="cursor-pointer inline-block mb-4 px-4 py-1 border border-[#dee2e6] rounded-full text-sm font-medium text-white"
            />
            <Text
              tag="h3"
              field={fields?.Title}
              className="text-white text-[28px] font-bold leading-[34px] mb-6 font-mono"
            />
            <RichTextA11yWrapper
              field={fields?.Description}
              className="text-white text-base font-medium leading-6 mb-4 font-mono"
            />
            <div className="mt-6">
              <LinkWrapper
                field={fields?.EventCTA}
                className=" text-[#1363c6] bg-white hover:bg-black hover:text-[#1363c6] cursor-pointer p-2 rounded-2xl   font-medium"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
