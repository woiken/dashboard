import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { authClient } from '@/lib/auth-client'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/settings/profile')({
  component: ProfilePage,
})

function ProfilePage() {
  const { data: session } = authClient.useSession()
  const user = session?.user

  const initials = user?.name
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase() || user?.email?.[0]?.toUpperCase() || "?"

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Profile</h1>
        <p className="text-muted-foreground">Manage your profile information.</p>
      </div>

      <div className="space-y-4">
        <div className="rounded-lg border p-6">
          <div className="flex items-center gap-6">
            <Avatar className="size-20">
              <AvatarImage src={user?.image || undefined} alt={user?.name || "User"} />
              <AvatarFallback className="text-2xl">{initials}</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h2 className="text-xl font-semibold">{user?.name || "Unknown"}</h2>
              <p className="text-muted-foreground">{user?.email}</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border p-6 space-y-4">
          <h3 className="font-medium">Account Details</h3>
          <div className="grid gap-4">
            <div className="grid grid-cols-[120px_1fr] gap-2">
              <span className="text-sm text-muted-foreground">Name</span>
              <span className="text-sm">{user?.name || "Not set"}</span>
            </div>
            <div className="grid grid-cols-[120px_1fr] gap-2">
              <span className="text-sm text-muted-foreground">Email</span>
              <span className="text-sm">{user?.email || "Not set"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
