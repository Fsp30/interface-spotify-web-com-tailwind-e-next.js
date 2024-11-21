import { Home as HomeIcon, Search, Library, ListPlus, Heart} from 'lucide-react'
export default function Sidebar(){
    return (
        <aside className="w-72 bg-zinc-950 p-6">
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-red-500 rounded-full'></div>
            <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
            <div className='w-3 h-3 bg-green-500 rounded-full'></div>
          </div>
          <nav className='space-y-5 mt-3'>
            <a href="#" className='flex items-center gap-3 text-ms font-semibold text-zinc-200'>
              <HomeIcon />
              Home
            </a>
            <a href="#" className='flex items-center gap-3 text-ms font-semibold text-zinc-200'>
              <Search />
              Search
            </a>
            <a href="#" className='flex items-center gap-3 text-ms font-semibold text-zinc-200'>
              <Library />
              Your Library
            </a>
          </nav>
          <nav className='mt-10 space-y-5'>
            <a href="#" className='flex items-center gap-3 text-ms font-semibold text-zinc-200'>
              <ListPlus />
              Create Playlist
            </a>
            <a href="#" className='flex items-center gap-3 text-ms font-semibold text-zinc-200'>
              <Heart />
              Liked Songs
            </a>
          </nav>
          <nav className='mt-6 p-5 gap-2 border-t border-zinc-500 flex flex-col text-yellow-600'>
            <a href="" className='text-sm hover:text-zinc-200'>Stoney</a>
            <a href="" className='text-sm hover:text-zinc-200'>Nacionais</a>
            <a href="" className='text-sm hover:text-zinc-200'>Singles</a>
            <a href="" className='text-sm hover:text-zinc-200'>B&B</a>
            <a href="" className='text-sm hover:text-zinc-200'>Amo Belo</a>
          </nav>
        </aside>

    )
}