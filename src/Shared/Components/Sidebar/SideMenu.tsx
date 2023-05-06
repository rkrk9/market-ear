
export interface menu {
  Items?: menu[]
  title?: string
  icon?: JSX.Element
  type?: string
  selected?: boolean
  active?: boolean
  path?: string
  children?: menu[]
  badge?: string
  badgetxt?: string
}



export const MENUITEMS: menu[] = []
