
import { Avatar_01 } from "../(components)/avatar-01";
import { Chart_01 } from "../(components)/chart-01";
import { Chart_02 } from "../(components)/chart-02";
import { Chart_03 } from "../(components)/chart-03";
import { Modal_01 } from "../(components)/modal-01";


export default function Home() {
    return (
        <div className="md:p-10 p-2">
            <nav className="flex items-center justify-between h-24 bg-slate-400 mb-1 rounded-md">
                <Avatar_01 perfil_url="G10vanniMiranda" className="w-12 h-12 ml-2" />
                <h1 className="text-2xl">Giovanni Miranda</h1>
                <Modal_01 />
            </nav>
            <div className="flex flex-col md:flex-row gap-2">
                <Chart_01 />
                <Chart_02 />
                <Chart_03 />
            </div>
        </div>
    );
}
