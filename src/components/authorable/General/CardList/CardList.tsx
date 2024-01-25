// import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import LinkWrapper from '@/components/helpers/LinkWrapper/LinkWrapper';
import { Field, ImageField, LinkField, Text, Image } from '@sitecore-jss/sitecore-jss-nextjs';

// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.
interface Fields {
  SubText: Field<string>;
  Title: Field<string>;

  Cards: CardDataProps[];
}
interface CardDataProps {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    Title: Field<string>;
    CTALink: LinkField;
    IconImage: ImageField;
    SubText: Field<string>;
    Image: ImageField;
  };
}

export type CardListProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: Fields;
};

const CardList = ({ fields }: CardListProps): JSX.Element => {
  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;

  return (
    <div
      className="py-12 bg-white"
      data-component="authorable/general/ContentBlockTestimonial"
      data-testid="CardList"
    >
      <div className="container mx-auto">
        <div className="">
          <div className="text-center px-6">
            <Text
              tag="div"
              field={fields?.SubText}
              className="cursor-pointer inline-block mb-4 px-4 py-1 border border-[#dee2e6] rounded-full text-sm font-medium text-[#1363c6]"
            />
            <Text
              tag="h3"
              field={fields?.Title}
              className="text-black text-[36px] font-bold leading-[34px] mb-6 font-mono"
            />
          </div>
          <div className="mt-12 md:flex justify-between items-center px-6">
            {fields?.Cards?.map((card, index) => (
              <div key={index} className=" flex justify-center mx-4">
                <div className="bg-gradient-to-t from-black to-white  cursor-pointer transition-[0.5s] shadow-lg shadow-blue-500/50  mt-6 rounded-xl">
                  <div className="relative">
                    <Image
                      field={card?.fields?.Image}
                      className=" rounded-xl hover:scale-105 transition duration-500 cursor-pointer "
                    />
                    <div className=" absolute bottom-0 p-4 ">
                      <Text
                        tag="div"
                        field={fields?.SubText}
                        className="cursor-pointer inline-block mb-4 px-4 py-1 border border-[#dee2e6] rounded-full text-sm font-medium text-white bg-black  bg-opacity-30"
                      />
                      <Text
                        tag="h5"
                        field={card?.fields?.Title}
                        className="text-white mb-4 text-2xl font-bold font-mono"
                      />

                      <LinkWrapper
                        field={card?.fields?.CTALink}
                        className=" text-white mb-4 text-xl font-normal cursor-pointer"
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

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<CardListProps>(CardList);
export default CardList;
