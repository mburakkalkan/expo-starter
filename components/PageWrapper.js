import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import { MD3LightTheme, PaperProvider } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import MyCustomTheme from "../theme.json";

// https://callstack.github.io/react-native-paper/docs/guides/theming#creating-dynamic-theme-colors

const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    ...MyCustomTheme.colors
  }
};

export default function PageWrapper({ children, screenOptions }) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Stack.Screen options={screenOptions} />
        <StatusBar style="auto" backgroundColor={MyCustomTheme.colors.secondaryContainer} />
        <PaperProvider theme={theme}>{children}</PaperProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: MyCustomTheme.colors.surface,
    flex: 1
  }
});
