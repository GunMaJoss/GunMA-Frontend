import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  {
      _tag: 'CSidebarNavItem',
      icon: <CIcon name="cil-user" customClasses="c-sidebar-nav-icon"/>,
      name: 'Login',
      to: '/login',
    
  },
    {
      _tag: 'CSidebarNavItem',
      icon: <CIcon name="cil-user-follow" customClasses="c-sidebar-nav-icon"/>,
      name: 'Register',
      to: '/register',
    },
    {
      _tag: 'CSidebarNavItem',
      icon: <CIcon name="cil-warning" customClasses="c-sidebar-nav-icon"/>,
      name: 'Error 404',
      to: '/404',
    },
    {
      _tag: 'CSidebarNavItem',
      icon: <CIcon name="cil-x-circle" customClasses="c-sidebar-nav-icon"/>,
      name: 'Error 500',
      to: '/500',
    },
  ]

export default _nav
