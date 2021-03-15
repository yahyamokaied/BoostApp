import AsyncStorage from '@react-native-community/async-storage';

  export const getToken = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@clicks_key')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      console.log(e);
    }
    console.log('Token restored : '+ jsonValue);
  }


  export const setToken = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      console.log(' Token updated. ');
      await AsyncStorage.setItem('@clicks_key', jsonValue)
    } catch(e) {
      console.log(e);
    }
  }


  export const removeToken = async () => {
    try {
      await AsyncStorage.removeItem('@clicks_key')
    } catch(e) {
      console.log(e);
    }
    console.log(' Token removed.')
  }