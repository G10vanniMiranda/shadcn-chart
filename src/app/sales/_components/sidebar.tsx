import { Button } from "@/components/ui/button";
import { LayoutGridIcon, PackageIcon, ShoppingBagIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
    const patname = usePathname();
    return (
        <div className="bg-white w-40 border h-scree flex flex-col gap-2">

            <Button variant={patname === "/sales" ? "destructive" : "secondary"}
                className="justify-start gap-2">
                <LayoutGridIcon />
                <Link href="/sales">Vendas</Link>
            </Button>

            <Button variant={patname === "/sales/products" ? "destructive" : "secondary"}
                className="justify-start gap-2">
                <PackageIcon />
                <Link href="/sales/products">Produtos</Link>
            </Button>

            <Button variant={patname === "/sales/services" ? "destructive" : "secondary"}
                className="justify-start gap-2">
                <ShoppingBagIcon />
                <Link href="/sales/services">Serviços</Link>
            </Button>
        </div>
    );
}

export default Sidebar;