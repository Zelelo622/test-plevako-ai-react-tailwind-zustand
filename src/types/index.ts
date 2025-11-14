export interface IProfile {
  id: string;
  name: string;
  owner: string;
  notifications?: {
    myOrders?: { total: number; unread?: number | null };
    outgoing?: { total: number; unread?: number | null };
    incoming?: { total: number; unread?: number | null };
    eSign?: { hasAlert: boolean };
  };
  subscription?: { name: string; activeUntil: string };
}
