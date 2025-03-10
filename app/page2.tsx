import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import PageWrapper, {
  PageWrapperProps,
} from "@/components/PageWrapper";

const screenOptions: PageWrapperProps["screenOptions"] = {
  title: "Sayfa 2",
  headerShown: true,
};

export default function Page2() {
  return (
    <PageWrapper screenOptions={screenOptions}>
      <View style={styles.container}>
        <Text>Bu sayfa app/page2.tsx içindeki sayfadır.</Text>
        <Link href="/">Anasayfaya dön</Link>
      </View>
    </PageWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
