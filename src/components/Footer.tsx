import {Heart, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, Laptop, Volume, Share2, LayoutList} from 'lucide-react'
import Image from 'next/image';
export default function Footer() {
    return (
        <div>
            <div className="flex items-center gap-2">
                <Image src="/stoney.jpg" alt="Capa do álbum Stoney do artista Post Malone" width={50} height={50} />
                <div className="flex flex-col gap-1">
                    <strong className="font-normal">White Iverson</strong>
                    <span className="text-xs text-zinc-500">Post Malone</span>
                </div>
                <a className="ml-4" href="">
                    <Heart size={20} className='text-zinc-200' />
                </a>
            </div>

            <div className="flex items-center justify-center flex-1 flex-col">
                <div className="flex items-center gap-6">
                    <Shuffle size={20} className='text-zinc-200' />
                    <SkipBack size={20} className='text-zinc-200' />
                    <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-600 text-black">
                        <Play fill="bg-black" />
                    </button>
                    <SkipForward size={20} className='text-zinc-200' />
                    <Repeat size={20} className='text-zinc-200' />
                </div>
                <div className='flex items-center gap-2 mt-5'>
                    <span className='text-xs text-zinc-500'>1:34</span>
                    <div className='h-1 rounded-full w-96 bg-zinc-600'>
                        <div className='bg-zinc-200 w-40 h-1 rounded-full'></div>
                    </div>
                    <span className='text-xs text-zinc-500'>3:17</span>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <Mic2 size={20} />
                <Laptop size={20} />
                <LayoutList size={20} />
                <div className='flex items-center gap-1'>
                    <Volume size={20} />
                    <div className='h-1 rounded-full w-40 bg-zinc-600'>
                        <div className='bg-zinc-200 w-10 h-1 rounded-full'></div>
                    </div>
                </div>
                <Share2 size={20} />
            </div>
        </div>
    )
}