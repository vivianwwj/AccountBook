// var ipD = {
//     'VMware Network Adapter VMnet1': [
//         {
//             address: 'fe80::7c0a:236f:20c2:df52',
//             netmask: 'ffff:ffff:ffff:ffff::',
//             family: 'IPv6',
//             mac: '00:50:56:c0:00:01',
//             internal: false,
//             cidr: 'fe80::7c0a:236f:20c2:df52/64',
//             scopeid: 16
//         },
//         {
//             address: '192.168.11.1',
//             netmask: '255.255.255.0',
//             family: 'IPv4',
//             mac: '00:50:56:c0:00:01',
//             internal: false,
//             cidr: '192.168.11.1/24'
//         }
//     ],
//     'VMware Network Adapter VMnet8': [
//         {
//             address: 'fe80::e8d2:6d9d:22c2:55cf',
//             netmask: 'ffff:ffff:ffff:ffff::',
//             family: 'IPv6',
//             mac: '00:50:56:c0:00:08',
//             internal: false,
//             cidr: 'fe80::e8d2:6d9d:22c2:55cf/64',
//             scopeid: 19
//         },
//         {
//             address: '192.168.170.1',
//             netmask: '255.255.255.0',
//             family: 'IPv4',
//             mac: '00:50:56:c0:00:08',
//             internal: false,
//             cidr: '192.168.170.1/24'
//         }
//     ],
//     WLAN: [
//         {
//             address: 'fe80::1514:ffc4:a1a4:c48c',
//             netmask: 'ffff:ffff:ffff:ffff::',
//             family: 'IPv6',
//             mac: '68:ec:c5:bd:4b:a1',
//             internal: false,
//             cidr: 'fe80::1514:ffc4:a1a4:c48c/64',
//             scopeid: 8
//         },
//         {
//             address: '10.192.5.60',
//             netmask: '255.255.0.0',
//             family: 'IPv4',
//             mac: '68:ec:c5:bd:4b:a1',
//             internal: false,
//             cidr: '10.192.5.60/16'
//         }
//     ],
//     'Loopback Pseudo-Interface 1': [
//         {
//             address: '::1',
//             netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
//             family: 'IPv6',
//             mac: '00:00:00:00:00:00',
//             internal: true,
//             cidr: '::1/128',
//             scopeid: 0
//         },
//         {
//             address: '127.0.0.1',
//             netmask: '255.0.0.0',
//             family: 'IPv4',
//             mac: '00:00:00:00:00:00',
//             internal: true,
//             cidr: '127.0.0.1/8'
//         }
//     ]
// };

// for (let key in ipD) {
//     if(key.indexOf('VMware') == -1){
//         ipD[key].forEach((item)=>{
//             if(item.family=='IPv4'){
//                 console.log(item.address)
//             }
//         })
//     } else {
//         continue;
//     }
// }

// var catalogs=[
//     //??????
//     ['??????', '??????', '??????', '??????', '??????', '??????', '??????', '??????'],

//     //??????
//     ['??????', '??????', '??????'],
//   ]

//   console.log(catalogs[0][0]);
//   console.log(catalogs[0]);





var records = [
    { ID: 1, catalog: '??????', income: 0, comment: '????????????', amount: 99.8 },
    { ID: 2, catalog: '??????', income: 0, comment: '????????????', amount: 257.8 },
    { ID: 5, catalog: '??????', income: 1, comment: '11?????????', amount: 5800 },
    { ID: 8, catalog: '??????', income: 1, comment: '????????????', amount: 500 },
]

// totalIncome=function(records){
//     let sum = 0;
//     records.forEach(({ income, amount }) => {
//         if (income) {
//             sum += amount;
//         }
//         console.log(sum);
//     })
// }
//         totalIncome(records);

//         return sum.toFixed(2);
//       }
//   totalOutcome(){
//     let sum=0;
//     records.forEach(({income, amount})=>{
//       if(!income){
//         sum+=amount;
//       }
//     });

//     return sum.toFixed(2);
//   }

const QueryString = (data) => {
    // data???????????????
    // {
    //   catalog: this.state.catalog,
    //   income: this.state.income,
    //   comment: this.state.comment,
    //   amount: this.state.amount,
    // }
    var arr = [];
    for (key in data) {
      arr.push(key + '=' + data[key]);
    }
    arr = arr.join('&');
    console.log(arr);
    return arr;
  }

QueryString({
    catalog: 1,
    income: 2,
    comment: 3,
    amount: 4,
  });