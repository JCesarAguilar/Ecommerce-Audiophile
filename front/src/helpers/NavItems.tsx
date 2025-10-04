export enum PATHROUTES {
  HOME = "/",
  HEADPHONES = "/products/headphones",
  SPEAKERS = "/products/speakers",
  EARPHONES = "/products/earphones",
  LOGIN = "/login",
  REGISTER = "/register",
  DASHBOARD = "/dashboard",
}

export const NavItemsLeftSide = [
  {
    name: "INICIO",
    route: PATHROUTES.HOME,
    prefetch: true,
  },
  {
    name: "AURICULARES",
    route: PATHROUTES.HEADPHONES,
    prefetch: true,
  },
  {
    name: "ALTAVOCES",
    route: PATHROUTES.SPEAKERS,
    prefetch: true,
  },
  {
    name: "AUDÍFONOS",
    route: PATHROUTES.EARPHONES,
    prefetch: true,
  },
];
