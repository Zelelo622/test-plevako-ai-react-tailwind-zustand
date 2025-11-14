import { ReactElement, useEffect, useRef, useState } from "react";
import { ProfileItem } from "./components/ProfileItem";
import { Link } from "@tanstack/react-router";
import Divider from "../Divider/Divider";
import AlertSVG from "src/assets/alert.svg?react";
import { createPortal } from "react-dom";
import { IUserProfileProps } from "./types";
import { NotificationLink } from "./components/NotificationLink";

const UserProfile = ({
  userProfile,
  otherProfiles,
}: IUserProfileProps): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const [coords, setCoords] = useState<DOMRect | null>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && triggerRef.current) {
      setCoords(triggerRef.current.getBoundingClientRect());
    }
  }, [isOpen]);

  if (!userProfile) {
    return (
      <Link
        to="/login"
        className="cursor-pointer px-5 py-3 leading-6 font-semibold hover:text-green-800 transition-colors"
      >
        Вход / Регистрация
      </Link>
    );
  }

  return (
    <>
      <div
        ref={triggerRef}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="cursor-pointer py-2 px-3"
      >
        <ProfileItem
          name={userProfile.name}
          owner={userProfile.owner}
          showAlert={!!userProfile.notifications?.myOrders?.unread}
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
                name={userProfile.name}
                owner={userProfile.owner}
                showAlert={!!userProfile.notifications?.myOrders?.unread}
              />
            </div>

            <div className="bg-white rounded-xl overflow-hidden">
              <div className="px-1 py-1.5">
                <div className="py-2 px-1">
                  {userProfile.subscription ? (
                    <>
                      <div className="font-medium text-text-secondary">
                        Тариф {userProfile.subscription.name}
                      </div>
                      <div className="font-medium text-text-muted">
                        Активен до{" "}
                        {new Date(
                          userProfile.subscription.activeUntil
                        ).toLocaleDateString("ru-RU", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </div>
                    </>
                  ) : (
                    <Link
                      to="tariff"
                      className="font-medium text-text-secondary hover-transition-profile"
                    >
                      Подписки сейчас нет
                    </Link>
                  )}
                </div>
              </div>

              <div className="py-1.5 font-medium text-text-secondary">
                <NotificationLink
                  to="/my-orders"
                  label="Мои заказы"
                  total={userProfile.notifications?.myOrders?.total}
                  unread={userProfile.notifications?.myOrders?.unread}
                />
                <NotificationLink
                  to="/outgoing-responses"
                  label="Исходящие отклики"
                  total={userProfile.notifications?.outgoing?.total}
                  unread={userProfile.notifications?.outgoing?.unread}
                />
                <NotificationLink
                  to="/incoming-orders"
                  label="Входящие заказы"
                  total={userProfile.notifications?.incoming?.total}
                  unread={userProfile.notifications?.incoming?.unread}
                />

                <Link to="/profile" className="py-2 px-3 flex hover-transition-profile">
                  Кабинет
                </Link>
                <Link
                  to="/electronic-signatures"
                  className="py-2 px-3 flex items-center justify-between hover-transition-profile"
                >
                  Электронные подписи
                  {userProfile.notifications?.eSign?.hasAlert && (
                    <span>
                      <AlertSVG />
                    </span>
                  )}
                </Link>
                <button className="cursor-pointer py-2 px-3 flex hover-transition-profile w-full">
                  Выход
                </button>
              </div>
              {otherProfiles && (
                <>
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
                </>
              )}
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default UserProfile;
