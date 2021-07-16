import React from 'react';
import * as Icon from 'react-feather';
export const data = [
    {
      title: 'Dashboard',
      path: '/dashboard',
      icon:   <Icon.Home className="mx-2" size={15} />
    },
    {
      title: 'Product',
      path: '/addproduct',
      icon:  <Icon.File className="mx-2" size={15} />,
      cName: 'nav-text'
    },
    {
      title: 'Order',
      path: '/order',
      icon:   <Icon.ShoppingCart className="mx-2" size={15} />
    },
    {
      title: 'Customers',
      path: '/customers',
      icon:  <Icon.Users className="mx-2" size={15} />
    },
    {
      title: 'Report',
      path: '/report',
      icon:   <Icon.BarChart2 className="mx-2" size={15} />
    },
    {
      title: 'Integrations',
      path: '/integration',
      icon: <Icon.Layers className="mx-2" size={15} />
    }
  ];
  