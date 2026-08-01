import { useState } from 'react'
import { Send, Sparkles } from 'lucide-react'

export default function ChatPage() {
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!message.trim()) return
    console.log('Sending message:', message)
    setMessage('')
  }

  return (
    <div className="h-full flex flex-col">
      {/* Welcome State */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center max-w-2xl">
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-ai-blue to-ai-purple flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-hero font-semibold text-text-primary mb-4">
            Welcome to Forge
          </h2>
          <p className="text-body-lg text-text-secondary mb-8">
            Your intelligent AI operating system. Ask anything, create anything.
          </p>
          
          {/* Suggestion Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="card p-4 text-left hover:shadow-md transition-all duration-fast group">
              <h3 className="text-h5 font-medium text-text-primary mb-1 group-hover:text-ai-blue transition-colors">
                Write code
              </h3>
              <p className="text-small text-text-muted">
                Generate, debug, and explain code in any language
              </p>
            </button>
            
            <button className="card p-4 text-left hover:shadow-md transition-all duration-fast group">
              <h3 className="text-h5 font-medium text-text-primary mb-1 group-hover:text-ai-blue transition-colors">
                Analyze data
              </h3>
              <p className="text-small text-text-muted">
                Get insights and visualizations from your data
              </p>
            </button>
            
            <button className="card p-4 text-left hover:shadow-md transition-all duration-fast group">
              <h3 className="text-h5 font-medium text-text-primary mb-1 group-hover:text-ai-blue transition-colors">
                Create content
              </h3>
              <p className="text-small text-text-muted">
                Write articles, emails, and creative pieces
              </p>
            </button>
            
            <button className="card p-4 text-left hover:shadow-md transition-all duration-fast group">
              <h3 className="text-h5 font-medium text-text-primary mb-1 group-hover:text-ai-blue transition-colors">
                Solve problems
              </h3>
              <p className="text-small text-text-muted">
                Break down complex challenges step by step
              </p>
            </button>
          </div>
        </div>
      </div>

      {/* Composer */}
      <div className="border-t border-border-light p-6">
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
          <div className="relative flex items-end gap-3 p-2 rounded-xl bg-background-secondary border border-border-medium focus-within:border-ai-blue focus-within:ring-2 focus-within:ring-ai-blue/20 transition-all duration-fast">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  handleSubmit(e)
                }
              }}
              placeholder="Ask Forge anything..."
              rows={1}
              className="flex-1 bg-transparent border-none outline-none resize-none text-text-primary placeholder-text-muted text-body px-3 py-2 max-h-32"
              style={{ minHeight: '44px' }}
            />
            <button
              type="submit"
              disabled={!message.trim()}
              className="p-3 rounded-lg bg-ai-blue text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition-all duration-fast active:scale-95"
              aria-label="Send message"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          <p className="text-caption text-text-muted text-center mt-3">
            Forge can make mistakes. Consider checking important information.
          </p>
        </form>
      </div>
    </div>
  )
}
