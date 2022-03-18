export enum GAEventCategory {
  LOGIN = "login",
}

export enum GAEventActions {
  LOGIN_CLICKED = "login_clicked",
}

export interface GAEventDetails {
  category: GAEventCategory;
  action: GAEventActions | string;
  label: string;
}
