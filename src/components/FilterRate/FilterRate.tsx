import './FilterRate.css'
import { FC, useState } from 'react'
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Tooltip
} from '@chakra-ui/react'

interface FilterRateProps {
  onFilterChange: (sliderValue: number) => void
  sliderValue?: number
}

const FilterRate: FC<FilterRateProps> = ({ sliderValue, onFilterChange }) => {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div className="filter-rate">
      <div className="text-genre">Minimum rating</div>
      <Slider aria-label='slider-ex-1'
        className="slider"
        defaultValue={5}
        min={0}
        max={10}
        onChange={onFilterChange}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <SliderMark
          value={sliderValue || 0}
          textAlign='center'
          bg='blue.500'
          color='white'
          mt='-10'
          ml='-5'
          w='12'
        >
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>

        <Tooltip
          hasArrow
          bg='blue.500'
          color='white'
          placement='top'
          isOpen={showTooltip}
          label={`${sliderValue}`}
        >
          <SliderThumb />
        </Tooltip>
      </Slider>
    </div>
  )
}

export default FilterRate
