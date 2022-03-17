export enum GAEventCategory {
  LOGIN = "login",
  CONTACT = "contact",
  BUY = "buy",
  ADDTOCART = "addtocart",
}

export enum GAEventActions {
  LOGIN_CLICKED = "login_clicked",
  CONTACT_CLICKED = "contact_clicked",
  BUY_CLICKED = "buy_clicked",
  ADDTOCART_CLICKED = "addtocart_clicked",
}

export interface GAEventDetails {
  category: GAEventCategory;
  action: GAEventActions | string;
  label: string;
}
