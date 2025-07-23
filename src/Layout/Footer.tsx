const Footer = () => {
  const serviceList = {
    title: "서비스",
    list: [
      { listTitle: "공지사항", href: "/clone-toss/" },
      { listTitle: "자주 묻는 질문", href: "/clone-toss/" },
      { listTitle: "공동인증서 관리", href: "/clone-toss/" },
      { listTitle: "계정 일시잠금", href: "/clone-toss/" },
      { listTitle: "고객센터", href: "/clone-toss/" },
      { listTitle: "개인(신용)정보 이용·제공 내역 조회", href: "/clone-toss/" },
      { listTitle: "브랜드 리소스센터", href: "/clone-toss/" },
      { listTitle: "토스의 개인정보 보호", href: "/clone-toss/" },
      { listTitle: "토스유스카드", href: "/clone-toss/" },
      { listTitle: "앱인토스", href: "/clone-toss/" },
      { listTitle: "토스 카드라운지", href: "/clone-toss/" },
    ],
  };
  const companyList = {
    title: "회사",
    list: [
      { listTitle: "회사 소개", href: "/clone-toss/" },
      { listTitle: "토스페이먼츠", href: "/clone-toss/" },
      { listTitle: "토스인슈어런스", href: "/clone-toss/" },
      { listTitle: "토스증권", href: "/clone-toss/" },
      { listTitle: "토스씨엑스", href: "/clone-toss/" },
      { listTitle: "토스뱅크", href: "/clone-toss/" },
      { listTitle: "토스플레이스", href: "/clone-toss/" },
      { listTitle: "토스모바일", href: "/clone-toss/" },
      { listTitle: "토스인컴", href: "/clone-toss/" },
      { listTitle: "채용", href: "/clone-toss/" },
      { listTitle: "기술 블로그", href: "/clone-toss/" },
      { listTitle: "블로그", href: "/clone-toss/" },
      { listTitle: "공고", href: "/clone-toss/" },
    ],
  };
  const askList = {
    title: "문의",
    list: [
      { listTitle: "사업 제휴", href: "/clone-toss/" },
      { listTitle: "토스쇼핑 입점문의", href: "/clone-toss/" },
      { listTitle: "광고 문의", href: "/clone-toss/" },
      { listTitle: "인증 사업 문의", href: "/clone-toss/" },
      { listTitle: "마케팅·PR", href: "/clone-toss/" },
      { listTitle: "IR", href: "/clone-toss/" },
    ],
  };
  const centerList = {
    title: "고객센터",
    list: [
      { listTitle: "전화: 0000-0000 (24시간 연중무휴)", href: "/clone-toss/" },
      { listTitle: "이메일(고객전용): abcd@oooo.oo 질문", href: "/clone-toss/" },
      { listTitle: "이메일(외부기관전용): abcd@oooo.oo", href: "/clone-toss/" },
      { listTitle: "민원 접수", href: "/clone-toss/" },
    ],
  };
  const ethicalList = {
    title: "윤리경영",
    list: [{ listTitle: "상담/신고", href: "/clone-toss/" }],
  };

  const termList = [
    { title: "서비스 이용약관", href: "/clone-toss/" },
    { title: "통합 금융정보 서비스 약관", href: "/clone-toss/" },
    { title: "마이데이터 서비스 이용약관", href: "/clone-toss/" },
    { title: "이용자의 권리 및 유의사항", href: "/clone-toss/" },
    { title: "개인정보 처리방침", href: "/clone-toss/" },
    { title: "채용팀 개인정보 처리방침", href: "/clone-toss/" },
    { title: "어드민 서비스 개인정보 처리방침", href: "/clone-toss/" },
    { title: "고정형 영상정보처리기기 운영 관리 방침", href: "/clone-toss/" },
    { title: "위치기반서비스 이용약관", href: "/clone-toss/" },
    { title: "가맹점 고지사항", href: "/clone-toss/" },
    { title: "토스 전자서명인증업무준칙", href: "/clone-toss/" },
    { title: "토스 전자인증서비스 약관", href: "/clone-toss/" },
    { title: "금융소비자보호", href: "/clone-toss/" },
    { title: "토스비즈니스 개인정보 처리방침", href: "/clone-toss/" },
    { title: "퀵계좌이체 개인정보 처리방침", href: "/clone-toss/" },
  ];

  const socialList = [
    {
      title: "toss",
      icon: "https://static.toss.im/assets/homepage/safety/icon-tossfeed.svg",
      href: "https://toss.im/tossfeed",
    },
    {
      title: "naver",
      icon: "https://static.toss.im/assets/homepage/safety/icn-naver.svg",
      href: "https://blog.naver.com/tossblog",
    },
    {
      title: "x",
      icon: "https://static.toss.im/assets/homepage/safety/icon-x.svg",
      href: "https://x.com/toss__official",
    },
    {
      title: "instargram",
      icon: "https://static.toss.im/assets/homepage/safety/icn-instagram.svg",
      href: "https://www.instagram.com/toss.im/",
    },
  ];

  return (
    <footer>
      <div className="footer_inner">
        <div className="footer_site_group_list">
          <ul className="footer_site_group">
            <li className="footer_site_group_title">{serviceList.title}</li>
            {serviceList.list.map((ele, index) => (
              <li key={"service" + index}>
                <a className="footer_site_group_item" href={ele.href}>
                  {ele.listTitle}
                </a>
              </li>
            ))}
          </ul>
          <ul className="footer_site_group">
            <li className="footer_site_group_title">{companyList.title}</li>
            {companyList.list.map((ele, index) => (
              <li key={"company" + index}>
                <a className="footer_site_group_item" href={ele.href}>
                  {ele.listTitle}
                </a>
              </li>
            ))}
          </ul>
          <ul className="footer_site_group">
            <li className="footer_site_group_title">{askList.title}</li>
            {askList.list.map((ele, index) => (
              <li key={"ask" + index}>
                <a className="footer_site_group_item" href={ele.href}>
                  {ele.listTitle}
                </a>
              </li>
            ))}
          </ul>
          <ul className="footer_site_group">
            <li className="footer_site_group_title">{centerList.title}</li>
            {centerList.list.map((ele, index) => (
              <li key={"center" + index}>
                <a className="footer_site_group_item" href={ele.href}>
                  {ele.listTitle}
                </a>
              </li>
            ))}
          </ul>
          <ul className="footer_site_group">
            <li className="footer_site_group_title">{ethicalList.title}</li>
            {ethicalList.list.map((ele, index) => (
              <li key={"ethical" + index}>
                <a className="footer_site_group_item" href={ele.href}>
                  {ele.listTitle}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <address className="footer_address">
          <strong className="footer_company_name">㈜비바리퍼블리카</strong>
          사업자 등록번호 : 000-00-00000 | 대표 : ○○○
          <br />
          호스팅 서비스 : 주식회사 ○○○○○○○ | 통신판매업 신고번호 : 0000-서울강남-00000
          <a href="/clone-toss/" className="footer_business_person">
            사업자정보확인
          </a>
          <br />
          00000 ○○○○○ ○○○ ○○○○ 000, 00층, 00층, 00층, 00층, 00층, 00층 (○○○, ○○○○○○)
          <br />
          고객센터 : ○○○○○ ○○○ ○○○○ 000, 00층 (○○○, ○○○○○○○)
        </address>
        <ul className="footer_term_wrap">
          {termList.map((ele, index) =>
            [4, 5, 6, 8, 13, 14].includes(index) ? (
              <li key={"term" + index} className="footer_term2">
                <a href={ele.href}>{ele.title}</a>
              </li>
            ) : (
              <li key={"term" + index} className="footer_term">
                <a href={ele.href}>{ele.title}</a>
              </li>
            )
          )}
        </ul>
        <ul className="footer_social_wrap">
          {socialList.map((ele) => (
            <li key={ele.title} className="footer_social">
              <a className="footer_link" href={ele.href}>
                <img className="footer_icon" src={ele.icon} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
