import Link from "next/link";
import { Button } from "./button";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogDescription } from "./dialog";

const Cadastro_01 = () => {
    return (
        <Dialog>
            <DialogTrigger className="border-2 border-green-600 px-10 rounded-lg hover:text-white hover:bg-green-600 duration-300">Cadastro-se</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Seja bem vindo</DialogTitle>
                    <DialogDescription>
                        <div className="flex flex-col gap-2 border-b-2 border-slate-600 mt-10">
                            <label htmlFor="nome">Nome completo</label>
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
                        <div className="flex flex-col gap-2 border-b-2 border-slate-600">
                            <label htmlFor="nome">Senha</label>
                            <input
                                id="nome"
                                type="password"
                                placeholder="Nome"
                                className="border-2 border-gray-300 rounded-md p-1 bg-slate-800 text-white mb-2"
                            />
                        </div>

                        <div className="flex gap-2">
                            <Link href="/dashboard">
                                <Button className="p-2 bg-green-600 text-white">
                                    Cadastrar
                                </Button>
                            </Link>
                            <Button variant="destructive"> Cancelar </Button>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}

export default Cadastro_01;