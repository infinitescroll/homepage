import Nav from '../components/nav'

export default function IndexPage() {
  return (
    <div className="flex flex-col h-screen bg-cover overflow-hidden"
    >
    
       
      <div className="flex flex-wrap full-width h-screen items-end z-40">
        <div className="container-logo inline-block">
        <h1 className="text-logo block text-6xl">INFINITE</h1>
        <h1 className="text-logo text-logo-bottom inline-block text-6xl">SCROLL</h1>
        </div>
        <ul class="flex flex-grow flex-wrap lg:p-10 p-3 text-2xl ">
          <li className="flex flex-wrap flex-grow w-full justify-center mb-10 px-3">
          <h2 className="block text-3xl text-center">
          Subversive software for an optimistic internet
        </h2>
          </li>
          
          <li class="flex-grow">
          <ul class='flex flex-wrap justify-center'>
          <li class="flex flex-grow  md:mx-10 sm:mx-0 md:justify-start sm:justify-center">
            <a href="mailto:squad@infinitescroll.org">squad@infinitescroll.org
            </a>
            </li>
          <ul className="flex">
          <li className="mx-2"><a href="https://www.github.com/openworklabs/" target="_blank">GitHub</a></li>
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
      <div className="absolute width-full h-screen">
      <video autoPlay='true' muted="true" loop="true" preload="auto" class="object-cover width-full h-full z-10 fixed" style={{objectPosition: `21%`}}>
        <source  src="/infinitescroll.mp4" type="video/mp4" />
      </video>
      </div>  
    </div>
  )
}
