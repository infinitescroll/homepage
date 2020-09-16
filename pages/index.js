import Nav from '../components/nav'

export default function IndexPage() {
  return (
    <div class="flex flex-col h-doublescreen bg-cover overflow-hidden"
    style={{backgroundImage: `url(${'infinitedesert-keith-hardy.jpg'})`}}
    >
      {/* <Nav /> */}
      <div className='block'>
      <h1 className="text-header">Infinite</h1>
      </div>
      <div className="flex justify-center h-auto py-20">
        <h2 className="lg:text-4xl sm:text-2xl  text-center">
          Self-sustaining internet systems for the world to come
        </h2>
      </div>
      <div class="flex h-screen items-end">
        <ul class="flex flex-grow flex-wrap p-10 lg:text-3xl sm:text-2xl">
          <li class="flex flex-grow md:justify-start sm:justify-center">
            <a href="mailto:squad@infinitescroll.org">squad@infinitescroll.org
            </a>
            </li>
          <li class="flex-grow">
          <ul class='flex justify-around'>
          <li><a href="https://www.github.com/openworklabs/" target="_blank">GitHub</a></li>
          <li>
            <a href="https://www.twitter.com/infinitescroll/" target="_blank">Twitter
            </a>
            </li>
          <li>
            <a href="https://www.are.na/infinitescroll/" target="_blank">
            Are.na
            </a>
          </li>
          </ul>
          </li>

        </ul>
      </div>
      <h1 className="text-footer center">Scroll</h1>
    </div>
  )
}
