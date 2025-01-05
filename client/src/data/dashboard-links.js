import {  VscAccount, VscDashboard, VscVm, VscAdd, VscMortarBoard,VscHistory } from "react-icons/vsc"
const sidebarLinks = [
  {
    id: 1,
    name: "My Profile",
    path: "/dashboard/my-profile",
    type: "Student",
    icon: VscAccount,
  },
  {
    id: 2,
    name: "My Profile",
    path: "/dashboard/my-profile",
    type: "Instructor",
    icon: VscAccount,
  },
  {
    id: 3,
    name: "Dashboard",
    path: "/dashboard/instructor",
    type: "Instructor",
    icon: VscDashboard,
  },
  {
    id: 4,
    name: "My Courses",
    path: "/dashboard/my-courses",
    type:  "Instructor",
    icon: VscVm,
  },
  {
    id: 5,
    name: "Add Course",
    path: "/dashboard/add-course",
    type:  "Instructor",
    icon: VscAdd,
  },
  {
    id: 6,
    name: "Enrolled Courses",
    path: "/dashboard/enrolled-courses",
    type: "Student",
    icon: VscMortarBoard,
  },
  {
    id: 7,
    name: "Purchase History",
    path: "/dashboard/purchase-history",
    type: "Student",
    icon: VscHistory,
  },
];
export default sidebarLinks;
