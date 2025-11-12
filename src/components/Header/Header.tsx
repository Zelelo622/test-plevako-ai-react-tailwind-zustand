import { Link } from "@tanstack/react-router";
import type { ReactElement } from "react";

const Header = (): ReactElement => {
  return (
    <header>
      <nav>
        <Link to="/">App</Link>
        <ul>
          <li>
            <Link to="/bulletin-board">Доска заказов</Link>
          </li>

          <li>
            <Link to="/rate">Тарифы</Link>
          </li>

          <li>
            <Link to="/contacts">Контакты</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
