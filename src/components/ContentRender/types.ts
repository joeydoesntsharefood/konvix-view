export type content = 'clients' | 'sales' | 'sale'

export interface SidebarItem {
  element: any
  title: any
}

export interface IndexProps {
  content: content
}

export interface ViewProps {
  content: any
  title: string
}