import { SectionHeader } from "../Titles";
import { LayoutCenterWithoutMargins } from ".";

const IntroLayout = ({
  imgUrl,
  titles = [],
  SubTitleJSX,
  isCentered = false,
  CenteredBottom = "",
  isLeftAligned = false,
  LeftAlignedBottom,
}) => {
  const bgDynamic =
    "break-normal sm:bg-no-repeat sm:bg-top sm:bg-contain sm:bg-lehrkrafte_tablet xl:bg-lehrkrafte_desktop";

  return (
    <div className="xl:mt-16">
      <div className={"flex md:h-60vh lg:h-50vh xl:h-70vh"}>
        <div
          className={`hidden md:flex md:w-1/2 xl:w-1/3 xl:h-full xl:justify-center ${bgDynamic}`}
        >
          <img src={imgUrl} className="object-contain"></img>
        </div>
        <div className="w-full md:w-1/2 xl:w-2/3">
          <div className="xl:mt-16 xl:pb-10">
            {titles?.map(title => (
              <SectionHeader
                header={title}
                key={title}
                hasPadding={false}
                extraClass="pr-5 xl:pr-0"
              />
            ))}
          </div>
          <SubTitleJSX />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="xl:w-1/3">{isCentered && <CenteredBottom />}</div>
      </div>
      <LayoutCenterWithoutMargins>
        {isLeftAligned && <LeftAlignedBottom />}
      </LayoutCenterWithoutMargins>
    </div>
  );
};

export default IntroLayout;
