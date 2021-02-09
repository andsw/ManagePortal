import CustomerTable from "./customer/CustomerTable";
import SettingTable from "./setting/SettingTable";
import {UploadOutlined, UserOutlined, VideoCameraOutlined} from '@ant-design/icons';
import BrandManager from "./goods/BrandManager";
import CategoryManager from "./goods/CategoryManager";
import StorageManager from "./goods/StorageManager";

const routes = [
  {
    name: "产品管理",
    path: "/goods",
    icon: <VideoCameraOutlined/>,
    routes: [
      {
        name: "品牌管理",
        path: "/brand",
        component: BrandManager
      },
      {
        name: "类别管理",
        path: "/category",
        component: CategoryManager
      },
      {
        name: "库存管理",
        path: "/storage",
        component: StorageManager
      }
    ]
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