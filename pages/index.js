import Nav from '../components/nav'

export default function IndexPage() {
  return (
    <div className="flex flex-col h-screen bg-cover overflow-hidden"
    >
    
       
      <div className="flex flex-wrap xl:w-1/3 lg:w-1/2 w-full h-screen items-end z-40 lg:p-10 p-3 xl:p-12 text-2xl">
        <div className="container-logo inline-block">
        <h1 className="text-logo block">INFINITE</h1>
        <h1 className="text-logo text-logo-bottom inline-block">SCROLL</h1>
        </div>
        <ul className="flex flex-col w-full flex-wrap">
          <li className="flex flex-wrap flex-grow  justify-start mb-4 xl:mb-16">
          <h2 className="block xl:text-6xl lg:text-3xl text-2xl text-left">
          Subversive software for optimistic internets
        </h2>
          </li>
          
          <li className="flex-grow max-w-xs">
          <ul className='flex flex-wrap justify-start xl:text-5xl text-1xl'>
          <li className="flex flex-grow md:justify-start my-3 xl:my-6">
            <a href="mailto:squad@infinitescroll.org?Subject=Squaaaa">squad@infinitescroll.org
            </a>
            </li>
          <ul className="flex">
          <li className="mr-2"><a href="https://www.github.com/openworklabs/" target="_blank">GitHub</a></li>
          <li className="mx-2">
            <a href="https://www.twitter.com/infinitescroll/" target="_blank">Twitter
            </a>
            </li>
          <li className="mx-2">
            <a href="https://www.are.na/infinitescroll/" target="_blank">
            Are.na
            </a>
          </li>
          </ul>
          </ul>
          </li>

        </ul>
      </div>
      <div className="absolute w-full h-screen">
      <video autoPlay='true' muted="true" loop="true" preload="auto" className="object-cover w-full h-full z-10 fixed" style={{objectPosition: `21%`}} poster="/infinitescroll.jpg">
        <source  src="/infinitescroll.mp4" type="video/mp4" />
      </video>
      </div>  
    </div>
  )
}
