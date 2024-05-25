import { Text, View } from "@tarojs/components";

import "./index.less";
import styles from "./styles.module.less";

const Index = () => {
  return (
    <View className="wrapper">
      <Text className={styles.title}>Hi</Text>
    </View>
  );
};

export default Index;
