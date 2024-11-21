import Image from 'next/image';
export default function Made() {
    return (
        <div>
            <h2 className='font-semibold text-2xl mt-10'>Made for You</h2>
          <div className='grid grid-cols-6 gap-4 mt-4'>
            <a href='' className='bg-white/5 rounded-md p-3 flex flex-col gap-2 hover:bg-white/10'>
              <Image src='/stoney.jpg' alt='Capa do álbum Stoney do artista Post Malone' className='w-full' width={120} height={120} />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-zinc-500 text-sm'>Post Malone, Travis Scott</span>
            </a>
            <a href='' className='bg-white/5 rounded-md p-3 flex flex-col gap-2 hover:bg-white/10'>
              <Image src='/stoney.jpg' alt='Capa do álbum Stoney do artista Post Malone' className='w-full' width={120} height={120} />
              <strong className='font-semibold'>Daily Mix 2</strong>
              <span className='text-zinc-500 text-sm'>Post Malone</span>
            </a>
            <a href='' className='bg-white/5 rounded-md p-3 flex flex-col gap-2 hover:bg-white/10'>
              <Image src='/stoney.jpg' alt='Capa do álbum Stoney do artista Post Malone' className='w-full' width={120} height={120} />
              <strong className='font-semibold'>Daily Mix 3</strong>
              <span className='text-zinc-500 text-sm'>Post Malone, Travis Scott, Don Toliver</span>
            </a>
            <a href='' className='bg-white/5 rounded-md p-3 flex flex-col gap-2 hover:bg-white/10'>
              <Image src='/stoney.jpg' alt='Capa do álbum Stoney do artista Post Malone' className='w-full' width={120} height={120} />
              <strong className='font-semibold'>Daily Mix 4</strong>
              <span className='text-zinc-500 text-sm'>Post Malone, Travis Scott, Justin </span>
            </a>
            <a href='' className='bg-white/5 rounded-md p-3 flex flex-col gap-2 hover:bg-white/10'>
              <Image src='/stoney.jpg' alt='Capa do álbum Stoney do artista Post Malone' className='w-full' width={120} height={120} />
              <strong className='font-semibold'>Daily Mix 5</strong>
              <span className='text-zinc-500 text-sm'>Post Malone, Travis Scott, Sza</span>
            </a>
          </div>
        </div>
    )
}