import { Fragment, useContext } from 'react';
import { Listbox } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/solid';
import { StyledListBoxButton, StyledListBoxOption, StyledListBoxOptions } from './Listbox.styled';
import mockData from '../../Data/mockData';
import BoardContext from '../../Context/BoardContext';

export default function () {
    const [selectedBoard, setSelectedBoard] = useContext(BoardContext);
    return (
        <Listbox value={selectedBoard} onChange={setSelectedBoard}>
            <Listbox.Button as={StyledListBoxButton} >{selectedBoard.name}</Listbox.Button>
            <Listbox.Options as={StyledListBoxOptions}>
                {mockData.map((board) => (
                    /* Use the `active` state to conditionally style the active option. */
                    /* Use the `selected` state to conditionally style the selected option. */
                    <Listbox.Option as={StyledListBoxOption} key={board.id} value={board} as={Fragment}>
                        {({ active, selected }) => (

                            <StyledListBoxOption>
                                {board.name}
                                {selected && <div><CheckIcon /></div>}
                            </StyledListBoxOption>
                        )}
                    </Listbox.Option>
                ))}
            </Listbox.Options>
        </Listbox>
    )
}