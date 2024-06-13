import SocialNetworks from "./SocialNetworks";

import avatar from "../img/eu.jpg";

import "../styles/components/sidebar.sass";
import InformationContainer from "./InformationContainer";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={avatar} alt="Josean Araujo" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworks />
      <InformationContainer />
    </aside>
  );
};

export default Sidebar;
