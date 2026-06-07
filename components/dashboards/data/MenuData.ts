
import { Icons } from "@/lib/icons";
export const menuSections = [
  {
    title: "Overview_________________",
    items: [
      {
        label: "Dashboard",
        icon: Icons.FiGrid,
        href: "/dashboard",
        exact: true,
      },
      
      {
        label: "Analytics",
        icon: Icons.FiBarChart2,
        href: "/dashboard/Analytics",
        
      },
       {
        label: "Scores",
        icon: Icons.FiBarChart2,
        href: "/dashboard-v2/Scores",
        
      },
    ],
  },
{
      title: "Management_________________",
    items: [
      {
        label: "Upgrade Plan",
        icon: Icons.FiGrid,
        href: "/dashboard/UpgradePlan",
        exact: true,
      },
      
    
    ],
  },


  
];