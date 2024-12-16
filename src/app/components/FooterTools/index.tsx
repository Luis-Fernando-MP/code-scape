'use client'

import { useMonacoStore } from '@/app/(pages)/(current)/store/config-monaco.store'
import FullScreen from '@/shared/components/FullScreen'
import useMonacoTools from '@/shared/hooks/monaco-tools'
import { LayersIcon, Redo2Icon, Share2Icon, Undo2Icon } from 'lucide-react'
import Link from 'next/link'
import { type JSX } from 'react'

import DownloadTools from './DownloadTools'
import MonacoFontTools from './MonacoFontTools'
import ToolsModal from './ToolsModal'
import './style.scss'

interface IFooterTools {
  className?: string
}

const FooterTools = ({ className }: IFooterTools): JSX.Element => {
  const { handleRedo, handleUndo } = useMonacoTools()

  return (
    <footer className={`${className} tools`}>
      <ToolsModal />
      <section className='tools-section center'>
        <div>
          <FullScreen className='tools-action btn-tooltip'>
            <p className='tooltip top'>Maximizar</p>
          </FullScreen>

          <button className='tools-action btn-tooltip' onClick={handleUndo}>
            <Undo2Icon />
            <p className='tooltip top'>Deshacer</p>
          </button>
          <button className='tools-action btn-tooltip border-right' onClick={handleRedo}>
            <Redo2Icon />
            <p className='tooltip top'>Rehacer</p>
          </button>
        </div>

        <MonacoFontTools />
        <DownloadMonacoTools />
      </section>

      <section className='tools-section'>
        <button className='tools-action btn-tooltip'>
          <Share2Icon />
          <p className='tooltip top'>Compartir</p>
        </button>

        <Link href='/editor' className='tools-action tools-especial btn-tooltip badge dev'>
          <LayersIcon />
          <h5>Editar</h5>
          <p className='tooltip top'>Editar imagen</p>
        </Link>
      </section>
    </footer>
  )
}

function DownloadMonacoTools(): JSX.Element {
  const refIde = useMonacoStore(s => s.refIde)

  return <DownloadTools refElement={refIde} />
}

export default FooterTools
