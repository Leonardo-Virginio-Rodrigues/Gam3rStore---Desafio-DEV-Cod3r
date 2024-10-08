'use client'
import {Produto} from "@gstore/core"
import useProdutos from "@/src/data/hooks/useProdutos"
import { useEffect, useState } from "react"
import TituloProduto from "@/src/components/produto/TituloProduto"
import InformacoesProduto from "@/src/components/produto/InformacoesProduto"
import BannerCompra from "@/src/components/produto/BannerCompra"
import MedidorDePreco from "@/src/components/produto/MedidorDePreco"
import AvaliacoesUsuarios from "@/src/components/produto/AvaliacoesUsuarios"
import AvaliacaoEspecializada from "@/src/components/produto/AvaliacaoEspecializada"
import ProdutoNaoEncontrado from "@/src/components/produto/ProdutoNaoEncontrado"

export default function PaginaProduto (props: any){
    const {obterProdutoPorId} = useProdutos()
    const [produto, setProduto] = useState<Produto | null>(null)
    useEffect(() => {
        obterProdutoPorId(+props.params.id).then(setProduto)
    }, [props.params.id])

    return produto ?(
    <div className="flex flex-col gap-20">
        <div className="flex flex-col gap-10">
            <TituloProduto produto={produto}/>
            <InformacoesProduto produto={produto}/>
            <BannerCompra produto={produto}/>
            <MedidorDePreco produto={produto}/>
        </div>
        <AvaliacoesUsuarios produto={produto}/>
        <AvaliacaoEspecializada produto={produto}/>
    </div>
    ): (<ProdutoNaoEncontrado/>)
    }