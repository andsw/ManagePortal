import {renderRoutes} from 'react-router-config';

const myRenderRoutes = (routes) => {
  const routerList = [];
  if (routes) {
    routerList.push(renderRoutes(routes));
  }
  routes.forEach((route) => {
    if (route.routes && route.routes.length > 0) {
      routerList.push(renderRoutes(route.routes));
    }
  });
  return routerList;
};

export default myRenderRoutes;