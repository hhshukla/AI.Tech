// import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import LinkWrapper from '@/components/helpers/LinkWrapper/LinkWrapper';
import RichTextA11yWrapper from '@/components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';
import { Field, ImageField, LinkField, Text, Image } from '@sitecore-jss/sitecore-jss-nextjs';

// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.
interface Fields {
  SubText: Field<string>;
  Title: Field<string>;
  Description: Field<string>;
  EventCTA: LinkField;
  CardList: CardDataProps[];
}
interface CardDataProps {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    Description: Field<string>;
    Title: Field<string>;
    CTALink: LinkField;
    IconImage: ImageField;
  };
}

export type ContentBlockTestimonialProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: Fields;
};

const ContentBlockTestimonial = ({ fields }: ContentBlockTestimonialProps): JSX.Element => {
  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;

  return (
    <div
      className="py-12 bg-white"
      data-component="authorable/general/ContentBlockTestimonial"
      data-testid="ContentBlockTestimonial"
    >
      <div className="container mx-auto">
        <div className="lg:flex justify-between items-center">
          <div className="text-start px-6">
            <Text
              tag="div"
              field={fields?.SubText}
              className="cursor-pointer inline-block mb-4 px-4 py-1 border border-[#dee2e6] rounded-full text-sm font-medium text-[#1363c6]"
            />
            <Text
              tag="h3"
              field={fields?.Title}
              className="text-black text-[28px] font-bold leading-[34px] mb-6"
            />
            <RichTextA11yWrapper
              field={fields?.Description}
              className="text-[#555] text-base font-normal leading-6 mb-4"
            />
            <LinkWrapper
              field={fields?.EventCTA}
              className="text-white bg-[#1363c6] hover:bg-black hover:text-[#1363c6] cursor-pointer px-6 py-[6px] rounded-2xl font-medium"
            />
          </div>
          <div className="mt-12 md:grid md:gap-4 md:grid-cols-2 px-6">
            {fields?.CardList?.map((card, index) => (
              <div key={index} className=" flex justify-center text-center">
                <div className="bg-white  hover:bg-[#1363c6] hover:text-white text-black   cursor-pointer  shadow-lg shadow-black-500/50 pb-6 px-[30px] mt-6 rounded-lg ">
                  <div className="mx-auto my-5 bg-[#f4f7fe] h-[90px] w-[90px] flex justify-center items-center rounded-[50px]">
                    <Image field={card?.fields?.IconImage} className="w-[40px] h-[32px]" />
                  </div>

                  <div className="flex flex-col justify-center items-stretch">
                    <Text
                      tag="h5"
                      field={card?.fields?.Title}
                      className=" mb-4 text-xl font-medium"
                    />
                    <RichTextA11yWrapper
                      field={card?.fields?.Description}
                      className=" mb-4 text-xl font-normal"
                    />
                    <LinkWrapper
                      field={card?.fields?.CTALink}
                      className="mb-4 text-xl font-normal cursor-pointer  px-4 py-[6px]"
                    />
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

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<ContentBlockTestimonialProps>(ContentBlockTestimonial);
export default ContentBlockTestimonial;
