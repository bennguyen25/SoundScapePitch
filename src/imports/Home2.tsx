import svgPaths from "./svg-i0jntky8wn";

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
    <div className="absolute h-[19px] left-[0.04px] top-[22.72px] w-[202px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-[rgba(0,48,87,0.8)] top-[-1px] tracking-[-0.1504px] w-[202px]">+$5,432 this month!</p>
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
        <g clipPath="url(#clip0_1_1198)" id="Icon">
          <path d={svgPaths.p19511a80} id="Vector" stroke="var(--stroke-0, #003057)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.33271" />
          <path d={svgPaths.p125f140} id="Vector_2" stroke="var(--stroke-0, #003057)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.33271" />
          <path d={svgPaths.p299d0580} id="Vector_3" stroke="var(--stroke-0, #003057)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.33271" />
          <path d={svgPaths.p32190030} id="Vector_4" stroke="var(--stroke-0, #003057)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.33271" />
        </g>
        <defs>
          <clipPath id="clip0_1_1198">
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
        <g clipPath="url(#clip0_1_1217)" id="Icon">
          <path d={svgPaths.p189dbea0} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33271" />
          <path d="M2.0677 4.02079H13.9248" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33271" />
          <path d={svgPaths.pab6cf00} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33271" />
        </g>
        <defs>
          <clipPath id="clip0_1_1217">
            <rect fill="white" height="15.9925" width="15.9925" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="basis-0 grow h-[39.986px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[39.986px] relative w-full">
        <Icon6 />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[39.98px] not-italic text-[#4a5565] text-[16px] text-nowrap top-[7px] tracking-[-0.3125px] whitespace-pre">Local Deals</p>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-[15.99px] size-[15.992px] top-[13.16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1189)" id="Icon">
          <path d={svgPaths.p64c8300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33271" />
          <path d={svgPaths.p9ef8280} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33271" />
        </g>
        <defs>
          <clipPath id="clip0_1_1189">
            <rect fill="white" height="15.9925" width="15.9925" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="basis-0 bg-[#003057] grow h-[39.986px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[39.986px] relative w-full">
        <Icon7 />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[39.98px] not-italic text-[16px] text-nowrap text-white top-[7px] tracking-[-0.3125px] whitespace-pre">SoundMap</p>
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
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[27px] left-0 not-italic text-[18px] text-neutral-950 text-nowrap top-[0.67px] tracking-[-0.4395px] whitespace-pre">Your SoundMap</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[24.005px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-[-0.99px] tracking-[-0.3125px] whitespace-pre">Explore partnered businesses in your area</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col h-[50.996px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Paragraph2 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-[10.66px] size-[15.992px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1214)" id="Icon">
          <path d={svgPaths.p8f93700} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33271" />
        </g>
        <defs>
          <clipPath id="clip0_1_1214">
            <rect fill="white" height="15.9925" width="15.9925" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white h-[31.995px] relative rounded-[8px] shrink-0 w-[92.101px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.669px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[31.995px] relative w-[92.101px]">
        <Icon8 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[40.65px] not-italic text-[14px] text-neutral-950 text-nowrap top-[6.33px] tracking-[-0.1504px] whitespace-pre">Filters</p>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-[10.66px] size-[15.992px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1185)" id="Icon">
          <path d={svgPaths.p3ce3ed70} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33271" />
          <path d={svgPaths.p307e9a80} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33271" />
        </g>
        <defs>
          <clipPath id="clip0_1_1185">
            <rect fill="white" height="15.9925" width="15.9925" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-white h-[31.995px] relative rounded-[8px] shrink-0 w-[105.701px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.669px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[31.995px] relative w-[105.701px]">
        <Icon9 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[40.65px] not-italic text-[14px] text-neutral-950 text-nowrap top-[6.33px] tracking-[-0.1504px] whitespace-pre">AR View</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[19.993px] relative shrink-0 w-[54.652px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.993px] relative w-[54.652px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.34px] tracking-[-0.1504px] w-[55px]">8 places</p>
      </div>
    </div>
  );
}

function SoundMap() {
  return (
    <div className="h-[31.995px] relative shrink-0 w-[291.73px]" data-name="SoundMap">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[11.992px] h-[31.995px] items-center relative w-[291.73px]">
        <Button4 />
        <Button5 />
        <Container14 />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-white h-[77.309px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.669px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[77.309px] items-start pb-[0.669px] pl-[16.661px] pr-[0.669px] pt-[16.661px] relative w-full">
          <SoundMap />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-[saddlebrown] relative rounded-[2.24322e+07px] shrink-0 size-[11.992px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[11.992px]" />
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[19.993px] relative shrink-0 w-[37.083px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.993px] relative w-[37.083px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.8)] text-nowrap top-[0.34px] tracking-[-0.1504px] whitespace-pre">Cafes</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex gap-[7.991px] h-[19.993px] items-center left-0 top-0 w-[57.065px]" data-name="Container">
      <Container15 />
      <Text5 />
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-emerald-600 relative rounded-[2.24322e+07px] shrink-0 size-[11.992px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[11.992px]" />
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[19.993px] relative shrink-0 w-[51.78px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.993px] relative w-[51.78px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.8)] text-nowrap top-[0.34px] tracking-[-0.1504px] whitespace-pre">Markets</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex gap-[7.991px] h-[19.993px] items-center left-[69.06px] top-0 w-[71.763px]" data-name="Container">
      <Container17 />
      <Text6 />
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-pink-600 relative rounded-[2.24322e+07px] shrink-0 size-[11.992px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[11.992px]" />
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[19.993px] relative shrink-0 w-[57.431px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.993px] relative w-[57.431px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.8)] text-nowrap top-[0.34px] tracking-[-0.1504px] whitespace-pre">Wellness</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex gap-[7.991px] h-[19.993px] items-center left-[152.81px] top-0 w-[77.414px]" data-name="Container">
      <Container19 />
      <Text7 />
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-red-600 relative rounded-[2.24322e+07px] shrink-0 size-[11.992px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[11.992px]" />
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[19.993px] relative shrink-0 w-[41.063px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.993px] relative w-[41.063px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.8)] text-nowrap top-[0.34px] tracking-[-0.1504px] whitespace-pre">Dining</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex gap-[7.991px] h-[19.993px] items-center left-0 top-[31.98px] w-[61.045px]" data-name="Container">
      <Container21 />
      <Text8 />
    </div>
  );
}

function SoundMap1() {
  return (
    <div className="absolute h-[51.978px] left-[15.99px] top-[405.98px] w-[293.067px]" data-name="SoundMap">
      <Container16 />
      <Container18 />
      <Container20 />
      <Container22 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute h-[349.997px] left-0 top-0 w-[293.067px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 294 350">
        <g clipPath="url(#clip0_1_1182)" id="Icon" opacity="0.1">
          <g id="Vector"></g>
        </g>
        <defs>
          <clipPath id="clip0_1_1182">
            <rect fill="white" height="349.997" width="293.067" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute h-[349.997px] left-0 top-0 w-[293.067px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 294 350">
        <g id="Icon">
          <path d={svgPaths.p265e9600} id="Vector" stroke="var(--stroke-0, #FFD100)" strokeDasharray="1 1" strokeOpacity="0.2" strokeWidth="2" />
          <path d={svgPaths.p2630ea40} id="Vector_2" stroke="var(--stroke-0, #FFD100)" strokeDasharray="1 1" strokeOpacity="0.2" strokeWidth="2" />
          <path d={svgPaths.p26a274c0} id="Vector_3" stroke="var(--stroke-0, #FFD100)" strokeDasharray="1 1" strokeOpacity="0.2" strokeWidth="2" />
          <path d={svgPaths.p30b73860} id="Vector_4" stroke="var(--stroke-0, #FFD100)" strokeDasharray="1 1" strokeOpacity="0.2" strokeWidth="2" />
          <path d={svgPaths.p1d061a00} id="Vector_5" stroke="var(--stroke-0, #FFD100)" strokeDasharray="1 1" strokeOpacity="0.2" strokeWidth="2" />
          <path d={svgPaths.p137f0200} id="Vector_6" stroke="var(--stroke-0, #FFD100)" strokeDasharray="1 1" strokeOpacity="0.2" strokeWidth="2" />
          <path d={svgPaths.pb822d68} id="Vector_7" stroke="var(--stroke-0, #FFD100)" strokeDasharray="1 1" strokeOpacity="0.2" strokeWidth="2" />
          <path d={svgPaths.p6febfe0} id="Vector_8" stroke="var(--stroke-0, #FFD100)" strokeDasharray="1 1" strokeOpacity="0.2" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container23() {
  return <div className="absolute bg-[#ffd100] left-[81.01px] opacity-[0.105] rounded-[2.24322e+07px] size-[59.344px] top-[95.52px]" data-name="Container" />;
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[19.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_1176)" id="Icon">
          <path d="M8.33053 1.66611V3.33221" id="Vector" stroke="var(--stroke-0, #FFD100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66611" />
          <path d="M11.6627 1.66611V3.33221" id="Vector_2" stroke="var(--stroke-0, #FFD100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66611" />
          <path d={svgPaths.p5073dc0} id="Vector_3" stroke="var(--stroke-0, #FFD100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66611" />
          <path d="M4.99832 1.66611V3.33221" id="Vector_4" stroke="var(--stroke-0, #FFD100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66611" />
        </g>
        <defs>
          <clipPath id="clip0_1_1176">
            <rect fill="white" height="19.9933" width="19.9933" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SoundMap2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] box-border content-stretch flex items-center justify-center left-0 pl-[1.337px] pr-[1.348px] py-[1.337px] rounded-[2.24322e+07px] size-[39.997px] top-0" data-name="SoundMap">
      <div aria-hidden="true" className="absolute border-[1.337px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[2.24322e+07px]" />
      <Icon12 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute bg-[#fb2c36] content-stretch flex items-center justify-center left-[23.99px] rounded-[2.24322e+07px] size-[19.993px] top-[-3.99px]" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">2</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute left-[91.01px] size-[39.997px] top-[105.52px]" data-name="Button">
      <SoundMap2 />
      <Container24 />
    </div>
  );
}

function Container25() {
  return <div className="absolute bg-[#ffd100] left-[-18.37px] opacity-[0.017] rounded-[2.24322e+07px] size-[56.743px] top-[-18.37px]" data-name="Container" />;
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[19.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_1171)" id="Icon">
          <path d={svgPaths.p21249300} id="Vector" stroke="var(--stroke-0, #FFD100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66611" />
          <path d="M2.58496 5.02664H17.4083" id="Vector_2" stroke="var(--stroke-0, #FFD100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66611" />
          <path d={svgPaths.p2d46f380} id="Vector_3" stroke="var(--stroke-0, #FFD100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66611" />
        </g>
        <defs>
          <clipPath id="clip0_1_1171">
            <rect fill="white" height="19.9933" width="19.9933" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SoundMap3() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] box-border content-stretch flex items-center justify-center left-0 pl-[1.337px] pr-[1.348px] py-[1.337px] rounded-[2.24322e+07px] size-[39.997px] top-0" data-name="SoundMap">
      <div aria-hidden="true" className="absolute border-[1.337px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[2.24322e+07px]" />
      <Icon13 />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute bg-[#fb2c36] content-stretch flex items-center justify-center left-[23.99px] rounded-[2.24322e+07px] size-[19.993px] top-[-3.99px]" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">1</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute left-[215.01px] size-[39.997px] top-[152.52px]" data-name="Button">
      <Container25 />
      <SoundMap3 />
      <Container26 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[19.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_1168)" id="Icon">
          <path d={svgPaths.p3fe39780} id="Vector" stroke="var(--stroke-0, #FFD100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66611" />
        </g>
        <defs>
          <clipPath id="clip0_1_1168">
            <rect fill="white" height="19.9933" width="19.9933" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SoundMap4() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] box-border content-stretch flex items-center justify-center left-0 pl-[1.337px] pr-[1.348px] py-[1.337px] rounded-[2.24322e+07px] size-[39.997px] top-0" data-name="SoundMap">
      <div aria-hidden="true" className="absolute border-[1.337px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[2.24322e+07px]" />
      <Icon14 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute bg-[#fb2c36] content-stretch flex items-center justify-center left-[23.99px] rounded-[2.24322e+07px] size-[19.993px] top-[-3.99px]" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">1</p>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute left-[61.01px] size-[39.997px] top-[202.52px]" data-name="Button">
      <SoundMap4 />
      <Container27 />
    </div>
  );
}

function Container28() {
  return <div className="absolute bg-[#ffd100] left-[55.01px] opacity-[0.151] rounded-[2.24322e+07px] size-[52.783px] top-[196.52px]" data-name="Container" />;
}

function Container29() {
  return <div className="absolute bg-[#ffd100] left-[157.01px] opacity-[0.295] rounded-[2.24322e+07px] size-[47.808px] top-[240.52px]" data-name="Container" />;
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[19.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_1163)" id="Icon">
          <path d={svgPaths.p8e7c400} id="Vector" stroke="var(--stroke-0, #FFD100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66611" />
          <path d="M5.83137 1.66611V18.3272" id="Vector_2" stroke="var(--stroke-0, #FFD100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66611" />
          <path d={svgPaths.pa232300} id="Vector_3" stroke="var(--stroke-0, #FFD100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66611" />
        </g>
        <defs>
          <clipPath id="clip0_1_1163">
            <rect fill="white" height="19.9933" width="19.9933" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SoundMap5() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] box-border content-stretch flex items-center justify-center left-0 pl-[1.337px] pr-[1.347px] py-[1.337px] rounded-[2.24322e+07px] size-[39.997px] top-0" data-name="SoundMap">
      <div aria-hidden="true" className="absolute border-[1.337px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[2.24322e+07px]" />
      <Icon15 />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute bg-[#fb2c36] content-stretch flex items-center justify-center left-[23.99px] rounded-[2.24322e+07px] size-[19.993px] top-[-3.99px]" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">3</p>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute left-[161.18px] size-[39.997px] top-[245px]" data-name="Button">
      <SoundMap5 />
      <Container30 />
    </div>
  );
}

function Container31() {
  return <div className="absolute bg-[#ffd100] left-[-10.96px] opacity-[0.452] rounded-[2.24322e+07px] size-[41.928px] top-[-10.96px]" data-name="Container" />;
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[19.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_1176)" id="Icon">
          <path d="M8.33053 1.66611V3.33221" id="Vector" stroke="var(--stroke-0, #FFD100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66611" />
          <path d="M11.6627 1.66611V3.33221" id="Vector_2" stroke="var(--stroke-0, #FFD100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66611" />
          <path d={svgPaths.p5073dc0} id="Vector_3" stroke="var(--stroke-0, #FFD100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66611" />
          <path d="M4.99832 1.66611V3.33221" id="Vector_4" stroke="var(--stroke-0, #FFD100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66611" />
        </g>
        <defs>
          <clipPath id="clip0_1_1176">
            <rect fill="white" height="19.9933" width="19.9933" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SoundMap6() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] box-border content-stretch flex items-center justify-center left-0 pl-[1.337px] pr-[1.347px] py-[1.337px] rounded-[2.24322e+07px] size-[39.997px] top-0" data-name="SoundMap">
      <div aria-hidden="true" className="absolute border-[1.337px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[2.24322e+07px]" />
      <Icon16 />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute bg-[#fb2c36] content-stretch flex items-center justify-center left-[23.99px] rounded-[2.24322e+07px] size-[19.993px] top-[-3.99px]" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">1</p>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute left-[205.15px] size-[39.997px] top-[104.99px]" data-name="Button">
      <Container31 />
      <SoundMap6 />
      <Container32 />
    </div>
  );
}

function Container33() {
  return <div className="absolute bg-[#ffd100] left-[211.01px] opacity-[0.453] rounded-[2.24322e+07px] size-[43.249px] top-[207.52px]" data-name="Container" />;
}

function Container34() {
  return <div className="absolute bg-[#ffd100] left-[85.01px] opacity-[0.491] rounded-[2.24322e+07px] size-[40.648px] top-[152.52px]" data-name="Container" />;
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[19.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_1168)" id="Icon">
          <path d={svgPaths.p3fe39780} id="Vector" stroke="var(--stroke-0, #FFD100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66611" />
        </g>
        <defs>
          <clipPath id="clip0_1_1168">
            <rect fill="white" height="19.9933" width="19.9933" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SoundMap7() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] box-border content-stretch flex items-center justify-center left-0 pl-[1.337px] pr-[1.347px] py-[1.337px] rounded-[2.24322e+07px] size-[39.997px] top-0" data-name="SoundMap">
      <div aria-hidden="true" className="absolute border-[1.337px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[2.24322e+07px]" />
      <Icon17 />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute bg-[#fb2c36] content-stretch flex items-center justify-center left-[23.99px] rounded-[2.24322e+07px] size-[19.993px] top-[-3.99px]" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">2</p>
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute left-[85.01px] size-[39.997px] top-[152.52px]" data-name="Button">
      <SoundMap7 />
      <Container35 />
    </div>
  );
}

function Container36() {
  return <div className="absolute bg-[#ffd100] left-[143.01px] opacity-[0.392] rounded-[2.24322e+07px] size-[47.21px] top-[135.52px]" data-name="Container" />;
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[19.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_1163)" id="Icon">
          <path d={svgPaths.p8e7c400} id="Vector" stroke="var(--stroke-0, #FFD100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66611" />
          <path d="M5.83137 1.66611V18.3272" id="Vector_2" stroke="var(--stroke-0, #FFD100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66611" />
          <path d={svgPaths.pa232300} id="Vector_3" stroke="var(--stroke-0, #FFD100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66611" />
        </g>
        <defs>
          <clipPath id="clip0_1_1163">
            <rect fill="white" height="19.9933" width="19.9933" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SoundMap8() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] box-border content-stretch flex items-center justify-center left-0 pl-[1.337px] pr-[1.348px] py-[1.337px] rounded-[2.24322e+07px] size-[39.997px] top-0" data-name="SoundMap">
      <div aria-hidden="true" className="absolute border-[1.337px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[2.24322e+07px]" />
      <Icon18 />
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute bg-[#fb2c36] content-stretch flex items-center justify-center left-[23.99px] rounded-[2.24322e+07px] size-[19.993px] top-[-3.99px]" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">1</p>
    </div>
  );
}

function Button12() {
  return (
    <div className="absolute left-[213.01px] size-[39.997px] top-[209.52px]" data-name="Button">
      <SoundMap8 />
      <Container37 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[19.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_1193)" id="Icon">
          <path d={svgPaths.p3f24b1e0} id="Vector" stroke="var(--stroke-0, #FFD100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66611" />
          <path d="M2.58496 5.02666H17.4083" id="Vector_2" stroke="var(--stroke-0, #FFD100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66611" />
          <path d={svgPaths.p16a44800} id="Vector_3" stroke="var(--stroke-0, #FFD100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66611" />
        </g>
        <defs>
          <clipPath id="clip0_1_1193">
            <rect fill="white" height="19.9933" width="19.9933" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SoundMap9() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] box-border content-stretch flex items-center justify-center left-0 pl-[1.337px] pr-[1.347px] py-[1.337px] rounded-[2.24322e+07px] size-[39.997px] top-0" data-name="SoundMap">
      <div aria-hidden="true" className="absolute border-[1.337px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[2.24322e+07px]" />
      <Icon19 />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute bg-[#fb2c36] content-stretch flex items-center justify-center left-[23.99px] rounded-[2.24322e+07px] size-[19.993px] top-[-3.99px]" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">4</p>
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute left-[146.53px] size-[39.997px] top-[140px]" data-name="Button">
      <SoundMap9 />
      <Container38 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[17.528px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p18881700} id="Vector" stroke="var(--stroke-0, #FFD100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.46065" />
          <path d={svgPaths.p14fb0180} id="Vector_2" stroke="var(--stroke-0, #FFD100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.46065" />
        </g>
      </svg>
    </div>
  );
}

function SoundMap10() {
  return (
    <div className="basis-0 grow h-[21.913px] min-h-px min-w-px relative shrink-0" data-name="SoundMap">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21.913px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-nowrap text-white top-[0.47px] tracking-[-0.1504px] whitespace-pre">Seattle</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] box-border content-stretch flex gap-[8.758px] h-[39.429px] items-center left-[11.52px] px-[13.143px] py-0 rounded-[10px] top-[296.3px] w-[102.225px]" data-name="Container">
      <Icon20 />
      <SoundMap10 />
    </div>
  );
}

function SoundMap11() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] h-[349.997px] left-[15.99px] overflow-clip rounded-[14px] top-[15.99px] w-[293.067px]" data-name="SoundMap">
      <Icon10 />
      <Icon11 />
      <Container23 />
      <Button6 />
      <Button7 />
      <Button8 />
      <Container28 />
      <Container29 />
      <Button9 />
      <Button10 />
      <Container33 />
      <Container34 />
      <Button11 />
      <Container36 />
      <Button12 />
      <Button13 />
      <Container39 />
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-gradient-to-b from-[#003057] h-[473.947px] relative rounded-[14px] shrink-0 to-[#0066b3] w-full" data-name="Card">
      <SoundMap1 />
      <SoundMap11 />
    </div>
  );
}

function SoundMap12() {
  return (
    <div className="content-stretch flex flex-col gap-[15.992px] h-[567.249px] items-start relative shrink-0 w-full" data-name="SoundMap">
      <Card2 />
      <Card3 />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.992px] h-[634.238px] items-start left-[23.99px] top-[537.2px] w-[325.053px]" data-name="Container">
      <Container13 />
      <SoundMap12 />
    </div>
  );
}

function MemberDashboard6() {
  return (
    <div className="bg-gray-50 h-[1203.43px] relative shrink-0 w-full" data-name="MemberDashboard">
      <Container5 />
      <Container11 />
      <Container12 />
      <Container40 />
    </div>
  );
}

function App() {
  return (
    <div className="bg-gray-50 content-stretch flex flex-col h-[1203.43px] items-start relative shrink-0 w-full" data-name="App">
      <MemberDashboard6 />
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Home 2">
      <App />
    </div>
  );
}