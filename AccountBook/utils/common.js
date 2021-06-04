import { Dimensions } from 'react-native';
//基准宽度往往是ps等图片大小宽度
const BASE_WIDTH = 750;
const calc = (size) => {
  let { width } = Dimensions.get('window');
  return size * width / BASE_WIDTH;
}
export const BASE = 'http://10.192.5.60:8080';

const QueryString = (data) => {
  // data的格式是：
  // {
  //   catalog: this.state.catalog,
  //   income: this.state.income,
  //   comment: this.state.comment,
  //   amount: this.state.amount,
  // }
  let arr = [];
  for (let key in data) {
    // 由于组件要提交服务器
    //可编码包裹后上传
    arr.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
  }
  arr = arr.join('&');
  return arr;
}
export { calc, QueryString };

