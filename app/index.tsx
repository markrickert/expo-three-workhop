import { Stack, Link } from "expo-router";
import { FlatList, Text, View } from "react-native";

// add new scenes here
const SCENES: { name: string; href: string }[] = [
  { name: "Level 1 - Basic GL View", href: "/level1/01-basic" },
  { name: "Level 2 - Meshes (Cube)", href: "/level2/01-cube" },
  { name: "Level 2 - Mesh Animation", href: "/level2/02-cube-animation" },
  { name: "Level 2 - Mesh Materials", href: "/level2/03-cube-materials" },
  { name: "Level 2 - Mesh Assets", href: "/level2/04-cube-assets" },
  { name: "Level 3 - Loading External Assets", href: "/level3/01-loading-files" },
  { name: "Level 3 - Animated Robot (Skinning & Morphing)", href: "/level3/02-animated-robot" },
  { name: "Level 3 - Other Loaders (GCode Loader 🚢)", href: "/level3/03-gcode-loader" },
  { name: "Level 4 - Interacting with React-Native", href: "/level4/01-react-native-interaction" },

  { name: "Advanced - Field of Flowers", href: "/advanced/flower-field" },
  { name: "Advanced - Interactive Buffergeometry", href: "/advanced/interactive-buffergeometry" },
];

export default function Page() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Expo Three & React Native",
        }}
      />

      <FlatList
        contentContainerStyle={{
          flex: 1,
          paddingHorizontal: 16,
        }}
        data={SCENES}
        ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: "#cccccc" }} />}
        renderItem={({ item }) => (
          <Link
            href={item.href}
            style={{
              paddingVertical: 16,
            }}
          >
            <Text>{item.name}</Text>
          </Link>
        )}
      />
    </>
  );
}
