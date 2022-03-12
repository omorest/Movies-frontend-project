import './FilterGenres.css'
import { FC, useEffect, useState } from 'react'
import { fetchGenres } from '../../../api'
import {
  Accordion, AccordionButton, AccordionIcon, AccordionItem,
  AccordionPanel, Checkbox, CheckboxGroup, useCheckboxGroup
} from '@chakra-ui/react'

interface FilterGenresProps {
  onFilterChange: (value: string[]) => void
}

const FilterGenres: FC<FilterGenresProps> = ({ onFilterChange }) => {
  const [genres, setGenres] = useState<any[]>([])
  const { value, getCheckboxProps } = useCheckboxGroup({ defaultValue: [] })

  useEffect(() => {
    const arrayToObject = (arr: string[], key: string) => Object.assign({}, ...arr.map((item: any) => ({ [item[key]]: item })))
    const genresObject = arrayToObject(genres, 'name')
    const genresArr = value.map(genre => genresObject[genre].id.toString())
    onFilterChange(genresArr)
  }, [value])

  useEffect(() => {
    fetchGenres().then((res) => setGenres(res))
  }, [])

  const listCheckboxsGenres = genres.map(({ id, name }) => {
    return <Checkbox {...getCheckboxProps({ value: name })} key={id}>{name}</Checkbox>
  })

  return (
    <div className="filters-genres">
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <AccordionButton width={'100%'} justifyContent={'space-between'}>
            <div className="text-genre">Genres</div>
            <AccordionIcon/>
          </AccordionButton>

          <AccordionPanel>
            <div className="group-checkboxs">
              <CheckboxGroup colorScheme='blue' defaultValue={['action']} >
                {listCheckboxsGenres}
              </CheckboxGroup>
            </div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default FilterGenres
