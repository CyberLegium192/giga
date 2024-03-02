import {Link, useLocation} from 'react-router-dom'
import {useState, useEffect} from 'react'

const navbar = () => {
  const [active, setActive] = useState(false)
  
  
  
  return(
  <div className='bg-[#f5f4f4] w-full'>
    <div className='p-3 md:flex justify-between items-center md:px-9'>
      
      <div className='w-36 md:w-36'>
        <img src='https://gigaofficial.id/aset/icon/giga.png' className='w-full object-cover'/>
      </div>
      
      <ul className='md:gap-x-9 md:flex-row md:w-auto md:h-auto md:static md:bg-transparent flex flex-col items-center justify-center h-screen absolute top-0 bg-red-500'>
        
        <li className=''>
          <Link to='/' className='font-poppins md:text-xl font-bold tracking-wide relative before:w-full before:absolute before:bottom-0 before:h-[2px] before:bg-primary before:scale-x-0 hover:before:scale-x-100 before:transition-all before:origin-left before:duration-300
          '>Home</Link>
        </li>
        <li className=''>
          <Link to='/about' className='font-poppins md:text-xl font-bold tracking-wide relative before:w-full before:absolute before:bottom-0 before:h-[2px] before:bg-primary before:scale-x-0 hover:before:scale-x-100 before:transition-all before:origin-left before:duration-300
          '>About</Link>
        </li>
        <li className=''>
          <Link to='/Telent' className='font-poppins md:text-xl font-bold tracking-wide relative before:w-full before:absolute before:bottom-0 before:h-[2px] before:bg-primary before:scale-x-0 hover:before:scale-x-100 before:transition-all before:origin-left before:duration-300
          '>Telent</Link>
        </li>
        
        
        
        
      </ul>
    </div>
  </div>  
    
    
  )
}
export default navbar