import { Link } from 'react-router-dom'

const About: React.FC = () => {
  return (
    <div className='flex flex-col h-screen items-center justify-center gap-4'>
      <p className='text-4xl'>About Page</p>
      <Link to='/'>← Home Page</Link>
    </div>
  )
}

export default About
