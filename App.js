import React, { useState } from 'react';
import { Keyboard, ScrollView, StyleSheet, Text, View } from 'react-native';
import TaskInputField from './TaskInputField';
import TaskItem from './TaskItem';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task == null) return;
    setTasks([...tasks, task]);
    Keyboard.dismiss();
  }

  const deleteTask = (deleteIndex) => {
    setTasks(tasks.filter((value, index) => index != deleteIndex));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TODO LIST</Text>
      <ScrollView style={styles.scrollView}>
        {
          tasks.map((task, index) => {
            return (
              <View key={index} style={styles.taskContainer}>
                <TaskItem index={index + 1} task={task} deleteTask={() => deleteTask(index)} />
              </View>
            );
          })
        }
      </ScrollView>
      <TaskInputField addTask={addTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1A3C',
  },
  heading: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
  },
  scrollView: {
    marginBottom: 70,
  },
  taskContainer: {
    marginTop: 20,
  }
});
// import { StyleSheet, TouchableOpacity,Image, View, Text, Button } from 'react-native'
// import { MaterialIcons } from '@expo/vector-icons'
// const App = () => {

//     return(

//     <View style={styles.container}>

//       <View style={{ paddingLeft: 10, height: 50, width: '100%', backgroundColor: 'white', flexDirection: 'row' }}>
//           <TouchableOpacity onPress={() => handleAddTask(task)}>
//             <View style={{
//               height: 50,
//               width: 30,
//               borderRadius: 5,
//               backgroundColor: '#fff',
//               alignItems: 'center',
//               justifyContent: 'center'}}>
//               <MaterialIcons name="keyboard-arrow-left" size={24} color= '#696969' />
//             </View>
//           </TouchableOpacity>
//           <h3 style={{ marginTop: '18px', color: '#696969', fontSize: 15}}>Best..Deal</h3>
//         <Image source={{ uri: require('./imgs/bell_icon.png') }} style={{ height: '30px', width: '30px', marginLeft: 215, marginTop: 12 }} />
//         <Image source={{ uri: require('./imgs/msg_icon.png') }} style={{ height: '50px', width: '50px' }} />
//       </View><br></br>

//       <View>
//         <Image source={{ uri: require('./imgs/beach_room.jpg') }} style={{ height: '280px', width: '360px', borderRadius: 15, alignSelf: 'center' }} /><br></br>
//           <Text style={{ marginLeft: 10, fontSize: 20, color: '#696969' }}> Room . 1 Guest . 1 Sofa</Text>
//           <h2 style={{ marginLeft: 10}}>Single room in center</h2>
//         <Text style={{
//           justifyContent: 'center',
//           alignText: 'center',
//           fontSize: 20,
//           marginLeft: 10,
//           color: '#696969'
          
//         }}>As Uber works through a huge amount of internal management turmoil, the company<br></br> is also consolidating</Text>
//       </View>
//       <View style={{ padding: 1, width: 380, borderRadius: 10 }}><br></br>
//         <Button
//           title="CHECK AVAILABILITY"
//           color={'#f08080'}
//           // fontWeight={'bold'}
//         /><br></br>
//           <Text style={{ fontSize: 20 }}>You may also be interested in:</Text>
//       </View><br></br>
//       <View style={{ height: '580px', width: '100%', borderRadius: 15}}>
//         <View style={{ height: '300px', width: '350px', flexDirection: 'row'}}>
//           <View style={{ height: '260px', width: '190px', borderRadius: 15, backgroundColor: 'white', marginTop: 25, marginLeft: 10 }}>
//             <Image source={{ uri: require('./imgs/mountains.png') }} style={{ height: '140px', width: '170px', borderRadius: 15, alignSelf: 'center', marginTop: 20 }} />
//             <Text style={{
//               justifyContent: 'center',
//               alignText: 'center',
//               marginLeft: 13,
//               color: '#696969',
//               fontSize: 18
//             }}>
//               Unique Activities with local Experts.
//             </Text><br></br>
      
//             <Text style={{ fontSize: 18, color: '#dc143c', marginLeft: 13, fontStyle: 'bold',flexDirection:'row' }}>
//                   View Offer <MaterialIcons name="keyboard-arrow-right" size={24} color='#dc143c' />
//             </Text>
               
           
//           </View>
//           <View style={{ height: '260px', width: '190px', borderRadius: 15, backgroundColor: 'white', marginTop: 25, marginLeft: 10 }}>
//             <Image source={{ uri: require('./imgs/bulding.png') }} style={{ height: '140px', width: '170px', borderRadius: 15, alignSelf: 'center', marginTop: 20 }} />
//             <Text style={{
//               justifyContent: 'center',
//               alignText: 'center',
//               marginLeft: 13,
//               color: '#696969',
//               fontSize: 18
//             }}>
//               The highest status people.
//             </Text><br></br>
//             <Text style={{ fontSize: 18, color: '#dc143c', marginLeft: 13, fontStyle: 'bold' }}>
//                 View Offer <MaterialIcons name="keyboard-arrow-right" size={24} color='#dc143c' />
//             </Text>
//           </View>
          
//         </View>

//         <View style={{ height: '300px', width: '100%', flexDirection: 'row' }}>
//           <View style={{ height: '260px', width: '190px', borderRadius: 15, backgroundColor: 'white',marginLeft: 10 }}>
//             <Image source={{ uri: require('./imgs/followers.png') }} style={{ height: '140px', width: '170px', borderRadius: 15, alignSelf: 'center', marginTop: 20 }} />
//             <Text style={{
//               justifyContent: 'center',
//               alignText: 'center',
//               marginLeft: 13,
//               color: '#696969',
//               fontSize: 18
//             }}>
//               Get more followers and Grow.
//             </Text><br></br>
//             <Text style={{ fontSize: 18, color: '#dc143c', marginLeft: 13, fontStyle: 'bold' }}>
//                 View Offer <MaterialIcons name="keyboard-arrow-right" size={24} color='#dc143c' />
//             </Text>
//           </View>
//           <View style={{ height: '260px', width: '190px', borderRadius: 15, backgroundColor: 'white',marginLeft: 10 }}>
//             <Image source={{ uri: require('./imgs/business.png') }} style={{ height: '140px', width: '170px', borderRadius: 15, alignSelf: 'center', marginTop: 20 }} />
//             <Text style={{
//               justifyContent: 'center',
//               alignText: 'center',
//               marginLeft: 13,
//               color: '#696969',
//               fontSize: 18
//             }}>
//               New ways to meet your business goals.
//             </Text><br></br>
//             <Text style={{ fontSize: 18, color: '#dc143c', marginLeft: 13, fontStyle: 'bold' }}>
//                 View Offer <MaterialIcons name="keyboard-arrow-right" size={24} color='#dc143c' />
//             </Text>
//           </View>
//         </View>
        
//       </View>


//      </View>
//     )
// }
// const styles = StyleSheet.create({

//   container: {
//     backgroundColor: '#f8f8ff',
//     justifyContent: 'center',
//     alignItems: 'center',
//     fontFamily: 'sans-serif',
//     // fontWeight: 'normal'
//   }
// })

// export default App