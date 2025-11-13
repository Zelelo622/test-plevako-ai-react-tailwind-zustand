import { Link } from "@tanstack/react-router";
import type { ReactElement } from "react";
import Divider from "../Divider/Divider";
import LogoSVG from "src/assets/logo.svg?react";

const Header = (): ReactElement => {
  return (
    <header className="container px-4 w-full bg-white mx-auto">
      <div className="flex items-center justify-between py-2 gap-3.5">
        <div className="flex-1 flex items-center justify-between">
          <Link to="/" className="shrink-0">
            <LogoSVG />
          </Link>

          <nav>
            <ul className="flex items-center gap-8">
              <li>
                <Link
                  to="/bulletin-board"
                  className="text-sm font-medium text-black hover:text-blue-600 transition-colors"
                >
                  Доска заказов
                </Link>
              </li>
              <li>
                <Link
                  to="/rate"
                  className="text-sm font-medium text-black hover:text-blue-600 transition-colors"
                >
                  Тарифы
                </Link>
              </li>
              <li>
                <Link
                  to="/contacts"
                  className="text-sm font-medium text-black hover:text-blue-600 transition-colors"
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </nav>

          <button className="cursor-pointer bg-brandDeepBlut text-white px-5 py-3 rounded-lg leading-6 font-semibold hover:bg-blue-800 transition-colors">
            Разместить заказ
          </button>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src="/avatar.png"
                alt="Аватар"
                className="w-9 h-9 rounded-full object-cover"
              />
              <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-medium text-gray-900">
                Метрострой Инвест
              </span>
              <span className="text-xs text-gray-500">Стародубцев И.В.</span>
            </div>
          </div>
        </div>
      </div>

      <Divider />
    </header>
  );
};

export default Header;
