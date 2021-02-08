import GoodsTable from "./goods/GoodsTable";
import StorageTable from "./storage/StorageTable";
import CustomerTable from "./customer/CustomerTable";
import SettingTable from "./setting/SettingTable";
import {TeamOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined} from '@ant-design/icons';

const routes = [
  {
    path: "/goods",
    name: "商品管理",
    icon: <VideoCameraOutlined/>,
    component: GoodsTable
  },
  {
    path: "/storage",
    name: "库存管理",
    icon: <TeamOutlined/>,
    component: StorageTable
  },
  {
    path: "/customer",
    name: "买家管理",
    icon: <UserOutlined/>,
    component: CustomerTable
  },
  {
    path: "/setting",
    name: "系统设置",
    icon: <UploadOutlined/>,
    component: SettingTable
  }
]

export default routes;