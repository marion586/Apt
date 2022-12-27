import React, { FC } from 'react';
import { Input } from 'antd';
import { AiOutlineSearch } from 'react-icons/ai';
import './style.css';
import { Colors } from '@themes/apt.theme';

// interface SearchProps {
//   content: string;
// }

const SearchCustom: FC = () => {
  return (
    <>
      <Input
        type="text"
        placeholder="Rechercher..."
        suffix={<AiOutlineSearch style={{ width: '15px', height: '15px' }} />}
        style={{ borderColor: '#2D2D2D45', background: '#2D2D2D45', width: '100%' }}
        className="navigation-container-center-search-custom"
      />
    </>
  );
};

export default SearchCustom;
