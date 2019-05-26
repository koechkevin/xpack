import axios from 'axios';


export default class API {
  static async fetchAll(){
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    return {response};
  }
}
