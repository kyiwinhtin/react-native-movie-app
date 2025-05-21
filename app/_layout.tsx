// import React, { Component } from 'react'
// import { Text, View } from 'react-native'

// import { Stack } from 'expo-router'
// import "../global.css"

// export default class _layout extends Component {
//   render() {
//     return <Stack>
//             <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//             <Stack.Screen name="movies/[id]" options={{ headerShown: false }} />
//           </Stack>
//   }
// }

import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="movies/[id]" options={{ headerShown: false }} />
    </Stack>
  );
}
  

