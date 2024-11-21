import { ChevronLeft, ChevronRight, Play} from 'lucide-react'
import Image from 'next/image';
export default function Welcome() {
    return (
        <div>
        <div className='flex items-center gap-4'>
            <button className=' rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>
          <h1 className="text-3xl text-semibold mt-9">Good Morning</h1>
          
          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a href='' className='bg-white/5 rounded flex items-center gap-4 group overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src='/stoney.jpg' alt='Capa do álbum Stoney do artista Post Malone' width={105} height={105} />
              <strong>White Iverson</strong>
              <button className='p-2 rounded-full w-12 h-12 flex items-center justify-center pl-1 bg-green-400 text-black ml-auto mr-6 invisible group-hover:visible'>
                <Play fill='bg-black' />
              </button>
            </a>
            <a href='' className='bg-white/5 rounded flex items-center gap-4 group overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src='/stoney.jpg' alt='Capa do álbum Stoney do artista Post Malone' width={105} height={105} />
              <strong>Go Flex</strong>
              <button className='p-2 rounded-full w-12 h-12 flex items-center justify-center pl-1 bg-green-400 text-black ml-auto mr-6 invisible group-hover:visible'>
                <Play fill='bg-black' />
              </button>
            </a>
            <a href='' className='bg-white/5 rounded flex items-center gap-4 group overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src='/stoney.jpg' alt='Capa do álbum Stoney do artista Post Malone' width={105} height={105} />
              <strong>Congratulations</strong>
              <button className='p-2 rounded-full w-12 h-12 flex items-center justify-center pl-1 bg-green-400 text-black ml-auto mr-6 invisible group-hover:visible'>
                <Play fill='bg-black' />
              </button>
            </a>
            <a href='' className='bg-white/5 rounded flex items-center gap-4 group overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src='/stoney.jpg' alt='Capa do álbum Stoney do artista Post Malone' width={105} height={105} />
              <strong>Deja Vu</strong>
              <button className='p-2 rounded-full w-12 h-12 flex items-center justify-center pl-1 bg-green-400 text-black ml-auto mr-6 invisible group-hover:visible'>
                <Play fill='bg-black' />
              </button>
            </a>
            <a href='' className='bg-white/5 rounded flex items-center gap-4 group overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src='/stoney.jpg' alt='Capa do álbum Stoney do artista Post Malone' width={105} height={105} />
              <strong>Too Young</strong>
              <button className='p-2 rounded-full w-12 h-12 flex items-center justify-center pl-1 bg-green-400 text-black ml-auto mr-6 invisible group-hover:visible'>
                <Play fill='bg-black' />
              </button>
            </a>
            <a href='' className='bg-white/5 rounded flex items-center gap-4 group overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src='/stoney.jpg' alt='Capa do álbum Stoney do artista Post Malone' width={105} height={105} />
              <strong>Yours Truly, Austin Post</strong>
              <button className='p-2 rounded-full w-12 h-12 flex items-center justify-center pl-1 bg-green-400 text-black ml-auto mr-6 invisible group-hover:visible'>
                <Play fill='bg-black' />
              </button>
            </a>
          </div>
          </div>
    )
}