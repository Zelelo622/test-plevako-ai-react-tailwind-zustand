import { ReactElement, useEffect, useRef, useState } from "react";
import { ProfileItem } from "./ProfileItem";
import { Link } from "@tanstack/react-router";

const UserProfile = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuWidth, setMenuWidth] = useState<number | undefined>(undefined);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (triggerRef.current) {
      setMenuWidth(triggerRef.current.offsetWidth);
    }
  }, []);

  const otherProfiles = [
    { name: "Метрострой Инвест", owner: "Стародубцев И.В." },
    { name: "Метрострой Инвест", owner: "Стародубцев И.В." },
  ];

  return (
    <div className="relative">
      <div
        ref={triggerRef}
        className="cursor-pointer py-2 px-3"
        onMouseLeave={() => setIsOpen(true)}
      >
        <ProfileItem
          name="Метрострой Инвест"
          owner="Стародубцев И.В."
          showAlert={true}
        />
      </div>

      {isOpen && (
        <div
          style={{ width: menuWidth }}
          className="absolute left-0 top-full bg-white z-50"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(true)}
        >
          <div className="px-1 py-1.5 border-gray-100">
            <div className="py-2 px-3">
              <div className="font-medium text-text-secondary">
                Тариф Unlimited PRO
              </div>
              <div className="font-medium text-text-muted">
                Активен до 24 августа
              </div>
            </div>
          </div>

          <div className="px-1 py-1.5 font-medium text-text-secondary">
            <Link
              to="/"
              className="py-2 px-3 flex justify-between hover-transition"
            >
              <span>Мои заказы</span>
              <span>3</span>
            </Link>
            <Link
              to="/"
              className="py-2 px-3 flex justify-between hover-transition"
            >
              <span>Исходящие отклики</span>
              <span>17</span>
            </Link>
            <Link
              to="/"
              className="py-2 px-3 flex justify-between hover-transition"
            >
              <span>Входящие заказы</span>
              <div className="flex items-center gap-1.5">
                <span>8</span>
                <span className="bg-brandDeepBlut text-white rounded-full leading-5 px-2 py-0.5">
                  +2
                </span>
              </div>
            </Link>
            <Link
              to="/"
              className="py-2 px-3 flex hover-transition"
            >
              Кабинет
            </Link>
            <Link
              to="/"
              className="py-2 px-3 flex justify-between hover-transition"
            >
              Электронные подписи
              <span className="text-red-600 text-xs">!</span>
            </Link>
            <Link
              to="/"
              className="py-2 px-3 flex hover-transition"
            >
              Выход
            </Link>
          </div>

          {/* <div className="border-t border-gray-100 pt-2">
            {otherProfiles.map((profile, idx) => (
              <button
                key={idx}
                className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors"
              >
                <ProfileItem
                  name={profile.name}
                  owner={profile.owner}
                  size="sm"
                  showAlert={true}
                />
              </button>
            ))}
          </div> */}
        </div>
      )}
    </div>
  );
};

export default UserProfile;
