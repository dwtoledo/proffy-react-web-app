import { Link } from "react-router-dom";

import backArrowIcon from "../../assets/images/icons/back.svg";
import proffyLogo from "../../assets/images/logo.svg";

import "./styles.css";

type PageHeaderProps = {
  title: string;
  description?: string;
  children?: React.ReactNode;
};

function PageHeader(props: PageHeaderProps) {
  return (
    <header id="page-header">
      <nav className="page-header__navigation">
        <Link to={"/"}>
          <img
            src={backArrowIcon}
            alt="Voltar"
            className="page-header__back-icon"
          />
        </Link>
        <img src={proffyLogo} alt="Proffy logo" className="page-header__logo" />
      </nav>
      <div className="page-header__content">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <div className="page-header__childrens">{props.children}</div>
      </div>
    </header>
  );
}

export default PageHeader;
