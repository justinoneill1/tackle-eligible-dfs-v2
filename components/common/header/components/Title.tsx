import Image from "next/image";

export default function Title() {
    return (
        <div id="header-title" className="flex items-center gap-3 cursor-pointer group">
            <div id="header-title-logo" className="w-7 h-7 bg-secondary flex items-center justify-center rounded-sm">
                <Image alt="logo" src="/TELogo.png" width="28" height="28"/>
            </div>
            <span id="header-title-text" className="text-lg font-black tracking-tighter text-foreground uppercase italic">
                TACKLE
                <span className="text-primary">
                    ELIGIBLEDFS
                </span>
            </span>
        </div>
    )
}