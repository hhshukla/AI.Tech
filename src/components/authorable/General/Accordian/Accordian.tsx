import RichTextA11yWrapper from '@/components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';
import { Field, ImageField, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { useEffect, useRef, useState } from 'react';
import FontAwesomeIcon from 'components/helpers/FontAwesomeIcon/FontAwesomeIcon';

interface accordionDataProps {
  variant: Field<string>;
  subText: Field<string>;
  IconImage: ImageField;
  Title: Field<string>;
  Description: Field<string>;
  AccordianData: contentDataProps[];
}

interface contentDataProps {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    Title: Field<string>;
    Description: Field<string>;
  };
}

export type accordionProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: accordionDataProps;
  showTopBorder: boolean;
};

const Accordion = ({ fields }: accordionProps) => {
  const [openAuthors, setOpenAuthors] = useState<string[]>([]);
  const [height, setHeight] = useState<number | null | undefined>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (contentRef?.current) {
      contentRef?.current?.scrollHeight && setHeight(contentRef.current.scrollHeight);
    }
  }, [openAuthors]);
  const isAccordionOpen = (authorId: string) => openAuthors.includes(authorId);

  const toggleAccordion = (authorId: string) => {
    if (isAccordionOpen(authorId)) {
      setOpenAuthors(openAuthors?.filter((id) => id !== authorId));
    } else {
      setOpenAuthors([...openAuthors, authorId]);
    }
  };
  return (
    <div className="bg-white py-5">
      <div className="container mx-auto">
        <div className="border-gray-light cursor-pointer">
          <div className="">
            <Text
              tag="div"
              field={fields?.subText}
              className="cursor-pointer inline-block mb-4 px-4 py-1 border border-[#dee2e6] rounded-full text-sm font-medium text-[#1363c6]"
            />
            <Text
              tag="h3"
              field={fields?.Title}
              className="text-black text-[50px] leading-[60px] font-bold font-mono  mb-6"
            />
          </div>
          <div>
            {fields?.AccordianData?.map((content, index) => (
              <div key={index} className="mb-5 text-black">
                <div
                  onClick={() => toggleAccordion(content?.id)}
                  className="flex justify-between items-center w-full h-[56px] border border-white bg-[#f4f7fe] py-4 px-5 rounded-t-xl hover:bg-[#1363c6] hover:text-white"
                >
                  <Text
                    className=" text-base leading-6  pr-[15px]  capitalize "
                    tag="p"
                    field={content?.fields?.Title}
                  />
                  {isAccordionOpen(content?.id) ? (
                    <FontAwesomeIcon icon="chevron-up" className=" text-base" />
                  ) : (
                    <FontAwesomeIcon icon="chevron-down" className=" text-base" />
                  )}
                </div>
                <div
                  style={{
                    maxHeight: isAccordionOpen(content?.id) ? `${height}px` : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.2s ease',
                  }}
                  className={`flex justify-between items-center w-full overflow-hidden`}
                  id={`control_${content?.id}`}
                  aria-controls={`body_${content?.id}`}
                >
                  <div>
                    <div
                      className="text-black flex justify-between duration-200 overflow-hidden mt-4"
                      ref={contentRef}
                      style={{
                        maxHeight: isAccordionOpen(content?.id) ? `${height}px` : '0',
                        overflow: 'hidden',
                      }}
                    >
                      <RichTextA11yWrapper
                        field={content?.fields?.Description}
                        className="[&_p]:pb-[31.5px] [&_p]:text-gray-dark [&_p]:text-sm [&_p]:leading-24 text-[#555]  leading-24 font-primary text-lg font-normal"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
