import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const About: React.FC = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    fetch('/api/get-count')
      .then(res => res.json())
      .then(data => setCount(data.count))
  }, [])
  return (
    <div className='flex flex-col h-screen items-center justify-center gap-4'>
      <p className='text-4xl'>About Page</p>
      <Link to='/'>← Home Page</Link>
      <p>server count: {count}</p>
    </div>
  )
}

export default About
