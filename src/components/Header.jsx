import React, { useCallback, useContext, useState } from 'react';
import { ItemContext } from '../context/ItemContext';
import { DarkModeContext } from '../context/DarkModeContext';
import { IoMdSunny, IoMdMoon } from 'react-icons/io';
import Button from './Button';
import ButtonIcon from './ButtonIcon';

export default function Header() {
  const { dark, toggleDarkMode } = useContext(DarkModeContext);
  const { items, setLists } = useContext(ItemContext);
  const [filterIdx, setFilterIdx] = useState(0);

  const filterHandler = useCallback(
    (category) => {
      switch (category) {
        case 'All':
          setLists(items);
          break;
        case 'Active':
          setLists(items.filter((item) => item.value === false));
          break;
        case 'Completed':
          setLists(items.filter((item) => item.value === true));
          break;
        default:
          return;
      }
    },
    [setLists, items]
  );

  const filterBtns = [
    { id: 0, title: 'All', ariaLabel: '모두 보기', func: filterHandler },
    { id: 1, title: 'Active', ariaLabel: '할 일 보기', func: filterHandler },
    {
      id: 2,
      title: 'Completed',
      ariaLabel: '완료된 일 보기',
      func: filterHandler,
    },
  ];

  return (
    <header className="header">
      <ButtonIcon
        type="button"
        label="칼라 모드 변환"
        variant="circle"
        size="medium"
        color="primary"
        onClick={toggleDarkMode}
      >
        {dark === 'dark' ? (
          <span>
            다크모드
            <IoMdMoon />
          </span>
        ) : (
          <span>
            라이트모드
            <IoMdSunny />
          </span>
        )}
      </ButtonIcon>
      <ul className="filter">
        {filterBtns.map((filter) => (
          <li
            key={filter.id}
            // className={filter.id === filterIdx ? 'active' : null}
            onClick={() => setFilterIdx(filter.id)}
          >
            <Button
              type="button"
              label={filter.ariaLabel}
              variant="text"
              size="medium"
              className={filter.id === filterIdx ? 'active' : null}
              onClick={() => filter.func(filter.title)}
            >
              {filter.title}
            </Button>
          </li>
        ))}
      </ul>
    </header>
  );
}
