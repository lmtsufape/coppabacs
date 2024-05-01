import { APP_ROUTES } from "@/constants/app-routes";

export function checkIsPublicRoute(asPath){
  const appPublicRoutes = Object.values(APP_ROUTES.public);
  console.log("app", appPublicRoutes);
  console.log("jovem", appPublicRoutes.includes(asPath));
  return appPublicRoutes.includes(asPath);
}