import React from 'react';
import { SafeAreaView } from 'react-native';

import { HelloWorld } from '@self/shared/presentation/components/atoms/hello-world';

const App = (): JSX.Element => (
  <SafeAreaView>
    <HelloWorld />
  </SafeAreaView>
);

export default App;
