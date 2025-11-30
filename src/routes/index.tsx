import { ModeToggle } from '@/components/theme-toggle'
import { authClient } from '@/lib/auth-client'
import { createFileRoute } from '@tanstack/react-router'
import {
  GithubIcon,
} from 'lucide-react'

export const Route = createFileRoute('/')({ component: App })

function App() {

  const signIn = async () => {
    await authClient.signIn.social({
      provider: 'github',
      callbackURL: '/dashboard',
    })
  }

  return (
   <main className='min-h-dvh min-w-dvw grid grid-cols-2'>
   <div className="min-h-screen w-full relative">
  {/* Cotton Candy Sky Gradient - Opposite Direction */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: `linear-gradient(225deg, #FFB3D9 0%, #FFD1DC 20%, #FFF0F5 40%, #E6F3FF 60%, #D1E7FF 80%, #C7E9F1 100%)`,
    }}
  />
  {/* Your Content/Components */}
</div>
    <div className='w-full h-full'>
      <div className="flex justify-end items-end p-4">
        <ModeToggle />
      </div>

    <div className='w-full h-full flex items-center justify-center flex-col'>
      <h1 className='text-3xl font-bold'>
        Welcome to Woiken.
      </h1>
      <p className='mt-4 text-lg text-center max-w-md'>
        Use your favorite login provider to sign in or get started.
        </p>
        <button onClick={signIn} className="rounded-xl bg-black text-white px-6 py-3 mt-6">
          <GithubIcon className="inline mr-2" size={20} />
          Sign in with GitHub
        </button>
    </div>
    </div>
   </main>
  )
}
