import { NavLink } from 'react-router-dom'
import { 
  MessageSquare, 
  LayoutGrid, 
  Settings, 
  Sparkles,
  FolderOpen,
  Users,
  Clock
} from 'lucide-react'

const navigation = [
  { name: 'Chat', href: '/', icon: MessageSquare },
  { name: 'Workspace', href: '/workspace', icon: LayoutGrid },
]

const secondaryNavigation = [
  { name: 'Recent', href: '#', icon: Clock },
  { name: 'Shared', href: '#', icon: Users },
  { name: 'Projects', href: '#', icon: FolderOpen },
]

export default function Sidebar() {
  return (
    <aside className="w-64 bg-surface-sidebar border-r border-border-light flex flex-col">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-border-light">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-ai-blue flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="font-semibold text-text-primary">Forge</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-1">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all duration-fast ${
                isActive
                  ? 'bg-background-secondary text-text-primary'
                  : 'text-text-secondary hover:bg-background-secondary hover:text-text-primary'
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* Secondary Navigation */}
      <nav className="px-4 py-6 space-y-1 border-t border-border-light">
        {secondaryNavigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-text-secondary hover:bg-background-secondary hover:text-text-primary transition-all duration-fast"
          >
            <item.icon className="w-5 h-5" />
            {item.name}
          </a>
        ))}
      </nav>

      {/* Settings */}
      <div className="p-4 border-t border-border-light">
        <NavLink
          to="/settings"
          className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-text-secondary hover:bg-background-secondary hover:text-text-primary transition-all duration-fast"
        >
          <Settings className="w-5 h-5" />
          Settings
        </NavLink>
      </div>
    </aside>
  )
}
