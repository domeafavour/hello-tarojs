import { useCounterStore } from "@/stores/counter";
import { Button, Text, View } from "@tarojs/components";
import "./index.less";
import styles from "./styles.module.less";

const Index = () => {
  const count = useCounterStore((store) => store.count);
  const increment = useCounterStore((store) => store.increment);
  return (
    <View className="wrapper">
      <Text className={styles.title}>Hi</Text>
      <Button onClick={() => increment()}>{count}</Button>
    </View>
  );
};

export default Index;
