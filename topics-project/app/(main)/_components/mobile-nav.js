import { Bolt, Plus, NotebookPen } from 'lucide-react';
import clsx from 'clsx';

export default function MobileNav({ router, pathName }){
    return (
        <div className="absolute w-6/12 h-16 bottom-5 bg-customSecondary/25 z-50 right-0 left-0 mx-auto rounded-full">
            <div className="px-4 w-full mx-auto flex justify-between h-full items-center overflow-hidden">
                <div className={'group relative h-full w-fit flex items-center'}>
                    <div className='w-10 h-10 rounded-full bg-customPrimary flex justify-center items-center'>
                        <NotebookPen className={clsx('w-7 h-7', pathName === "/home" ? "text-customAccent" : "text-customSecondary")} />
                    </div>
                    <div className={clsx("absolute h-0.5 w-5/12 mx-auto right-0 left-0 rounded-full bottom-0 bg-customAccent transition-all duration-300 translate-y-2", pathName === "/home" ? "translate-y-0 " : "")}></div>
                </div>
                <div className='group relative h-full w-fit flex items-center'>
                    <div className='w-10 h-10 rounded-full bg-customPrimary flex justify-center items-center'>
                        <Plus className={clsx('w-7 h-7', pathName === "/addFood" ? "text-customAccent" : "text-customSecondary")} />
                    </div>
                    <div className={clsx("absolute h-0.5 w-5/12 mx-auto right-0 left-0 rounded-full bottom-0 bg-customAccent transition-all duration-300 translate-y-2", pathName === "/addFood" ? "translate-y-0" : "")}></div>
                </div>
                <div className='group relative h-full w-fit flex items-center'>
                    <div className='w-10 h-10 rounded-full bg-customPrimary flex justify-center items-center'>
                        <Bolt className={clsx('w-7 h-7', pathName === "/settings" ? "text-customAccent" : "text-customSecondary")} />
                    </div>
                    <div className={clsx("absolute h-0.5 w-5/12 mx-auto right-0 left-0 rounded-full bottom-0 bg-customAccent transition-all duration-300 translate-y-2", pathName === "/settings" ? "translate-y-0" : "")}></div>
                </div>
            </div>
        </div>
    )
}