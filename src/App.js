import React from 'react';
import { MantineProvider, Table,Button } from '@mantine/core';
import '@mantine/core/styles.css';
import './App.css';
import data from './data.json'

function App() {

  const rows = data.map((element, index) => (

    <Table.Tr key={index}>
      <Table.Td>{element["Country"]?element["Country"]:0}</Table.Td>
      <Table.Td>{element["Year"]?element["Year"]:0}</Table.Td>
      <Table.Td>{element["Crop Name"]?element["Crop Name"]:0}</Table.Td>
      <Table.Td>{element["Crop Production (UOM:t(Tonnes))"]?element["Crop Production (UOM:t(Tonnes))"]:0}</Table.Td>
      <Table.Td>{element["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"]?element["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"]:0}</Table.Td>
      <Table.Td>{element["Area Under Cultivation (UOM:Ha(Hectares))"]?element["Area Under Cultivation (UOM:Ha(Hectares))"]:0}</Table.Td>
    </Table.Tr>
   
  ));

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div style={{ padding: '20px' }}>
        <Table horizontalSpacing="md" verticalSpacing="md" striped highlightOnHover withTableBorder>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Country</Table.Th>
              <Table.Th>Year</Table.Th>
              <Table.Th>Crop Name</Table.Th>
              <Table.Th>Crop Production (UOM:t(Tonnes))</Table.Th>
              <Table.Th>Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))</Table.Th>
              <Table.Th>Area Under Cultivation (UOM:Ha(Hectares))</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </div>
    </MantineProvider>
  );
}

export default App;