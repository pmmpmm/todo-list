import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import styles from './ListItem.module.css';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import FormControlLabel from '../FormControl/FormControlLabel';
import CheckBox from '../CheckBox/CheckBox';

export default function ListItem({ text, value, id, onClick, onChange }) {
  return (
    <li className={styles.listItem}>
      <FormControlLabel
        control={<CheckBox id={id} checked={value} onChange={onChange} />}
        label={text}
      />
      <ButtonIcon
        type="button"
        label="할 일 삭제"
        variant="circle"
        size="small"
        color="gray"
        onClick={() => onClick(id)}
      >
        <span className={styles.ic}>
          <FaRegTrashAlt />
        </span>
      </ButtonIcon>
    </li>
  );
}
