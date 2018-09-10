import React from 'react';
import { Table } from 'reactstrap';
import Cbtrow from '../../components/Akademik/Cbtrow';

class Cbttabel extends React.Component {

    render() {
        var rows = this.props.dataCBT.map( (obj, i) => {
            return (
                <Cbtrow
                    key={i}
                    datato={obj}
                     />
            );
        })

        return (
          <div>
            <Table size="sm">
              <thead>
              <tr>
              <th>#</th>
              <th>Pola Tryout</th>
              <th>Periode</th>
              <th>Detail</th>
              </tr>
              </thead>
              <tbody>
                {rows}
              </tbody>
		    </Table>
          </div>
        );
    }
  }

  export default Cbttabel;