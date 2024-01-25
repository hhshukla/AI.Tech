import GoogleMaterialSymbol from '@/components/helpers/GoogleMaterialSymbol/GoogleMaterialSymbol';
import { Field, ImageField, LinkField, Image, Text } from '@sitecore-jss/sitecore-jss-nextjs';

// Local
import RichTextA11yWrapper from 'components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';

// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.
interface Fields {
  Title: Field<string>;
  Description: Field<string>;
  SubText: Field<string>;
  Image: ImageField;
  Informations: SocialMediaLinksProps[];
  ServiceLinks: ServicesProps[];
}
interface SocialMediaLinksProps {
  id: string;
  url: string;
  name: string;
  displayName: string;

  fields: {
    IconImage: LinkField;
    Number: Field<number>;
    SubDescription: Field<string>;
  };
}
interface ServicesProps {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    Text: Field<string>;
    IconImage: ImageField;
  };
}

export type ArticleTextProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: Fields;
};

const ArticleImage = ({ fields }: ArticleTextProps): JSX.Element => {
  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;

  return (
    <div
      data-component="authorable/general/ArticleText"
      data-testid="ArticleText"
      className="bg-[#1363c6] pt-5"
    >
      <div>
        <div className="pt-12">
          <div className="container mx-auto">
            <div className=" grid grid-cols-1 md:grid-cols-2 md:gap-6 items-center md:text-start text-center">
              <div className="w-full px-6">
                <Text
                  tag="h2"
                  field={fields?.SubText}
                  className="border border-white rounded-full mb-4 px-4 py-1 inline-block font-medium  cursor-pointer text-sm"
                />

                <Text
                  tag="h2"
                  field={fields?.Title}
                  className="text-[35.075px] md:text-[38px] font-bold leading-[42.09px] md:leading-[45px] mb-6 font-primary text-white"
                />
                <RichTextA11yWrapper
                  field={fields?.Description}
                  editable
                  className="mb-4 text-base font-normal text-white"
                />
                <div className="grid grid-cols-2 gap-4  mt-4">
                  {fields?.ServiceLinks?.map((service, index) => (
                    <div className="mb-4 flex " key={index}>
                      <GoogleMaterialSymbol icon="check" className={'mr-2'} variant={'baseline'} />

                      <Text
                        tag="h6"
                        field={service?.fields?.Text}
                        className="text-white text-lg font-medium"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex  items-center mb-5 ">
                  {fields?.Informations?.map((item, index) => (
                    <div className="bg-white rounded-xl p-4 bg-opacity-10  mx-4" key={index}>
                      <Image
                        field={item?.fields?.IconImage}
                        className=" cursor-pointer w-[50px] h-[50px] flex justify-center items-center mx-auto"
                      />
                      <div className="flex flex-col  text-center">
                        <Text
                          tag="h5"
                          className="text-base font-semibold"
                          field={item?.fields?.SubDescription}
                        />
                        <Text
                          tag="h6"
                          className="text-base font-semibold"
                          field={item?.fields?.Number}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-6">
                <div className=" overflow-hidden mt-12 ">
                  <Image field={fields?.Image} className="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<BannerProps>(Banner);
export default ArticleImage;
