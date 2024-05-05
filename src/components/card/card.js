import React from 'react'

export default function Card(props) {

    let { title, images, objetivo, funcao, tecnologias, link } = props
    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-zinc-50 ">
            <div className='flex justify-center mt-4'>
                <img
                    className="rounded-full h-[200px] w-[200px] "
                    src={images}
                    alt=""
                ></img>
            </div>
            <div class="px-6 py-4">
                <h1 className='text-slate-900 text-2xl font-bold'>{title}</h1>
                <p class="text-slate-900 text-base">
                    <spam className="font-bold">Objetivo:</spam> {objetivo}
                </p>
                <p class="text-slate-900 text-base">
                    <spam className="font-bold">Função:</spam> {funcao}
                </p>
                <p class="text-slate-900 text-base">
                    <spam className="font-bold">Tecnologias Usadas:</spam> {tecnologias}
                </p>
            </div>

            <div className="flex justify-center mb-4">
                <button className="btn btn-lg">Conhecer Projeto</button>
            </div>
            <div>

            </div>
        </div>
    )
}
