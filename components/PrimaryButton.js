import { View, Text, ProgressViewIOSComponent } from 'react-native';

function PrimaryButton({children}) {
   return (
      <View>
         <Text>{children}</Text>
      </View>
   );
}

export default PrimaryButton;