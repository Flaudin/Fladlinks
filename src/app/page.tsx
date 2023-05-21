/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'

export default function Home() {
  return (
    <nav className='flex items center justify-between flex-wrap p-6'>
      <div className="flex items-center flex-shrink-0 text-white mr-6">
      <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
      <span className="font-semibold text-xl tracking-tight">Flaudin</span>
    </div>
    <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'> 
      <a href="/home" className='font-medium px-3 py-2 text-primary rounded-lg hover:bg-slate-700 hover:text-primary'>Home</a>
      <a href="/about" className='font-medium px-3 py-2 text-primary rounded-lg hover:bg-slate-700 hover:text-primary'>About</a>
      <a href="/skills" className='font-medium px-3 py-2 text-primary rounded-lg hover:bg-slate-700 hover:text-primary'>Skills</a>
      <a href="/projects" className='font-medium px-3 py-2 text-primary rounded-lg hover:bg-slate-700 hover:text-primary'>Projects</a>
      <a href="/cv" className='font-medium px-3 py-2 text-primary rounded-lg hover:bg-slate-700 hover:text-primary'>Resume</a>
      </div>
      <div>
      <a href="#" className="inline-block text-sm px-4 py-4 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Let's Connect</a>
    </div>  
    </nav>
  )
}
