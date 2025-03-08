import { MoonIcon, SunIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import useTheme from '@/hooks/use-theme'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Home: React.FC = () => {
  const { theme, setTheme } = useTheme()
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch('/api/get-count')
      .then(res => res.json())
      .then(data => setCount(data.count))
  }, [])

  return (
    <div className='flex flex-col h-screen items-center justify-center gap-4'>
      <p className='text-3xl'>template - bun@1.2.4 - react@19 - shadcn@canary - tailwindcss@4 - SSR</p>
      <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} variant='ghost' size='icon'>
        {theme === 'light' ? <SunIcon /> : <MoonIcon />}
      </Button>
      <Link to='/about'>→ About Page</Link>
      <Button
        onClick={() =>
          fetch('/api/count-plus')
            .then(res => res.json())
            .then(data => setCount(data.count))
        }
      >
        count++
      </Button>
      <p>server count: {count}</p>
    </div>
  )
}

export default Home
