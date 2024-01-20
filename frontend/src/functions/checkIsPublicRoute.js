import { APP_ROUTES } from "@/constants/approutes";

export function checkIsPublicRoute(asPath){
  const appPublicRoutes = Object.values(APP_ROUTES.public);

  return appPublicRoutes.includes(asPath);
}