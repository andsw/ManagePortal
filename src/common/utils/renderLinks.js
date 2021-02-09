import {Link} from "react-router-dom";
import {Menu} from "antd";
import SubMenu from "antd/es/menu/SubMenu";

const renderLinks = (item, idx) => {
  if (item.routes && item.routes.length > 0) {
    const routesMenu = [];
    item.routes.forEach((route, innerIdx) => {
      routesMenu.push(<Menu.Item key={`${idx}.${innerIdx}`} icon={route.icon}>
        <Link to={route.path}>{route.name}</Link>
      </Menu.Item>)});
      return (
          <SubMenu key={idx} icon={item.icon} title={item.name}>
            {routesMenu}
          </SubMenu>
      );
  } else {
    return (
        <Menu.Item key={idx} icon={item.icon}>
          <Link to={item.path}>{item.name}</Link>
        </Menu.Item>
    );
  }
};

export default renderLinks;