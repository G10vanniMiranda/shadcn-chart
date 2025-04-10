import { Button } from "@/components/ui/button";
import Cadastro_01 from "@/components/ui/cadastro_01";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="md:p-10 p-2 grid grid-cols-[2fr,1fr] gap-2 bg-slate-900 h-screen">
      <Image src="/home.jpg" alt="" width={1000} height={1000} className="w-full h-full rounded-l-2xl" />

      <div className="bg-slate-200 rounded-r-2xl p-10">
        <h1 className="text-slate-800 text-center">Entrar na sua conta</h1>

        <div className="flex flex-col gap-2 border-b-2 border-slate-600 mt-10">
          <label htmlFor="nome">E-mail</label>
          <input
            id="nome"
            type="text"
            placeholder="Nome"
            className="border-2 border-gray-300 rounded-md p-1 bg-slate-800 text-white mb-2"
          />
        </div>

        <div className="flex flex-col gap-2 border-b-2 border-slate-600">
          <label htmlFor="nome">E-mail</label>
          <input
            id="nome"
            type="text"
            placeholder="Nome"
            className="border-2 border-gray-300 rounded-md p-1 bg-slate-800 text-white mb-2"
          />
        </div>

        <div className="flex gap-2 mt-10">
          <Button asChild variant="secondary" className="border-2 border-green-600">
            <Link href="/dashboard">
              <span className="">Entrar</span>
            </Link>
          </Button>
          {/* <button className="border-2 border-green-600 px-10 rounded-lg hover:text-white hover:bg-green-600 duration-300"> */}
          <Cadastro_01 />
          {/* </button> */}
        </div>

      </div>
    </div>
  );
}
