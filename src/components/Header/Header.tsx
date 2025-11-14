import { Link } from "@tanstack/react-router";
import { useEffect, type ReactElement } from "react";
import Divider from "../Divider/Divider";
import LogoSVG from "src/assets/logo.svg?react";
import UserProfile from "../UserProfile/UserProfile";
import { useUserStore } from "src/store/userStore";

const Header = (): ReactElement => {
  const {
    userProfile,
    otherProfiles,
    fetchUserProfile,
    fetchOtherProfiles,
    loading,
  } = useUserStore();

  useEffect(() => {
    fetchUserProfile();
    fetchOtherProfiles();
  }, []);

  return (
    <header className="container px-4 mb-4 w-full bg-white mx-auto">
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
                  className="text-sm font-medium text-black hover-color-link-header"
                >
                  Доска заказов
                </Link>
              </li>
              <li>
                <Link
                  to="/rate"
                  className="text-sm font-medium text-black hover-color-link-header"
                >
                  Тарифы
                </Link>
              </li>
              <li>
                <Link
                  to="/contacts"
                  className="text-sm font-medium text-black hover-color-link-header"
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

        {loading ? (
          <div className="h-16 bg-gray-200 rounded-lg animate-pulse w-[244px] xl:w-[308px]"></div>
        ) : (
          <UserProfile
            userProfile={userProfile}
            otherProfiles={otherProfiles}
          />
        )}
      </div>

      <Divider />
    </header>
  );
};

export default Header;
