import { ReactElement, useEffect, useRef, useState } from "react";
import { ProfileItem } from "./ProfileItem";
import { Link } from "@tanstack/react-router";
import Divider from "../Divider/Divider";
import AlertSVG from "src/assets/alert.svg?react";
import { createPortal } from "react-dom";

const UserProfile = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const [coords, setCoords] = useState<DOMRect | null>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && triggerRef.current) {
      setCoords(triggerRef.current.getBoundingClientRect());
    }
  }, [isOpen]);

  const otherProfiles = [
    { id: "2", name: "Метрострой Инвест", owner: "Стародубцев И.В." },
    { id: "3", name: "Метрострой Инвест", owner: "Стародубцев И.В." },
  ];

  return (
    <>
      <div
        ref={triggerRef}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="cursor-pointer py-2 px-3"
      >
        <ProfileItem
          name="Метрострой Инвест"
          owner="Стародубцев И.В."
          showAlert={true}
        />
      </div>

      {isOpen &&
        coords &&
        createPortal(
          <div
            className="absolute z-9999 bg-white boxShadow-profile-popup rounded-2xl py-2 px-1"
            style={{
              top: coords.top + window.scrollY - 8,
              left: coords.left + window.scrollX - 4,
              width: coords.width + 8,
            }}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <div className="cursor-pointer py-2 px-3">
              <ProfileItem
                name="Метрострой Инвест"
                owner="Стародубцев И.В."
                showAlert={true}
              />
            </div>

            <div className="bg-white rounded-xl overflow-hidden">
              <div className="px-1 py-1.5">
                <div className="py-2 px-1">
                  <div className="font-medium text-text-secondary">
                    Тариф Unlimited PRO
                  </div>
                  <div className="font-medium text-text-muted">
                    Активен до 24 августа
                  </div>
                </div>
              </div>

              <div className="py-1.5 font-medium text-text-secondary">
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

                <Link to="/" className="py-2 px-3 flex hover-transition">
                  Кабинет
                </Link>
                <Link
                  to="/"
                  className="py-2 px-3 flex justify-between hover-transition"
                >
                  Электронные подписи
                  <span>
                    <AlertSVG />
                  </span>
                </Link>
                <button className="cursor-pointer py-2 px-3 flex hover-transition w-full">
                  Выход
                </button>
              </div>

              <Divider className="my-3" />

              <div>
                {otherProfiles.map((profile) => (
                  <button
                    key={profile.id}
                    className="cursor-pointer w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors rounded-2xl"
                  >
                    <ProfileItem
                      name={profile.name}
                      owner={profile.owner}
                      showAlert={false}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default UserProfile;
