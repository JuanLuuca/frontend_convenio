import React from "react";
import { Header } from "../../components/header";
import { Sidebar } from "../../components/sidebar";
import { ToastContainer } from "react-toastify";

export const ConveniadoPessoa = () => {

    return (
        <>
        <Header />
        <section className="flex gap-0 max-[1600px]:gap-2 font-fontPopping z-50 bg-gray-300">
            <Sidebar />
            <main className="p-10 pl-16 max-[1600px]:p-3">
                
            </main>
            <ToastContainer style={{ height: '700px', width: '480px', letterSpacing: '0.04rem', fontSize: '15px'}} theme='dark' />
        </section>
        </>
    )
}