import React from 'react'

export default function CardWork(props) {

    let { empresa, cargo, descricao, tecnologiasUsadas, dataInicio, dataFim } = props
    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-zinc-50 ">
            <div class="px-6 py-4">
                <h1 className='text-slate-900 text-2xl font-bold'>{empresa}</h1>
                <p class="text-slate-900 text-base mt-8">
                    <spam className="font-bold">Cargo:</spam> {cargo}
                </p>
                <p class="text-slate-900 text-base mt-2">
                    <spam className="font-bold">Função:</spam> {descricao}
                </p>
                <p class="text-slate-900 text-base mt-2">
                    <spam className="font-bold">Tecnologias Usadas:</spam> {tecnologiasUsadas}
                </p>
            </div>

            <div className="flex justify-evenly items-center mb-4">
                <p class="text-slate-900 text-base">
                    <spam className="font-bold">Data Inicio:</spam> {dataInicio}
                </p>
                <p class="text-slate-900 text-base">
                    <spam className="font-bold">Data Fim:</spam> {dataFim}
                </p>
            </div>
            <div>

            </div>
        </div>
    )
}
