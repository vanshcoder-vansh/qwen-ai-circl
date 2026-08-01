import { LayoutGrid, Plus } from 'lucide-react'

const projects = [
  { id: 1, name: 'Project Alpha', type: 'Code', updated: '2 hours ago' },
  { id: 2, name: 'Research Notes', type: 'Document', updated: 'Yesterday' },
  { id: 3, name: 'Data Analysis', type: 'Analysis', updated: '3 days ago' },
  { id: 4, name: 'Marketing Copy', type: 'Content', updated: 'Last week' },
]

export default function WorkspacePage() {
  return (
    <div className="h-full p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-h1 font-semibold text-text-primary mb-2">Workspace</h1>
            <p className="text-body text-text-secondary">
              Organize your AI projects and conversations
            </p>
          </div>
          <button className="btn-primary flex items-center gap-2">
            <Plus className="w-5 h-5" />
            New Project
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* New Project Card */}
          <button className="card p-6 flex flex-col items-center justify-center min-h-[200px] border-dashed hover:border-ai-blue hover:bg-background-secondary transition-all duration-fast group">
            <div className="w-12 h-12 rounded-xl bg-background-secondary group-hover:bg-ai-blue/10 flex items-center justify-center mb-4 transition-colors">
              <Plus className="w-6 h-6 text-text-muted group-hover:text-ai-blue transition-colors" />
            </div>
            <span className="text-h5 font-medium text-text-secondary group-hover:text-text-primary transition-colors">
              Create new project
            </span>
          </button>

          {/* Existing Projects */}
          {projects.map((project) => (
            <div
              key={project.id}
              className="card p-6 hover:shadow-md transition-all duration-fast cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-ai-blue/10 to-ai-purple/10 flex items-center justify-center">
                  <LayoutGrid className="w-5 h-5 text-ai-blue" />
                </div>
                <span className="text-caption text-text-muted">{project.updated}</span>
              </div>
              <h3 className="text-h5 font-medium text-text-primary mb-1 group-hover:text-ai-blue transition-colors">
                {project.name}
              </h3>
              <p className="text-small text-text-secondary">{project.type}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
