import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { SafeAreaView, StyleSheet, Text, Image, View, TouchableOpacity, Animated } from 'react-native';
import profile from './Assets/assets/profile.png';
import home from './Assets/assets/home.png';
import search from './Assets/assets/search.png';
import notifications from './Assets/assets/bell.png';
import settings from './Assets/assets/settings.png';
import logout from './Assets/assets/logout.png';
//Menu 
import menu from './Assets/assets/menu.png';
import close from './Assets/assets/close.png';

// Photo 
import photo from './Assets/assets/photo.jpg'

export default function App() {

const [currentTab,setCurrentTab] = useState("Home");
const [showMenu, setShowMenu] = useState(false);

const offsetValue = useRef(new Animated.Value(0)).current;
// Scale Intially must be One...
const scaleValue = useRef(new Animated.Value(1)).current;
const closeButtonOffset = useRef(new Animated.Value(0)).current;


  console.log(profile)
  return (
    <SafeAreaView style={styles.container}>
      <View style={{justifyContent: 'flex-start', padding: 15 }}>

<Animated.View style={{
  flexGrow: 1,
  backgroundColor: 'white',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  paddingHorizontal:15,
  paddingVertical: 20,
  borderRadius: showMenu ? 15 : 0,
  // Transforming View...
  transform: [
    { scale: scaleValue },
    { translateX: offsetValue }
  ]
}}></Animated.View>
{

}
<Animated.View style= {{
  transform: [{
    translateY: closeButtonOffset
  }]
}}></Animated.View>

<View style={styles.drawer}>
  {

    // Menu Button....
  }
  <TouchableOpacity>
    <Image source={menu} style={styles.menuIcon}/>

  </TouchableOpacity>
        <Image source={profile} style={styles.profileImg}/>
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
         // color: 'white',
          marginTop: 20,
          color:'#121212'
        }}>Jenna Ezarik</Text>
        <TouchableOpacity>
          <Text style={{
           marginTop: 6,
           color:'#121212'
          // color: 'white',
          }}>View Profile</Text>
        </TouchableOpacity>
         <View>
           {
                    //  Tab Bar Buttons .......
}
<TouchableOpacity>
<View style={styles.drawerContainer}>
</View>
</TouchableOpacity>

<View style={{ marginTop: 50}}></View>
         </View>
         {
             // Tab Bar Buttons 
         }
         {TabButton(currentTab,setCurrentTab, "Home", home)}
         {TabButton(currentTab,setCurrentTab, "Search", search)}
         {TabButton(currentTab,setCurrentTab, "Notifications", notifications)}
         {TabButton(currentTab,setCurrentTab, "Settings", settings)}

      </View>

<View style={{
    alignItems: 'center'
     
}}>
        {TabButton(currentTab,setCurrentTab, "LogOut", logout)}

</View>
     </View>
     </SafeAreaView> 
    
  );
}

const TabButton = (currentTab, setCurrentTab, title, image) => {
  return(
    <TouchableOpacity
    
    onPress={()=>{
      
      if(title == "LogOut") {
        // I love React Native.....
      }else {
        setCurrentTab(title)
      }
    
    }}>
<View style={[styles.drawerItem ,title==='LogOut' && styles.logout]}>
<Image source={image} style={styles.image}/>

<Text style={styles.btnText}>{title}</Text>

</View>
</TouchableOpacity>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5359D1',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  btnText:{
    fontSize: 15,
    fontWeight: 'bold',
    paddingLeft: 15,
    
    
  },
  image:{
    width: 25,height: 25,
  },
   drawer:{
    height:800,
    width:250,
    //    flexGrow: 1,
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    paddingHorizontal: 15,
    paddingVertical: 20
  },
  drawerItem:{
  flexDirection: "row",
  alignItems: 'center',
  paddingVertical: 8,
  backgroundColor: 'yellow', 
  paddingLeft: 20,
  paddingRight: 50,
  borderRadius: 8,
  marginTop: 15,
  //position:'absolute',  //zIndex:200
},
profileImg:{
  width: 60,
  height: 60,
  borderRadius: 10,
  marginTop: 8,
},
drawerContainer:{
  flexDirection: "row",
  alignItems: 'center',
  paddingVertical: 8,
  backgroundColor: 'white', 
  paddingLeft: 20,
  paddingRight: 50,
  borderRadius: 8,
  //height:'100%'
},
menuIcon:{
  width: 20,
  height: 20,
  tintColor: 'black',
  marginTop: 20,
  alignSelf:'flex-end',
  paddingHorizontal: 15
},
logout:{
 // backgroundColor:'red',
  position:'absolute',
 marginTop:500
}

});
