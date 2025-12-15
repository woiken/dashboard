import { ModeToggle } from '@/components/theme-toggle'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/settings/appearance')({
  component: AppearancePage,
})

function AppearancePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Appearance</h1>
        <p className="text-muted-foreground">Customize the look and feel of the application.</p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between rounded-lg border p-6">
          <div>
            <h3 className="font-medium">Theme</h3>
            <p className="text-sm text-muted-foreground">Toggle between light and dark mode.</p>
          </div>
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}
