import { useTheme } from '../../contexts/ThemeContext'
import { Moon, Sun, Monitor, Bell, Shield, Palette, Keyboard } from 'lucide-react'

const settingsSections = [
  {
    title: 'Appearance',
    icon: Palette,
    items: [
      {
        key: 'theme',
        label: 'Theme',
        description: 'Choose your preferred color scheme',
        type: 'select',
        options: [
          { value: 'light', label: 'Light', icon: Sun },
          { value: 'dark', label: 'Dark', icon: Moon },
          { value: 'system', label: 'System', icon: Monitor },
        ],
      },
    ],
  },
  {
    title: 'Accessibility',
    icon: Keyboard,
    items: [
      {
        key: 'reducedMotion',
        label: 'Reduced Motion',
        description: 'Minimize animations throughout the app',
        type: 'toggle',
      },
      {
        key: 'highContrast',
        label: 'High Contrast',
        description: 'Increase contrast for better visibility',
        type: 'toggle',
      },
    ],
  },
  {
    title: 'Notifications',
    icon: Bell,
    items: [
      {
        key: 'desktopNotifications',
        label: 'Desktop Notifications',
        description: 'Show notifications on your desktop',
        type: 'toggle',
      },
      {
        key: 'soundEffects',
        label: 'Sound Effects',
        description: 'Play sounds for notifications',
        type: 'toggle',
      },
    ],
  },
  {
    title: 'Privacy',
    icon: Shield,
    items: [
      {
        key: 'history',
        label: 'Chat History',
        description: 'Save your conversation history',
        type: 'toggle',
      },
      {
        key: 'analytics',
        label: 'Usage Analytics',
        description: 'Help improve Forge with anonymous usage data',
        type: 'toggle',
      },
    ],
  },
]

export default function SettingsPage() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="h-full p-8 overflow-auto">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-h1 font-semibold text-text-primary mb-2">Settings</h1>
          <p className="text-body text-text-secondary">
            Customize your Forge experience
          </p>
        </div>

        <div className="space-y-8">
          {settingsSections.map((section) => (
            <div key={section.title} className="card">
              <div className="p-6 border-b border-border-light">
                <div className="flex items-center gap-3">
                  <section.icon className="w-5 h-5 text-ai-blue" />
                  <h2 className="text-h4 font-semibold text-text-primary">{section.title}</h2>
                </div>
              </div>
              
              <div className="divide-y divide-border-light">
                {section.items.map((item) => (
                  <div key={item.key} className="p-6 flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-h5 font-medium text-text-primary mb-1">
                        {item.label}
                      </h3>
                      <p className="text-small text-text-muted">{item.description}</p>
                    </div>
                    
                    {item.type === 'toggle' && (
                      <button
                        className="relative w-12 h-6 rounded-full bg-border-medium transition-colors duration-fast focus:outline-none focus:ring-2 focus:ring-ai-blue focus:ring-offset-2"
                        role="switch"
                        aria-checked="false"
                      >
                        <span className="absolute left-1 top-1 w-4 h-4 rounded-full bg-white transition-transform duration-fast" />
                      </button>
                    )}
                    
                    {item.type === 'select' && item.key === 'theme' && (
                      <div className="flex gap-2">
                        {item.options.map((option) => (
                          <button
                            key={option.value}
                            onClick={() => setTheme(option.value)}
                            className={`p-3 rounded-lg border transition-all duration-fast ${
                              theme === option.value
                                ? 'border-ai-blue bg-ai-blue/10 text-ai-blue'
                                : 'border-border-medium text-text-secondary hover:border-border-strong'
                            }`}
                            aria-label={option.label}
                          >
                            <option.icon className="w-5 h-5" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
