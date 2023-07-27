import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Conveniado } from '../../@types/types';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'conveniado', headerName: 'Conveniado', width: 200 },
  { field: 'convenio', headerName: 'Convenio', width: 200 },
  { field: 'grupoConvenio', headerName: 'Grupo do Convenio', width: 200 },
  { field: 'statusConveniado', headerName: 'Status do Conveniado', width: 200 },
  { field: 'matricula', headerName: 'Matricula', width: 200 },
  { field: 'valorLimite', headerName: 'Valor Limite', width: 200 },
];

interface TableProps {
  rows: Conveniado[];
}

const Table = ({ rows }: TableProps) => {
  
  return (
    <div style={{ height: 580, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection={false}
        sx={{
          '.css-1iyq7zh-MuiDataGrid-columnHeaders': {
            backgroundColor: '#1C1F2A',
            color: 'white'
          },
          '.css-ptiqhd-MuiSvgIcon-root': {
            color: 'white'
          },
          '&.MuiDataGrid-root': {
            border: '',
          },
          '.css-wop1k0-MuiDataGrid-footerContainer': {
            backgroundColor: '#1C1F2A',
            color: 'white'
          },
          '.css-78c6dr-MuiToolbar-root-MuiTablePagination-toolbar': {
            color: 'white'
          }
        }}
      />
    </div>
  );
};

export default Table;
