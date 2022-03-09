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
  WEBSITE_LOADED = "website_loaded",
}

export enum GAEventLabels {
  LOGIN_SUCCESS = "login_succesful",
  LOGIN_FAILED = "login_failed",
  CONTACT_SUCCESS = "contact_successful",
  CONTACT_FAILED = "contact_failed",
  BUY_SUCCCESS = "buy_successful",
  BUY_FAILED = "buy_failed",
  ADDTOCART_SUCCESS = "addtocart_successful",
  ADDTOCART_FAILED = "addtocart_failed",
  WEBSITE_LOAD_SUCCESS = "website loaded successfully",
}

export interface GAEventDetails {
  category: GAEventCategory;
  action: GAEventActions | string;
  label: GAEventLabels | string;
}
