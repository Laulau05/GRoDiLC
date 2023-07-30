export type SubSideMenu = {
  label: string
  link: string
}

export type SideMenu = {
  icon: string
  label: string
  link: string
  sub_content: Array<SubSideMenu>
}
