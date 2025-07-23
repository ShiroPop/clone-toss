const AppDownload = () => {
  const stores = [
    {
      name: "App Store",
      platform: "apple",
      href: "https://itunes.apple.com/kr/app/%ED%86%A0%EC%8A%A4/id839333328?mt=8",
      icon: "https://static.toss.im/png-icons/timeline/applekorea.png",
    },
    {
      name: "Google Play",
      platform: "android",
      href: "https://play.google.com/store/apps/details?id=viva.republica.toss&pli=1",
      icon: "https://static.toss.im/png-icons/timeline/googleplay.png",
    },
  ];

  return (
    <div className="appdownload_wrap">
      <ul className="appdownload_menu">
        {stores.map((ele) => (
          <li key={ele.platform} className="appdownload_item">
            <a href={ele.href} target="_blank">
              <span className="appdownload_item_wrap">
                <img src={ele.icon} />
                {ele.name} 다운로드
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppDownload;
