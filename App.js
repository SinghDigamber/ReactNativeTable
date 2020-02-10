import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HeadTable: ['Head1', 'Head2', 'Head3', 'Head4', 'Head5'],
      DataTable: [
        ['1', '2', '3', '4', '5'],
        ['a', 'b', 'c', 'd', 'e'],
        ['1', '2', '3', '4', '5'],
        ['a', 'b', 'c', 'd', 'e'],
        ['1', '2', '3', '4', '5']
      ]
    }
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 1, borderColor: '#ffa1d2'}}>
          <Row data={state.HeadTable} style={styles.HeadStyle} textStyle={styles.TableText}/>
          <Rows data={state.DataTable} textStyle={styles.TableText}/>
        </Table>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    padding: 18,
    paddingTop: 35,
    backgroundColor: '#ffffff' 
  },
  HeadStyle: { 
    height: 50,
    alignContent: "center",
    backgroundColor: '#ffe0f0'
  },
  TableText: { 
    margin: 10
  }
});




// import React, { Component } from 'react';
// import { StyleSheet, View, ScrollView } from 'react-native';
// import { Table, TableWrapper, Row } from 'react-native-table-component';

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       tableHead: ['Head', 'Head2', 'Head3', 'Head4', 'Head5', 'Head6', 'Head7', 'Head8', 'Head9'],
//       widthArr: [40, 60, 80, 100, 120, 140, 160, 180, 200]
//     }
//   }

//   render() {
//     const state = this.state;
//     const data = [];
//     for (let i = 0; i < 30; i += 1) {
//       const dataRow = [];
//       for (let j = 0; j < 9; j += 1) {
//         dataRow.push(`${i}${j}`);
//       }
//       data.push(dataRow);
//     }

//     return (
//       <View style={styles.container}>
//         <ScrollView horizontal={true}>
//           <View>
//             <Table borderStyle={{borderColor: '#C1C0B9'}}>
//               <Row data={state.tableHead} widthArr={state.widthArr} style={styles.head} textStyle={styles.text}/>
//             </Table>
//             <ScrollView style={styles.dataWrapper}>
//               <Table borderStyle={{borderColor: '#C1C0B9'}}>
//                 {
//                   data.map((dataRow, index) => (
//                     <Row
//                       key={index}
//                       data={dataRow}
//                       widthArr={state.widthArr}
//                       style={[styles.row, index%2 && {backgroundColor: '#ffffff'}]}
//                       textStyle={styles.text}
//                     />
//                   ))
//                 }
//               </Table>
//             </ScrollView>
//           </View>
//         </ScrollView>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: { 
//     flex: 1, 
//     padding: 16, 
//     paddingTop: 30, 
//     backgroundColor: '#ffffff' 
//   },
//   head: { 
//     height: 50, 
//     backgroundColor: '#6F7BD9' 
//   },
//   text: { 
//     textAlign: 'center', 
//     fontWeight: '200' 
//   },
//   dataWrapper: { 
//     marginTop: -1 
//   },
//   row: { 
//     height: 40, 
//     backgroundColor: '#F7F8FA' 
//   }
// });