import type { ReactElement } from "react";
import AlertSVG from "src/assets/alert.svg?react";

const UserProfile = (): ReactElement => {
  return (
    <div className="flex items-center gap-5">
      <div className="flex items-center gap-3 py-2 px-3">
        <div className="relative">
          <img
            src="src/assets/Avatar.png"
            alt="Аватар"
            className="w-12 h-12 rounded-full object-cover"
          />
          <AlertSVG className="absolute top-[-3px] right-[-5px]" />
        </div>
        <div className="flex flex-col leading-6">
          <span className="text-sm font-medium text-text-secondary">
            Метрострой Инвест
          </span>
          <span className="text-sm font-medium text-text-muted">
            Стародубцев И.В.
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
