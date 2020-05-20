import React from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import { DataTable, IHeaderProps } from 'react-enhanced-table/build';
import Header from './components/Header';
export interface IItem {
  id: number;
  title: string;
  name: string
}
function App() {
  const headers: IHeaderProps[] = [
    {
      key: "name",
      text: "Name",
      cell: (row: IItem) => `${row.name}`

    },
    {
      key: "title",
      text: "Title",
      cell: (row: IItem) => `${row.title}`

    },
    {
      key: "editBtn",
      text: "Edit",
      cell: (row: IItem) => {
        return (
          <div>
            <Button onClick={() => {
              console.log("Event: ", row);
            }}>Edit</Button>
          </div>
        )
      }
    }
  ]
  const items: IItem[] = [
    {
      id: 0,
      name: "Sunny",
      title: "Dev"
    },
    {
      id: 1,
      name: "Faiq",
      title: "Dev"
    }
  ]
  return (
    <div className="App">
      <Header/>
      <DataTable headers={headers} dataSource={items} filter={true}></DataTable>
    </div>
  );
}

export default App;
