import { IProfile } from "src/types";

export interface IProfileItemProps {
  id: string | number;
  name: string;
  owner: string;
  showAlert?: boolean;
}

export interface IUserProfileProps {
  userProfile: IProfile | null;
  otherProfiles: IProfile[];
}

export interface INotificationLinkProps {
  to: string;
  label: string;
  total?: number;
  unread?: number | null;
  showAlert?: boolean;
}
