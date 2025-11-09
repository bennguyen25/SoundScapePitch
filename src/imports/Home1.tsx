import svgPaths from "./svg-136iec6349";
import imgImageBallardCoffeeWorks from "figma:asset/861b9f060934b039c762b25b4593141ebf9851bc.png";
import imgImagePikePlaceMarket from "figma:asset/364ef4b82713f34f395486e8494be5ce01d4b820.png";
import imgImageSeafoodGrill from "figma:asset/30728f1847a76101b847b3c44f2b5ee477e8d8ca.png";

function Heading() {
  return (
    <div className="h-[36.007px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[36px] left-0 not-italic text-[24px] text-nowrap text-white top-[-0.66px] tracking-[0.0703px] whitespace-pre">Hi, Emma!</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24.005px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.8)] text-nowrap top-[-0.99px] tracking-[-0.3125px] whitespace-pre">Sound CU Member</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[64.001px] relative shrink-0 w-[137.811px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.99px] h-[64.001px] items-start relative w-[137.811px]">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[10.66px] size-[15.992px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p26321040} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33271" />
          <path d="M2.66542 4.66449H13.3271" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33271" />
          <path d={svgPaths.pb56fb80} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33271" />
          <path d="M13.3271 11.328H2.66542" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33271" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.1)] grow h-[31.995px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.669px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[31.995px] relative w-full">
        <Icon />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[40.65px] not-italic text-[14px] text-nowrap text-white top-[6.33px] tracking-[-0.1504px] whitespace-pre">Business</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[15.992px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p15b6f900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33271" />
          <path d="M13.9935 7.99626H5.9972" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33271" />
          <path d={svgPaths.pecfc400} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33271" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[31.995px] relative rounded-[8px] shrink-0 w-[37.323px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.669px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[31.995px] items-center justify-center p-[0.669px] relative w-[37.323px]">
        <Icon1 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[31.995px] relative shrink-0 w-[155.757px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7.991px] h-[31.995px] items-start relative w-[155.757px]">
        <Button />
        <Button1 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[64.001px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex h-[64.001px] items-start justify-between relative w-full">
          <Container />
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[19.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_352)" id="Icon">
          <path d="M9.99663 1.66611V18.3272" id="Vector" stroke="var(--stroke-0, #FFD100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66611" />
          <path d={svgPaths.p2ab15500} id="Vector_2" stroke="var(--stroke-0, #FFD100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66611" />
        </g>
        <defs>
          <clipPath id="clip0_1_352">
            <rect fill="white" height="19.9933" width="19.9933" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[19.993px] relative shrink-0 w-[63.866px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.993px] relative w-[63.866px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.8)] text-nowrap top-[0.34px] tracking-[-0.1504px] whitespace-pre">Cashback</p>
      </div>
    </div>
  );
}

function MemberDashboard() {
  return (
    <div className="h-[19.993px] relative shrink-0 w-[121.203px]" data-name="MemberDashboard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7.991px] h-[19.993px] items-center relative w-[121.203px]">
        <Icon2 />
        <Text />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute content-stretch flex h-[16.045px] items-start left-0 top-[4.01px] w-[8.67px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.1504px] whitespace-pre">$</p>
    </div>
  );
}

function MemberDashboard1() {
  return (
    <div className="h-[24.005px] relative shrink-0 w-[121.203px]" data-name="MemberDashboard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24.005px] relative w-[121.203px]">
        <Text1 />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[8.67px] not-italic text-[16px] text-nowrap text-white top-[-0.99px] tracking-[-0.3125px] whitespace-pre">47.50</p>
      </div>
    </div>
  );
}

