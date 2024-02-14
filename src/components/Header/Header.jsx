import React from 'react';
import { useItemContext } from '../../context/ItemContext';
import { useDaekModeContext } from '../../context/DarkModeContext';
import { IoMdSunny, IoMdMoon } from 'react-icons/io';
import Button from '../Button/Button';
import ButtonIcon from '../ButtonIcon/ButtonIcon';

export default function Header({}) {
  const { dark, toggleDarkMode } = useDaekModeContext();
  const { filters, filter, setFilter } = useItemContext();

  const filterBtns = [
    { id: 0, title: filters[0], ariaLabel: '모두 보기' },
    { id: 1, title: filters[1], ariaLabel: '할 일 보기' },
    {
      id: 2,
      title: filters[2],
      ariaLabel: '완료된 일 보기',
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
            라이트모드
            <IoMdSunny />
          </span>
        ) : (
          <span>
            다크모드
            <IoMdMoon />
          </span>
        )}
      </ButtonIcon>
      <ul className="filter">
        {filterBtns.map((btn) => (
          <li key={btn.id} onClick={() => setFilter(btn.title)}>
            <Button
              type="button"
              label={btn.ariaLabel}
              variant="text"
              size="medium"
              className={`${btn.title === filter && 'active'}`}
            >
              {btn.title}
            </Button>
          </li>
        ))}
      </ul>
    </header>
  );
}
