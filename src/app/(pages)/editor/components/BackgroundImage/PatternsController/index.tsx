import RangeSlider from '@/shared/components/RangeSlider'
import usePatternImage from '@editor-store/patternImage.store'

import PatternsItems from './PatternsItems'
import './style.scss'

const PatternsController = (): JSX.Element => {
  const { opacity, blur, patternClass, setOpacity, setBlur, setPattern } = usePatternImage()

  return (
    <div className='editorStyles-section patternsImage'>
      <h3 className='editorStyles-title'>Patterns</h3>
      <PatternsItems patternClass={patternClass} setPattern={setPattern} />
      <RangeSlider range={opacity} onChange={n => setOpacity(n)} label='Opacidad' max={100} />
      <RangeSlider range={blur} onChange={n => setBlur(n)} label='Blur' max={100} />
    </div>
  )
}

export default PatternsController