import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Blinds, House, SquareX } from "lucide-react"
import Link from "next/link"
import { Avatar_01 } from "./avatar-01"

export function Modal_01() {
    return (
        <Sheet >
            <SheetTrigger asChild>
                <Button variant="ghost">
                    <Blinds />
                </Button>
            </SheetTrigger>
            <SheetContent className="w-44">
                <SheetHeader>
                    <SheetTitle>
                        <Avatar_01 perfil_url="G10vanniMiranda" />
                    </SheetTitle>
                    <SheetDescription>
                        Perfil
                    </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col gap-2 py-2 h-[60%]">
                    <Link href="/" className="flex items-center justify-between p-2 hover:bg-slate-200 hover:rounded-md duration-300">
                        <h3>Home</h3>
                        <House />
                    </Link>
                    <Link href="/" className="flex items-center justify-between p-2 hover:bg-slate-200 hover:rounded-md duration-300">
                        <h3>Home</h3>
                        <House />
                    </Link>
                    <Link href="/" className="flex items-center justify-between p-2 hover:bg-slate-200 hover:rounded-md duration-300">
                        <h3>Home</h3>
                        <House />
                    </Link>
                    <Link href="/" className="flex items-center justify-between p-2 hover:bg-slate-200 hover:rounded-md duration-300">
                        <h3>Home</h3>
                        <House />
                    </Link>
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit" className="flex items-center justify-between p-2 hover:bg-slate-200 hover:rounded-md duration-300">
                            <SquareX />
                            <h3>Sair</h3>
                        </Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
