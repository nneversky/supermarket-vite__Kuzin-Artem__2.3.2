import { Table } from "@mantine/core";

import Card from "../../components/card";

const CardLIst = () => {
  return (
    <div>
      <Table>
        <Table.Tr>
          <Table.Th>
            <Card />
          </Table.Th>
          <Table.Th>
            <Card />
          </Table.Th>
          <Table.Th>
            <Card />
          </Table.Th>
          <Table.Th>
            <Card />
          </Table.Th>
        </Table.Tr>
        <Table.Tr></Table.Tr>
      </Table>
    </div>
  );
};

export default CardLIst;
