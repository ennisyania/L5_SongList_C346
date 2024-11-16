import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, SectionList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#201d2b',
  },

  songListStyle: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#353047',
    borderRadius:20,
    margin:15,
    paddingBottom:50,
  },

  header: {
    justifyContent: 'center',
    flex: 1,
  },

  webTitle: {
    fontSize: 40,
    textAlign: 'center',
    color: '#ca97a8',
    margin: 30,
  },

  images: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'flex-end',
  },

  textStyle: {
    fontSize: 15,
    margin: 10,
    fontWeight: 'bold',
    color:'#ca97a8'
  },
  headerText: {
    fontSize: 30,
    marginTop:30,
    padding:10,
    borderWidth:2,
    borderColor:'#930638',
    textAlign: 'center',
    fontWeight: 'bold',
    borderRadius: 15,
    color:'#930638'
  },
  opacityStyle: {
    justifyContent:"space-between",
    alignItems:'center',
    borderStyle:'dashed',
    borderWidth:2,
    borderColor:'#ca97a8',
    flex:1,
    flexDirection: 'row',
    padding: 20,
    borderRadius: 15,
  },
});

const datasource = [
  {
    data: [
      { key: 'SOMEWHERE ELSE', image: require('./images/SOMEWHERE ELSE.jpg'), time:'3:52' },
      { key: 'baby boy interlude', image: require('./images/baby boy interlude.jpg'), time:'3:28' },
      { key: 'FIND OUT THE HARD WAY', image: {uri: 'https://i.scdn.co/image/ab67616d00001e02440c4f8748e6ea7e8716f197'}, time:'3:10' },
    ],
    title: 'Mickey Darling',
  },
  {
    data: [
      { key: 'Person in the Mirror', image: require('./images/Person in the Mirror.jpg'), time:'1:11' },
      { key: "You're Not Welcome", image: require("./images/You're Not Welcome.jpg"), time:'2:30' },
      { key: 'ANYTHING 4 U', image: {uri: 'https://i.scdn.co/image/ab67616d00001e025bac34c817f29da0a541038f'}, time:'2:41' },
    ],
    title: 'Nathan Apollo',
  },

  {
    data: [
      { key: 'EYES ON ME', image: {uri: 'https://i.scdn.co/image/ab67616d00001e02ba13381a082a8b9c4ba40e5d'}, time:'1:56' },
      { key: "WHAT YOU WANT!", image:{uri: "https://i.scdn.co/image/ab67616d00001e027eed643453ef7de39d14c749"}, time:'2:02' },
      { key: 'TELL ME LIES (w/Odetari)', image: {uri: 'https://i.scdn.co/image/ab67616d00001e020c807486d36a64123640fd9e'}, time:'2:13' },
    ],
    title: 'Asteria',
  },
];

const renderItem = ({item}) => {
  return(
      <TouchableOpacity style={styles.opacityStyle}>
        <Image source={item.image} style = {styles.images} />
        <Text style={styles.textStyle}>{item.key}</Text>
        <Text style={styles.textStyle}>{item.time}</Text>
      </TouchableOpacity>
  )
}

const App = () => {
  return (
      <View style={styles.viewStyle}>
        <View styles={styles.header}>
          <Text style={styles.webTitle}>Enni's Song List</Text>
        </View>

        <View style={styles.songListStyle}>
        <StatusBar hidden={true}></StatusBar>
        <SectionList
            sections={datasource}
            renderItem={renderItem}
            renderSectionHeader={({section: { title} }) => (
                <Text style={[styles.headerText]}>{title}</Text>
            )}
            contentContainerStyle={{ paddingBottom: 50 }}
        />
        </View>
      </View>
  );
};

export default App;
