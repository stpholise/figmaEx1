 import { Link } from 'react-router-dom'

const Navigation = () => {
  const pages = [
    {value: '/about', label: 'About'},
    {value: '/Projects', label:'Projects'},
    {value: '/skills', label:'Skills'},
    {value: '/resume', label:'Resume'},
    {value: '/contact', label:'Contact'}
  ]
  return (
    <nav className='navigation'>
      {
        pages.map((item, index)=> (
          <Link key={index} className={'navItem'}>
            {item.label }
          </Link>
        ))
      }
    </nav>
  )
}

export default Navigation