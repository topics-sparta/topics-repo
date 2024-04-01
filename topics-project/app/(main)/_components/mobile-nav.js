import { Bolt, Plus, NotebookPen } from 'lucide-react';
import clsx from 'clsx';

export default function MobileNav({ router, pathName }){
    return (
        <div className="absolute w-6/12 h-16 bottom-5 bg-customSecondary/25 z-50 right-0 left-0 mx-auto rounded-full">
            <div className="px-4 w-full mx-auto flex justify-between h-full items-center overflow-hidden">
                <div className={'group relative h-full w-fit flex items-center'}>
                    <div className='w-10 h-10 rounded-full bg-customPrimary flex justify-center items-center'>
                        <NotebookPen className={clsx('w-7 h-7', pathName.startsWith("/diary") ? "text-customAccent" : "text-customSecondary")} />
                    </div>
                    <div className={clsx("absolute h-0.5 w-5/12 mx-auto right-0 left-0 rounded-full bottom-0 bg-customAccent transition-all duration-300", pathName.startsWith("/diary") ? "translate-y-0 " : "translate-y-2")}></div>
                </div>
                <div className='group relative h-full w-fit flex items-center'>
                    <div className='w-10 h-10 rounded-full bg-customPrimary flex justify-center items-center'>
                        <Plus className={clsx('w-7 h-7', pathName.startsWith("/addFood") ? "text-customAccent" : "text-customSecondary")} />
                    </div>
                    <div className={clsx("absolute h-0.5 w-5/12 mx-auto right-0 left-0 rounded-full bottom-0 bg-customAccent transition-all duration-300", pathName.startsWith("/addFood") ? "translate-y-0" : "translate-y-2")}></div>
                </div>
                <div className='group relative h-full w-fit flex items-center' onClick={() => router.push("/settings/profile")}>
                    <div className='w-10 h-10 rounded-full bg-customPrimary flex justify-center items-center'>
                        <Bolt className={clsx('w-7 h-7', pathName.startsWith("/settings") ? "text-customAccent" : "text-customSecondary")} />
                    </div>
                    <div className={clsx("absolute h-0.5 w-5/12 mx-auto right-0 left-0 rounded-full bottom-0 bg-customAccent transition-all duration-300", pathName.startsWith("/settings") ? "translate-y-0" : "translate-y-2")}></div>
                </div>
            </div>
        </div>
    )
}