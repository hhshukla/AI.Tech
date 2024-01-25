import { Field, Image, Link, LinkField, RichText, Text } from '@sitecore-jss/sitecore-jss-nextjs';

export interface CardListCarouselData {
  rendering: {
    componentName: string;
  };
  fields: {
    setting: sliderProps[];
    variant: Field<string>;
    cards: CardListCarouselProps[];
    title: {
      value: Field<string>;
    };
    description: {
      value: Field<string>;
    };
    Arrow: Field<boolean>;
  };
}

interface sliderProps {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    Dots: Field<boolean>;
    Arrows: Field<boolean>;
    Infinite: Field<boolean>;
    speed: Field<number>;
    SlidesToShow: Field<number>;
    SlidesToScroll: Field<number>;
  };
}

export interface CardListCarouselProps {
  id: Field<string>;
  url: Field<string>;
  name: Field<string>;
  displayName: Field<string>;
  fields: {
    desktopImage: ImageProps;
    tabletImage: ImageProps;
    mobileImage: ImageProps;
    title: {
      value: Field<Field<string>>;
    };
    description: {
      value: Field<string>;
    };
    CTA: LinkField;
  };
}

export interface ImageProps {
  value: {
    src: Field<string>;
    alt: Field<string>;
    width: Field<string>;
    height: Field<string>;
  };
}

export type CardListDataProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: CardListCarouselData;
};

const CardList = ({ fields }: any) => {
  if (fields === null || fields === undefined) return <></>;

  return (
    <div className="bg-white">
      <div className="container m-auto">
        <div className="p-4">
          {fields?.Setting?.map((data: any, index: number) => (
            <div className="" key={index}>
              <h2 className="text-black">{data?.name}</h2>
              <h2 className="text-black">{data?.displayName}</h2>
              <Text field={fields?.Dots} />
            </div>
          ))}
        </div>
        <div className="md:flex w-full">
          {fields?.cards?.map((card: any, index: any) => (
            <>
              <div className="relative mb-8 hover:rotate-[360deg]	" key={index}>
                <div className="m-4 bg-green-700 p-4 rounded-md h-full" key={index}>
                  <div className="">
                    <Image field={card?.fields?.desktopImage} className="w-full" />
                  </div>
                  <div className="flex flex-col justify-start items-start">
                    <RichText field={card?.fields?.description} className="text-white mt-4" />

                    {card?.fields?.tags?.map((tag: any, index: any) => (
                      <div className="flex  justify-start items-start mt-2" key={index}>
                        <h6 className="text-white  ">{tag?.fields?.tag?.value}</h6>
                      </div>
                    ))}
                    <div className="text-start mt-2">
                      <Link field={card?.fields?.link} className="text-white cursor-pointer" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 mx-4">
                    <Link
                      className="text-white text-xl mt-2 font-semibold bg-black p-2 rounded-md"
                      field={card?.fields?.button}
                    />
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardList;
