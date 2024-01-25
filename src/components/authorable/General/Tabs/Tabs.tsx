import LinkWrapper from '@/components/helpers/LinkWrapper/LinkWrapper';
import { Field, LinkField, RichText, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import clsx from 'clsx';
import React, { useState } from 'react';

interface tabsDataProps {
  variant: Field<string>;
  tabsBackgroundColor: Field<string>;
  title: Field<string>;
  description: Field<string>;
  tabsData: tabsProps[];
  tabsAlignment: Field<string>;
  roundedTabs: Field<boolean>;
  customTabStyleClasses: Field<string>;
  activeTabStyleClasses: Field<string>;
  defaultTabStyleClasses: Field<string>;
}

interface tabsProps {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    additionField: Field<string>;
    content: Field<string>;
    title: LinkField;
  };
}
export type TabsProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: tabsDataProps;
};
const Tabs = ({ fields }: TabsProps) => {
  const [isOpen, setIsOpen] = useState<string | null>(null);

  const handleClick = (tabName: string) => {
    setIsOpen((prevOpen) => (prevOpen === tabName ? null : tabName));
  };

  return (
    <div
      className={clsx('p-4 ', {
        'bg-white': fields?.variant?.value === 'tabpills',
        'bg-black': fields?.variant?.value === 'default',
      })}
    >
      <div className="container m-auto text-center">
        <div className="mt-5">
          <Text
            tag="h3"
            field={fields?.title}
            className={clsx('text-4xl font-bold  my-4', {
              ' text-black ': fields.variant.value === 'tabpills',
              ' text-white': fields.variant?.value === 'default',
            })}
          />
          <RichText
            field={fields?.description}
            className={clsx('text-xl font-bold  my-4', {
              ' text-black': fields.variant.value === 'tabpills',
              ' text-white': fields.variant?.value === 'default',
            })}
          />
        </div>
        <div
          className={clsx(' md:flex text-center', {
            ' md:justify-between ': fields?.variant?.value === 'tabspills',
            ' flex-col justify-center items-center': fields?.variant?.value === 'default',
          })}
        >
          {fields?.tabsData?.map((tab, index) => (
            <div
              className={clsx('w-full md:w-[350px] ', {
                'border-0 ': fields?.variant?.value === 'tabspills',
                'border-y rounded-md my-2': fields.variant?.value === 'default',
              })}
              key={index}
            >
              <h2
                onClick={() => handleClick(tab?.displayName)}
                className={clsx(
                  'cursor-pointer capitalize  text-xl  py-2  m-2 text-center rounded-md',
                  {
                    'bg-black': fields?.variant?.value === 'tabpills',
                    'bg-transparent': fields?.variant?.value === 'default',
                  }
                )}
              >
                {tab?.displayName}
              </h2>

              {isOpen === tab?.displayName && (
                <>
                  <div className="w-full p-4  my-2 rounded-md text-start">
                    <h3 className=" capitalize my-2">{tab?.name}</h3>
                    <LinkWrapper
                      className={clsx('my-2 ', {
                        'text-black': fields?.variant?.value === 'tabpills',
                        'text-white ': fields?.variant?.value === 'default',
                      })}
                      field={tab?.fields?.title}
                    />
                    <RichText
                      className={clsx('my-2 ', {
                        'text-black': fields?.variant?.value === 'tabpills',
                        'text-white ': fields?.variant?.value === 'default',
                      })}
                      field={tab?.fields?.content}
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
