import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import ChatPage from './pages/chat/ChatPage'
import WorkspacePage from './pages/workspace/WorkspacePage'
import SettingsPage from './pages/settings/SettingsPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ChatPage />} />
        <Route path="workspace" element={<WorkspacePage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  )
}

export default App
