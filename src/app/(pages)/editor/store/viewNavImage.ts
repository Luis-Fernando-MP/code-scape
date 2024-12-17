import { create } from 'zustand'

export type TViewNavImage = 'TRANSFORM' | 'BRUSH' | 'FRAME'

type TUseViewNavImage = {
  view: TViewNavImage
  setView: (view: TViewNavImage) => void
}

const useViewNavImage = create<TUseViewNavImage>(set => ({
  view: 'FRAME',
  setView: view => set({ view })
}))

export default useViewNavImage
