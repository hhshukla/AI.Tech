// import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import LinkWrapper from '@/components/helpers/LinkWrapper/LinkWrapper';
import { Field, ImageField, LinkField, Text, Image } from '@sitecore-jss/sitecore-jss-nextjs';
import RichTextA11yWrapper from 'components/helpers/RichTextA11yWrapper/RichTextA11yWrapper';

// Ideally, all this is from generated Typescript code from Sitecore and we're not manually defining types.
interface BannerFields {
  Title: Field<string>;
  ButtonText: LinkField;
  Description: Field<string>;
  Image: ImageField;
  Link: LinkField;
  subText: Field<string>;
  'BackGround-Image': ImageField;
}

export type bannerDataProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: BannerFields;
};

const Banner = ({ fields }: bannerDataProps) => {
  if (fields === null || fields === undefined) return <></>;

  return (
    <div
      data-component="authorable/general/banner"
      data-testid="banner"
      className="bg-[#1363c6] pt-12"
    >
      <div className="container mx-auto">
        <div className="lg:flex justify-between items-center">
          <div className="text-start p-6">
            <Text
              tag="div"
              field={fields?.subText}
              className="cursor-pointer inline-block mb-4 px-4 py-1 border border-[#dee2e6] rounded-full text-sm font-medium text-white"
            />
            <Text
              tag="h3"
              field={fields?.Title}
              className="text-white text-xl leading-[30px] md:text-[50px] md:leading-[60px] font-bold font-mono  mb-6"
            />
            <RichTextA11yWrapper
              field={fields?.Description}
              className="text-white text-base font-normal leading-6 mb-6"
            />
            <LinkWrapper
              field={fields?.Link}
              className="text-[#1363c6] bg-white hover:bg-black hover:text-[#1363c6] cursor-pointer p-[10px]  lg:px-12 lg:py-4  rounded-full font-medium mx-2"
            />
            <LinkWrapper
              field={fields?.ButtonText}
              className="text-[#1363c6] bg-white hover:bg-black hover:text-[#1363c6] cursor-pointer p-[10px]  lg:px-12 lg:py-4  rounded-full font-medium mx-2"
            />
          </div>
          <div>
            <Image field={fields?.Image} />
          </div>
        </div>
      </div>
    </div>
  );
};

// @todo: Figure out how to mock isPageEditing, or if it even matters, in Storybook.
// export default withDatasourceCheck()<BannerProps>(Banner);
export default Banner;
