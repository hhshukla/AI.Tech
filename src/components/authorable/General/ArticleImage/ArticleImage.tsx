// import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import GoogleMaterialSymbol from '@/components/helpers/GoogleMaterialSymbol/GoogleMaterialSymbol';
import LinkWrapper from '@/components/helpers/LinkWrapper/LinkWrapper';
import { Field, ImageField, LinkField, Image, Text } from '@sitecore-jss/sitecore-jss-nextjs';

// Local
import RichTextA11yWrapper from 'components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';

// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.
interface Fields {
  Title: Field<string>;
  Description: Field<string>;
  CTAbutton: LinkField;
  subText: Field<string>;
  Image: ImageField;
  'Background-Image': ImageField;
  SocialMediaLinks: SocialMediaLinksProps[];
  Services: ServicesProps[];
}
interface SocialMediaLinksProps {
  id: string;
  url: string;
  name: string;
  displayName: string;

  fields: {
    IconImage: LinkField;
    EventCTA: LinkField;
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

export type ArticleImageProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: Fields;
};

const ArticleImage = ({ fields }: ArticleImageProps): JSX.Element => {
  // Fail out if fields aren't present
  if (fields === null || fields === undefined) return <></>;

  return (
    <div
      data-component="authorable/general/ArticleImage"
      data-testid="ArticleImage"
      className="bg-white pt-5"
    >
      <div>
        <div className="py-12">
          <div className="container m-auto">
            <div className=" grid grid-cols-1 md:grid-cols-2 md:gap-6 items-center md:text-start text-center">
              <div className="px-6  w-full">
                <div className="relative overflow-hidden mt-12 ">
                  <Image field={fields?.Image} className="" />
                  <div className="absolute top-0 left-0">
                    <Image field={fields['Background-Image']} />
                  </div>
                </div>
              </div>

              <div className="w-full px-6">
                <Text
                  tag="h2"
                  field={fields?.subText}
                  className="border border-white rounded-full mb-4 px-4 py-1 inline-block font-medium  cursor-pointer text-sm"
                />

                <Text
                  tag="h2"
                  field={fields?.Title}
                  className="text-[35.075px] md:text-[37px] font-bold leading-[45px] md:leading-[45px] mb-6 font-primary text-black"
                />
                <RichTextA11yWrapper
                  field={fields?.Description}
                  editable
                  className="mb-4 text-base font-normal text-[#555]"
                />
                <div className="grid grid-cols-2 gap-4  mt-4">
                  {fields?.Services?.map((service, index) => (
                    <div className="mb-4 flex " key={index}>
                      <GoogleMaterialSymbol icon="check" className={'mr-2'} variant={'baseline'} />

                      <Text
                        tag="h6"
                        field={service?.fields?.Text}
                        className="text-black text-lg font-medium"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center mb-5">
                  <LinkWrapper
                    field={fields?.CTAbutton}
                    className="text-center font-semibold py-[6px] px-3  bg-[#1363c6] text-white lg:py-4 lg:px-12 mr-4 border border-white rounded-full hover:bg-white hover:text-[#1363c6]"
                  />
                  {fields?.SocialMediaLinks?.map((item, index) => (
                    <div className="" key={index}>
                      <Image
                        field={item?.fields?.IconImage}
                        className="bg-[#1363c6] rounded-full cursor-pointer w-[50px] h-[50px]"
                      />
                    </div>
                  ))}
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
