import React, {
  Component
} from 'react';
import 'react-native-gesture-handler';

import Providers from './src/navigation/Index';

export class App extends Component {
  render() {
    return (
      <Providers />
    )
  }
}

export default App