function MemberDashboard2() {
  return (
    <div className="h-[16.003px] relative shrink-0 w-[121.203px]" data-name="MemberDashboard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.003px] relative w-[121.203px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[0.67px] whitespace-pre">This month</p>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] box-border content-stretch flex flex-col gap-[31.985px] h-[153.292px] items-start left-0 pb-[0.669px] pl-[16.661px] pr-[0.669px] pt-[16.661px] rounded-[14px] top-0 w-[154.525px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.669px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <MemberDashboard />
      <MemberDashboard1 />
      <MemberDashboard2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[19.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_363)" id="Icon">
          <path d={svgPaths.p1842c880} id="Vector" stroke="var(--stroke-0, #FFD100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66611" />
          <path d="M16.6611 1.66611V4.99832" id="Vector_2" stroke="var(--stroke-0, #FFD100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66611" />
          <path d="M18.3272 3.33221H14.995" id="Vector_3" stroke="var(--stroke-0, #FFD100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66611" />
          <path d={svgPaths.p6c8680} id="Vector_4" stroke="var(--stroke-0, #FFD100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66611" />
        </g>
        <defs>
          <clipPath id="clip0_1_363">
            <rect fill="white" height="19.9933" width="19.9933" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[19.993px] relative shrink-0 w-[39.966px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.993px] relative w-[39.966px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.8)] text-nowrap top-[0.34px] tracking-[-0.1504px] whitespace-pre">Points</p>
      </div>
    </div>
  );
}

function MemberDashboard3() {
  return (
    <div className="h-[19.993px] relative shrink-0 w-[121.213px]" data-name="MemberDashboard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7.991px] h-[19.993px] items-center relative w-[121.213px]">
        <Icon3 />
        <Text2 />
      </div>
    </div>
  );
}

function MemberDashboard4() {
  return (
    <div className="h-[24.005px] relative shrink-0 w-[121.213px]" data-name="MemberDashboard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24.005px] relative w-[121.213px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-0.99px] tracking-[-0.3125px] whitespace-pre">1,245</p>
      </div>
    </div>
  );
}

