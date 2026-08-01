import { useTheme } from '../../contexts/ThemeContext'
import { Moon, Sun, Bell, Search } from 'lucide-react'

export default function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="h-16 bg-surface-card border-b border-border-light flex items-center justify-between px-6">
      {/* Left: Breadcrumb / Title */}
      <div className="flex items-center gap-4">
        <h1 className="text-h5 font-semibold text-text-primary">Chat</h1>
      </div>

      {/* Center: Search */}
      <div className="flex-1 max-w-md mx-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
          <input
            type="text"
            placeholder="Search conversations..."
            className="w-full pl-10 pr-4 py-2 rounded-md bg-background-secondary border border-border-medium text-text-primary text-sm placeholder-text-muted focus:border-ai-blue focus:ring-2 focus:ring-ai-blue/20 transition-all duration-fast"
          />
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-md text-text-secondary hover:bg-background-secondary hover:text-text-primary transition-all duration-fast"
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? (
            <Moon className="w-5 h-5" />
          ) : (
            <Sun className="w-5 h-5" />
          )}
        </button>
        
        <button
          className="p-2 rounded-md text-text-secondary hover:bg-background-secondary hover:text-text-primary transition-all duration-fast relative"
          aria-label="Notifications"
        >
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full"></span>
        </button>

        <div className="ml-2 w-8 h-8 rounded-full bg-gradient-to-br from-ai-blue to-ai-purple flex items-center justify-center text-white text-sm font-medium">
          U
        </div>
      </div>
    </header>
  )
}
