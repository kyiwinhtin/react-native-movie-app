import { Tabs } from "expo-router";
import { ImageBackground, Image, Text, View } from "react-native";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";


const TabIcon = ({ focused , icon , title } : any) => {
  if(focused) {
    return (
      <ImageBackground 
      source={images.highlight} 
      className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden">
        <Image source={icon} tintColor="#151312" className="size-5" />
        <Text className="text-secondary text-base font-semibold">{ title }</Text>
      </ImageBackground>
    )
  }
    return (
      <View className="size-full justify-center items-center mt-4 rounded-full">
        <Image source={icon} tintColor="#A8B5DB" className="size-5" />
      </View>
    )
}
const _Layout = () => {
  return (
    <Tabs screenOptions={{
      tabBarShowLabel: false,
      tabBarItemStyle: {
       
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        
      },
      tabBarStyle: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 70,
        backgroundColor: '#0F0D23',
        borderTopWidth: 0,
        elevation: 0,
      }
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused}) => (
            <TabIcon focused={ focused} icon={icons.home} title="Home"/>
          )
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused}) => (
            <TabIcon focused={ focused} icon={icons.search} title="Search"/>
          )
        }}
      />
       <Tabs.Screen
        name="saved"
        options={{
   
          headerShown: false,
          tabBarIcon: ({ focused}) => (
            <TabIcon focused={ focused} icon={icons.save} title="Saved"/>
          )
        }}
      />
       <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused}) => (
            <TabIcon focused={ focused} icon={icons.person} title="Profile"/>
          )
        }}
      />
    </Tabs>
    
  )
}

export default _Layout;
