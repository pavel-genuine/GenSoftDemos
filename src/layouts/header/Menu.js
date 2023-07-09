import Link from "next/link";

const Menu = () => {
  return (
    <nav className="main-menu">
      <ul>
        <li className="">
          <a href="#">
            Home
           
          </a>
       
        </li>
        <li className="menu-item">
          <Link legacyBehavior href="/">
            About
          </Link>
        </li>
        <li className="menu-item has-children">
          <a href="#">
          Products
            <span className="dd-trigger">
              <i className="far fa-angle-down" />
            </span>
          </a>
          <ul className="sub-menu">
            <li>
              <Link legacyBehavior href="/">
                Our Products
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/">
                Products Details
              </Link>
            </li>
          </ul>
        </li>
        <li className="menu-item has-children">
          <a href="#">
            Portfolio
            <span className="dd-trigger">
              <i className="far fa-angle-down" />
            </span>
          </a>
          <ul className="sub-menu">
            <li>
              <Link legacyBehavior href="/">
                Project Grid
              </Link>
            </li>
           
          </ul>
        </li>
        <li className="menu-item has-children">
          <a href="#">
           History
            <span className="dd-trigger">
              <i className="far fa-angle-down" />
            </span>
          </a>
          <ul className="sub-menu">
            <li>
              <Link legacyBehavior href="/">
               Standard
              </Link>
            </li>
          
          </ul>
        </li>
        <li className="menu-item has-children">
          <a href="#">
            Our Team
            <span className="dd-trigger">
              <i className="far fa-angle-down" />
            </span>
          </a>
         
        </li>
      </ul>
    </nav>
  );
};
export default Menu;
