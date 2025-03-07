import { MoonIcon, SunIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import useTheme from '@/hooks/useTheme'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className='flex flex-col h-screen items-center justify-center gap-4'>
      <p className='text-3xl'>template - bun@1.2.4 - react@19 - shadcn@canary - tailwindcss@4 - SSR</p>
      <div className='flex items-center gap-2'>
        <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} variant='ghost' size='icon'>
          {theme === 'light' ? <SunIcon /> : <MoonIcon />}
        </Button>
        <Link to='/about'>→ About Page</Link>
      </div>
    </div>
  )
}

export default Home
