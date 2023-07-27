import React, { useState } from "react";
import { Header } from "../../components/header";
import { Sidebar } from "../../components/sidebar";
import { ToastContainer } from "react-toastify";
import Table from "../../components/table/table";
import ModalInclusao from "../../components/modal/modal";
import { Conveniado } from "../../@types/types";

export const ConveniadoPessoa = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [conveniados, setConveniados] = useState<Conveniado[]>([
        { id: 1, conveniado: 'Juan', convenio: 'FARMA BEM', grupoConvenio: "2", statusConveniado: "ATIVO", matricula: "876509", valorLimite: "1200" },
        { id: 2, conveniado: 'Julia', convenio: 'COMPHARMA', grupoConvenio: "4", statusConveniado: "ATIVO", matricula: "123787", valorLimite: "1400" },
        { id: 3, conveniado: 'Carol', convenio: 'SANTO REMEDIO', grupoConvenio: "4", statusConveniado: "ATIVO", matricula: "123456", valorLimite: "2000" },
        { id: 4, conveniado: 'Barbara', convenio: 'SANTO REMEDIO', grupoConvenio: "3", statusConveniado: "ATIVO", matricula: "123254", valorLimite: "300" },
        { id: 5, conveniado: 'Gabriel', convenio: 'PAGUE MENOS', grupoConvenio: "7", statusConveniado: "ATIVO", matricula: "126798", valorLimite: "600"},
        { id: 6, conveniado: 'Joao', convenio: 'FARMACIA DO LUIS', grupoConvenio: "7", statusConveniado: "INATIVO", matricula: "126587", valorLimite: "300" },
        { id: 7, conveniado: 'Davi', convenio: 'A FARMACIA', grupoConvenio: "8", statusConveniado: "INATIVO", matricula: "678912", valorLimite: "100" },
        { id: 8, conveniado: 'Junior', convenio: 'FARMA HONDA', grupoConvenio: "7", statusConveniado: "INATIVO", matricula: "123465", valorLimite: "60" },
        { id: 9, conveniado: 'Jean', convenio: 'COMPHARMA', grupoConvenio: "2", statusConveniado: "INATIVO", matricula: "213245", valorLimite: "10000" },
    ]);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSaveConveniado = (newConveniado: Conveniado) => {
        // Lógica para salvar o novo conveniado na lista de conveniados
        setConveniados((prevConveniados) => [...prevConveniados, newConveniado]);
        handleCloseModal();
    };

    return (
        <>
        <Header />
        <section className="flex gap-0 max-[1600px]:gap-2 font-fontPopping z-50">
            <Sidebar />
            <main className="p-10 pl-16 max-[1600px]:p-3 mt-10">
                <button className="w-52 rounded-sm mb-4 h-12 outline-none border-none font-medium bg-green-300 hover:bg-green-400" onClick={handleOpenModal}>Inserir Convêniado</button>
                <Table rows={conveniados} />
            </main>
            <ToastContainer
                style={{ height: '700px', width: '480px', letterSpacing: '0.04rem', fontSize: '15px' }}
                theme="dark"
            />
            <ModalInclusao isOpen={isModalOpen} onClose={handleCloseModal} />
        </section>
        </>
    )
}