import {Route, Switch} from 'react-router';
import _extends from '@babel/runtime/helpers/esm/extends';
import * as React from "react";

function renderRoutes(routes, extraProps, switchProps) {
  if (extraProps === void 0) {
    extraProps = {};
  }

  if (switchProps === void 0) {
    switchProps = {};
  }

  return routes ? React.createElement(Switch, switchProps, routes.map(function (route, i) {
    const res = [];
    res.push(React.createElement(Route, {
      key: i,
      path: route.path,
      exact: route.exact,
      strict: route.strict,
      render: function render(props) {
        return route.render ? route.render(_extends({}, props, {}, extraProps, {
          route: route
        })) : React.createElement(route.component, _extends({}, props, extraProps, {
          route: route
        }));
      }
    }));
    if (route.routes && route.routes.length > 0) {
      route.routes.forEach((route, idx) => {
        res.push(React.createElement(Route, {
          key: `${i}.${idx}`,
          path: route.path,
          exact: route.exact,
          strict: route.strict,
          render: function render(props) {
            return route.render ? route.render(_extends({}, props, {}, extraProps, {
              route: route
            })) : React.createElement(route.component, _extends({}, props, extraProps, {
              route: route
            }));
          }
        }));
      })
    }
    return res;
  })) : null;
}

export default renderRoutes;