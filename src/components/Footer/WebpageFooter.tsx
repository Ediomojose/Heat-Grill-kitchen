import { Link } from "react-router-dom";
import XLogo from "../../assets/media/logo/icons8-twitterx-24.png";
import YoutubeLogo from "../../assets/media/logo/icons8-youtube-24.png";
import FacebookLogo from "../../assets/media/logo/icons8-facebook-24.png";
import InstagramLogo from "../../assets/media/logo/icons8-instagram-24.png";
import { NavigationData } from "../Data/NavigationData";

const SocialsConnect = [
  {
    id: 1,
    name: "X-Twitter",
    toURL: "https://x.com/EdiomoJose",
    imgContent: XLogo,
  },

  {
    id: 2,
    name: "Youtube",
    toURL: "https://x.com/EdiomoJose",
    imgContent: YoutubeLogo,
  },

  {
    id: 3,
    name: "Facebook",
    toURL: "https://web.facebook.com/ed.jose.547",
    imgContent: FacebookLogo,
  },

  {
    id: 4,
    name: "Instagram",
    toURL: "https://x.com/EdiomoJose",
    imgContent: InstagramLogo,
  },
];

const WebpageFooter = () => {
  return (
    <footer className={`bg-brandBrown grid grid-cols-1 justify-center items-start gap-10 text-white md:grid-cols-3 px-10 lg:px-40 py-12`}>
      <aside className={``}>
        <h3 className={`text-lg font-CirkaBold pb-4`}>Heat & Grill Kitchen</h3>
        <p className={`text-xs lg:text-sm font-InterRegular`}>
          Where culinary artistry meets the vibrant flavors of grilled
          perfection. Our passion lies in crafting mouthwatering dishes that are
          grilled to perfection, using the finest ingredients and innovative
          techniques.
        </p>
        <ul className={`flex gap-2 pt-5`}>
          {SocialsConnect.map((data) => (
            <li key={data.id}>
              <Link to={data.toURL} title={data.name}>
                <img src={data.imgContent} alt={data.name} />
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      <aside className={``}>
        <h3 className={`text-lg pb-4 font-CirkaBold `}>Links</h3>
        <ul className={`text-xs lg:text-sm font-InterRegular`}>
          {NavigationData.map((data, idx) => (
            <li className={`pb-1`} key={idx}>
              <Link to={data.link} title={data.pageName}>
                {data.pageName}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      <aside className={``}>
        <h3 className={`text-lg font-CirkaBold  pb-4`}>Address</h3>
        <p className={`text-xs lg:text-sm font-InterRegular`}>120 Fulham Road London, United Kingdom</p>
      </aside>
    </footer>
  );
};

export default WebpageFooter;
