import React, { useState } from 'react';

import { Table, Tools } from './styles';
import { MdEdit, MdDelete, MdPlaylistAdd } from 'react-icons/md';

import CButton from '../CButton';
import CFormSearch from '../CFormSearch';
import CModal from '../CModal';

import ConfirmForm from '../ConfirmForm';
import CCheckbox from '../CCheckbox';

export default function CTable({ titles, values, indexes, indexesSearch, FormCustom, actionDelete, load, isEditable = true }) {
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [allSelect, setAllSelect] = useState('');
  const [item, setItem] = useState('');

  const toggleSelectedItems = id => {
    if (selectedItems.includes(id)) {
      let itemIndex = selectedItems.filter(v => v !== id);
      setSelectedItems(itemIndex);
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const selectAllItems = () => {
    if (allSelect === 'in') {
      setSelectedItems([]);
      setAllSelect('');
    } else {
      let items = [];
      values.map(v => {
        items.push(v.id);
      });
      setSelectedItems(items);
      setAllSelect('in');
    }
  };

  const closeModal = () => {
    setShowModal('');
    setItem({});
  }

  return (
    <>
      {(showModal !== '') ? (
        <CModal
          close={closeModal}
          form={(showModal === 'add')
            ? <FormCustom
              item={item}
              success={load}
              close={closeModal}
            />
            : <ConfirmForm action={actionDelete}
              items={selectedItems}
              close={closeModal}
              success={load}
            />}
        />
      ) : ''}

      <Tools>
        <div className='wrapbuttons'>
          <CButton click={() => { setShowModal('add'); setItem({}); }} cstyle='success small' title={(<><MdPlaylistAdd /> Adicionar</>)} />
          <CButton
            disabled={!(selectedItems.length > 0)}
            click={() => setShowModal('delete')} cstyle='danger small'
            title={(<><MdDelete /> Excluir</>)}
          />
        </div>
        <CFormSearch cstyle='dark' value={search} change={value => setSearch(value)} />
      </Tools>
      <Table>

        <thead>
          <tr>
            <td>
              <CCheckbox
                active={allSelect}
                click={() => selectAllItems()}
              />
            </td>
            {titles.map(title => <td key={title}>{title}</td>)}
            <td></td>
          </tr>
        </thead>

        <tbody>
          {values.filter(el => {
            let isSearch = false;
            indexesSearch.map(index => {
              if (el[index].includes(search)) {
                isSearch = true;
              }
            });
            return isSearch;
          }).map(value => (
            <tr key={value.id}>
              <td>
                <CCheckbox
                  active={(selectedItems.includes(value.id)) ? 'in' : ''}
                  click={() => toggleSelectedItems(value.id)}
                />
              </td>
              {Object.keys(value).filter((v) => indexes.includes(v)).map(el => <td key={value[el]}>{value[el]}</td>)}
              <td className='actionstable'>
                {isEditable && (
                  <CButton click={() => { setItem(value); setShowModal('add'); }} cstyle="default small" title={(<><MdEdit /> Editar</>)} />
                )}
              </td>
            </tr>
          ))}
        </tbody>

      </Table>
    </>
  );
}
