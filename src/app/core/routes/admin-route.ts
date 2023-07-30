import {SideMenu, SubSideMenu} from "../models/side-bar.model";

export const ADMIN_ROUTES: Array<SideMenu> = [
  {
    icon: 'dashboard',
    label: 'Dashboard',
    link: '/admin/dashboard',
    sub_content: []
  },
  {
    icon: 'building',
    label: 'Immeubles',
    link: '/admin/immeubles',
    sub_content: []
  },
  {
    icon: 'agents',
    label: 'Locataires',
    link: '/admin/locataires',
    sub_content: []
  },
  {
    icon: 'doc',
    label: 'Documents',
    link: '/admin/documents',
    sub_content: []
  },
  {
    icon: 'payment',
    label: 'Paiements',
    link: '/admin/paiement',
    sub_content: []
  }
]

export const EMPLOYE_ROUTES: Array<SideMenu> = []
