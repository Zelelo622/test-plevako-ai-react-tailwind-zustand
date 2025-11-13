import type { ReactElement } from "react";
import AlertSVG from "src/assets/alert.svg?react";
import { IProfileItemProps } from "./types";

export const ProfileItem = ({
  name,
  owner,
  showAlert = false,
}: IProfileItemProps): ReactElement => {
  return (
    <div className="flex items-center gap-3 w-[220px] xl:w-[284px]">
      <div className="relative">
        <img
          src="src/assets/Avatar.png"
          alt="Аватар"
          className="rounded-full object-cover"
        />
        {showAlert && (
          <AlertSVG
            className="absolute top-[-3px] right-[-5px]"
          />
        )}
      </div>
      <div className="flex flex-col leading-6">
        <span className="text-sm font-medium text-text-secondary">{name}</span>
        <span className="text-sm font-medium text-text-muted">{owner}</span>
      </div>
    </div>
  );
};
