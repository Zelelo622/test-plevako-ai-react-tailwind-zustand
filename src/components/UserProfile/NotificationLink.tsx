import { ReactElement } from "react";
import { Link } from "@tanstack/react-router";
import { INotificationLinkProps } from "./types";

export const NotificationLink = ({
  to,
  label,
  total,
  unread,
}: INotificationLinkProps): ReactElement => {
  return (
    <Link to={to} className="py-2 px-3 flex justify-between hover-transition">
      <span>{label}</span>
      <div className="flex items-center gap-1.5">
        <span>{total || 0}</span>
        {unread ? (
          <span className="bg-brandDeepBlut text-white rounded-full leading-5 px-2 py-0.5">
            +{unread}
          </span>
        ) : null}
      </div>
    </Link>
  );
};
