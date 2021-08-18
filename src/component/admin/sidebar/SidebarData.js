import React from 'react';
import * as Icon from 'react-feather';
export const data = [
    {
      title: 'Dashboard',
      path: '/dashboard',
      icon:   <Icon.Home className="mx-2" size={15} />
    },
    {
      title: 'Products',
      path: '/products',
      icon:  <Icon.File className="mx-2" size={15} />,
      cName: 'nav-text'
    },
    {
      title: 'Add Product',
      path: '/addproduct',
      icon:  <Icon.FilePlus className="mx-2" size={15} />,
      cName: 'nav-text'
    },
    {
      title: 'Categories',
      path: '/categories',
      icon:  <Icon.File className="mx-2" size={15} />,
      cName: 'nav-text'
    },
    {
      title: 'Add Category',
      path: '/addcategory',
      icon:  <Icon.FilePlus className="mx-2" size={15} />,
      cName: 'nav-text'
    },
    {
      title: 'Order',
      path: '/order',
      icon:   <Icon.ShoppingCart className="mx-2" size={15} />
    }
  ];
  