function MemberDashboard5() {
  return (
    <div className="h-[16.003px] relative shrink-0 w-[121.213px]" data-name="MemberDashboard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.003px] relative w-[121.213px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.6)] text-nowrap top-[0.67px] whitespace-pre">+85 this week</p>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] box-border content-stretch flex flex-col gap-[31.985px] h-[153.292px] items-start left-[170.52px] pb-[0.669px] pl-[16.661px] pr-[0.669px] pt-[16.661px] rounded-[14px] top-0 w-[154.535px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.669px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <MemberDashboard3 />
      <MemberDashboard4 />
      <MemberDashboard5 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[153.292px] relative shrink-0 w-full" data-name="Container">
      <Card />
      <Card1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[23.994px] h-[241.288px] items-start relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-gradient-to-b box-border content-stretch flex flex-col from-[#003057] h-[361.279px] items-start left-0 pb-0 pt-[23.994px] px-[23.994px] to-[#0066b3] top-0 w-[373.041px]" data-name="Container">
      <Container4 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[23.994px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[29.17%_8.33%_45.83%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-16.667%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <path d={svgPaths.p3fedae80} id="Vector" stroke="var(--stroke-0, #FFD100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9995" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.17%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-10%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 12">
            <path d={svgPaths.p915cab0} id="Vector" stroke="var(--stroke-0, #FFD100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9995" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#003057] relative rounded-[2.24322e+07px] shrink-0 size-[47.978px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[11.992px] px-[11.992px] relative size-[47.978px]">
        <Icon4 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[24.005px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-0.99px] tracking-[-0.3125px] whitespace-pre">Community Impact</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute h-[19px] left-[0.04px] top-[1.72px] w-[202px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[0.04px] not-italic text-[14px] text-[rgba(0,48,87,0.8)] top-[18.39px] tracking-[-0.1504px] w-[202px]">+$5,432 this month!</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[39.986px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-[rgba(0,48,87,0.8)] top-[0.34px] tracking-[-0.1504px] w-[148px]">Seattle neighborhood:</p>
      <Text3 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[15.992px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_375)" id="Icon">
          <path d={svgPaths.p19511a80} id="Vector" stroke="var(--stroke-0, #003057)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.33271" />
          <path d={svgPaths.p367a6f80} id="Vector_2" stroke="var(--stroke-0, #003057)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.33271" />
          <path d={svgPaths.p299d0580} id="Vector_3" stroke="var(--stroke-0, #003057)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.33271" />
          <path d={svgPaths.p32190030} id="Vector_4" stroke="var(--stroke-0, #003057)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.33271" />
        </g>
        <defs>
          <clipPath id="clip0_1_375">
            <rect fill="white" height="15.9925" width="15.9925" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[19.993px] relative shrink-0 w-[172.147px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.993px] relative w-[172.147px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-[rgba(0,48,87,0.7)] text-nowrap top-[0.34px] tracking-[-0.1504px] whitespace-pre">342 members contributing</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[7.991px] h-[19.993px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon5 />
      <Text4 />
    </div>
  );
}

function Container9() {
  return (
    <div className="basis-0 grow h-[95.966px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.99px] h-[95.966px] items-start relative w-full">
        <Container7 />
        <Paragraph1 />
        <Container8 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[95.966px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex gap-[15.992px] h-[95.966px] items-start relative w-full">
          <Container6 />
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-gradient-to-b box-border content-stretch flex flex-col from-[#ffd100] h-[143.954px] items-start left-[23.99px] pb-0 pt-[23.994px] px-[23.994px] rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] to-[#ffc000] top-[297.29px] w-[325.053px]" data-name="Container">
      <Container10 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[15.99px] size-[15.992px] top-[13.16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_347)" id="Icon">
          <path d={svgPaths.p189dbea0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33271" />
          <path d="M2.0677 4.02079H13.9248" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33271" />
          <path d={svgPaths.pab6cf00} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33271" />
        </g>
        <defs>
          <clipPath id="clip0_1_347">
            <rect fill="white" height="15.9925" width="15.9925" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="basis-0 bg-[#003057] grow h-[39.986px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[39.986px] relative w-full">
        <Icon6 />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[39.98px] not-italic text-[16px] text-nowrap text-white top-[7px] tracking-[-0.3125px] whitespace-pre">Local Deals</p>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-[15.99px] size-[15.992px] top-[13.16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_369)" id="Icon">
          <path d={svgPaths.p64c8300} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33271" />
          <path d={svgPaths.p9ef8280} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33271" />
        </g>
        <defs>
          <clipPath id="clip0_1_369">
            <rect fill="white" height="15.9925" width="15.9925" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="basis-0 grow h-[39.986px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[39.986px] relative w-full">
        <Icon7 />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[39.98px] not-italic text-[#4a5565] text-[16px] text-nowrap top-[7px] tracking-[-0.3125px] whitespace-pre">SoundMap</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[7.991px] h-[47.967px] items-start left-[23.99px] pb-0 pl-[3.99px] pr-[3.98px] pt-[3.99px] rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-[465.24px] w-[325.053px]" data-name="Container">
      <Button2 />
      <Button3 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[26.992px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[27px] left-0 not-italic text-[18px] text-neutral-950 text-nowrap top-[0.67px] tracking-[-0.4395px] whitespace-pre">Deals Near You</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[24.005px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-[-0.99px] tracking-[-0.3125px] whitespace-pre">Based on your interests</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4.578e_-5px] h-[50.996px] items-start left-0 top-0 w-[170.486px]" data-name="Container">
      <Heading1 />
      <Paragraph2 />
    </div>
  );
}

function ImageBallardCoffeeWorks() {
  return (
    <div className="h-[95.997px] relative shrink-0 w-full" data-name="Image (Ballard Coffee Works)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageBallardCoffeeWorks} />
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-gray-200 relative rounded-[10px] shrink-0 size-[95.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-[95.997px]">
        <ImageBallardCoffeeWorks />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[24.005px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-0.99px] tracking-[-0.3125px] whitespace-pre">Ballard Coffee Works</p>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[15.992px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_341)" id="Icon">
          <path d="M6.66355 1.33271V2.66542" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33271" />
          <path d="M9.32897 1.33271V2.66542" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33271" />
          <path d={svgPaths.p1f51de00} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33271" />
          <path d="M3.99813 1.33271V2.66542" id="Vector_4" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33271" />
        </g>
        <defs>
          <clipPath id="clip0_1_341">
            <rect fill="white" height="15.9925" width="15.9925" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[19.993px] relative shrink-0 w-[43.214px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.993px] relative w-[43.214px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-[0.34px] tracking-[-0.1504px] whitespace-pre">Coffee</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[19.993px] relative shrink-0 w-[49.722px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.993px] relative w-[49.722px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[0.17px] not-italic text-[#4a5565] text-[14px] top-[0.16px] tracking-[-0.1504px] w-[66px]">• 0.3 mi</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[7.991px] h-[19.993px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon8 />
      <Text5 />
      <Text6 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.99px] h-[47.988px] items-start left-0 top-0 w-[152.101px]" data-name="Container">
      <Heading2 />
      <Container15 />
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#ffd100] h-[21.33px] relative rounded-[8px] shrink-0 w-[61.766px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[21.33px] items-center justify-center overflow-clip px-[8.669px] py-[2.669px] relative rounded-[inherit] w-[61.766px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#003057] text-[12px] text-nowrap whitespace-pre">15% off</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.669px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge1() {
  return (
    <div className="h-[21.33px] relative rounded-[8px] shrink-0 w-[61.693px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[21.33px] items-center justify-center overflow-clip px-[8.669px] py-[2.669px] relative rounded-[inherit] w-[61.693px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#003057] text-[12px] text-nowrap whitespace-pre">+25 pts</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#003057] border-[0.669px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex gap-[7.991px] h-[21.33px] items-center left-0 top-[59.98px] w-[179.741px]" data-name="Container">
      <Badge />
      <Badge1 />
    </div>
  );
}

function Container18() {
  return (
    <div className="basis-0 grow h-[95.997px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[95.997px] relative w-full">
        <Container16 />
        <Container17 />
      </div>
    </div>
  );
}

function MemberDashboard6() {
  return (
    <div className="h-[127.982px] relative shrink-0 w-[323.715px]" data-name="MemberDashboard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[15.992px] h-[127.982px] items-start pb-0 pt-[15.992px] px-[15.993px] relative w-[323.715px]">
        <Container14 />
        <Container18 />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-white h-[129.319px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[129.319px] items-start p-[0.669px] relative w-full">
          <MemberDashboard6 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.669px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function ImagePikePlaceMarket() {
  return (
    <div className="h-[95.997px] relative shrink-0 w-full" data-name="Image (Pike Place Market)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImagePikePlaceMarket} />
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-gray-200 relative rounded-[10px] shrink-0 size-[95.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-[95.997px]">
        <ImagePikePlaceMarket />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[24.005px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-0.99px] tracking-[-0.3125px] whitespace-pre">Pike Place Market</p>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[15.992px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_336)" id="Icon">
          <path d={svgPaths.p189dbea0} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33271" />
          <path d="M2.0677 4.02079H13.9248" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33271" />
          <path d={svgPaths.pab6cf00} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33271" />
        </g>
        <defs>
          <clipPath id="clip0_1_336">
            <rect fill="white" height="15.9925" width="15.9925" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[19.993px] relative shrink-0 w-[61.474px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.993px] relative w-[61.474px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-[0.34px] tracking-[-0.1504px] whitespace-pre">Shopping</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[19.993px] relative shrink-0 w-[49.565px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.993px] relative w-[49.565px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[-0.09px] not-italic text-[#4a5565] text-[14px] top-[-0.15px] tracking-[-0.1504px] w-[64px]">• 0.5 mi</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex gap-[7.991px] h-[19.993px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon9 />
      <Text7 />
      <Text8 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.99px] h-[47.988px] items-start left-0 top-0 w-[143.014px]" data-name="Container">
      <Heading3 />
      <Container20 />
    </div>
  );
}

function Badge2() {
  return (
    <div className="bg-[#ffd100] h-[21.33px] relative rounded-[8px] shrink-0 w-[100.792px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[21.33px] items-center justify-center overflow-clip px-[8.669px] py-[2.669px] relative rounded-[inherit] w-[100.792px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#003057] text-[12px] text-nowrap whitespace-pre">10% cashback</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.669px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge3() {
  return (
    <div className="h-[21.33px] relative rounded-[8px] shrink-0 w-[62.069px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[21.33px] items-center justify-center overflow-clip px-[8.669px] py-[2.669px] relative rounded-[inherit] w-[62.069px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#003057] text-[12px] text-nowrap whitespace-pre">+50 pts</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#003057] border-[0.669px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex gap-[7.991px] h-[21.33px] items-center left-0 top-[59.98px] w-[179.741px]" data-name="Container">
      <Badge2 />
      <Badge3 />
    </div>
  );
}

function Container23() {
  return (
    <div className="basis-0 grow h-[95.997px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[95.997px] relative w-full">
        <Container21 />
        <Container22 />
      </div>
    </div>
  );
}

function MemberDashboard7() {
  return (
    <div className="h-[127.982px] relative shrink-0 w-[323.715px]" data-name="MemberDashboard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[15.992px] h-[127.982px] items-start pb-0 pt-[15.992px] px-[15.993px] relative w-[323.715px]">
        <Container19 />
        <Container23 />
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-white h-[129.319px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[129.319px] items-start p-[0.669px] relative w-full">
          <MemberDashboard7 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.669px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function ImageSeafoodGrill() {
  return (
    <div className="h-[95.997px] relative shrink-0 w-full" data-name="Image (Seafood Grill)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageSeafoodGrill} />
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-gray-200 relative rounded-[10px] shrink-0 size-[95.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-[95.997px]">
        <ImageSeafoodGrill />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[24.005px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-0.99px] tracking-[-0.3125px] whitespace-pre">Seafood Grill</p>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[15.992px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_331)" id="Icon">
          <path d={svgPaths.p20807c00} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33271" />
          <path d="M4.66449 1.33271V14.6598" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33271" />
          <path d={svgPaths.p166bd900} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33271" />
        </g>
        <defs>
          <clipPath id="clip0_1_331">
            <rect fill="white" height="15.9925" width="15.9925" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[19.993px] relative shrink-0 w-[41.063px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.993px] relative w-[41.063px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-[0.34px] tracking-[-0.1504px] whitespace-pre">Dining</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[19.993px] relative shrink-0 w-[49.816px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.993px] relative w-[49.816px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[0.32px] not-italic text-[#4a5565] text-[14px] top-[0.54px] tracking-[-0.1504px] w-[72px]">• 0.8 mi</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex gap-[7.991px] h-[19.993px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon10 />
      <Text9 />
      <Text10 />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.99px] h-[47.988px] items-start left-0 top-0 w-[122.853px]" data-name="Container">
      <Heading4 />
      <Container25 />
    </div>
  );
}

function Badge4() {
  return (
    <div className="bg-[#ffd100] h-[21.33px] relative rounded-[8px] shrink-0 w-[103.601px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[21.33px] items-center justify-center overflow-clip px-[8.669px] py-[2.669px] relative rounded-[inherit] w-[103.601px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#003057] text-[12px] text-nowrap whitespace-pre">20% off dinner</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.669px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge5() {
  return (
    <div className="h-[21.33px] relative rounded-[8px] shrink-0 w-[61.15px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[21.33px] items-center justify-center overflow-clip px-[8.669px] py-[2.669px] relative rounded-[inherit] w-[61.15px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#003057] text-[12px] text-nowrap whitespace-pre">+75 pts</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#003057] border-[0.669px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex gap-[7.991px] h-[21.33px] items-center left-0 top-[59.98px] w-[179.741px]" data-name="Container">
      <Badge4 />
      <Badge5 />
    </div>
  );
}

function Container28() {
  return (
    <div className="basis-0 grow h-[95.997px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[95.997px] relative w-full">
        <Container26 />
        <Container27 />
      </div>
    </div>
  );
}

function MemberDashboard8() {
  return (
    <div className="h-[127.982px] relative shrink-0 w-[323.715px]" data-name="MemberDashboard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[15.992px] h-[127.982px] items-start pb-0 pt-[15.992px] px-[15.993px] relative w-[323.715px]">
        <Container24 />
        <Container28 />
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-white h-[129.319px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[129.319px] items-start p-[0.669px] relative w-full">
          <MemberDashboard8 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.669px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.992px] h-[419.942px] items-start left-0 top-[66.99px] w-[325.053px]" data-name="Container">
      <Card2 />
      <Card3 />
      <Card4 />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute h-[486.931px] left-[23.99px] top-[537.2px] w-[325.053px]" data-name="Container">
      <Container13 />
      <Container29 />
    </div>
  );
}

function MemberDashboard9() {
  return (
    <div className="bg-gray-50 h-[1056.12px] relative shrink-0 w-full" data-name="MemberDashboard">
      <Container5 />
      <Container11 />
      <Container12 />
      <Container30 />
    </div>
  );
}

function App() {
  return (
    <div className="bg-gray-50 content-stretch flex flex-col h-[1056.12px] items-start relative shrink-0 w-full" data-name="App">
      <MemberDashboard9 />
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Home 1">
      <App />
    </div>
  );
}