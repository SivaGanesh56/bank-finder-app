export const CITIES = [
    'HYDERABAD',
    'MUMBAI',
    'BANGALORE',
    'CHENNAI',
    'DELHI'
];

export const CATEGORIES = [
    'ifsc',
    'branch',
    'bank_name'
];

export const API_URL = "https://vast-shore-74260.herokuapp.com/banks";

export  const COLUMNS= [{
    dataField: 'bank_name',
    text: 'Bank',
  }, {
    dataField: 'ifsc',
    text: 'IFSC',
  }, {
    dataField: 'branch',
    text: 'Branch',
  },
  {
    dataField: 'bank_id',
    text: 'ID',
  },
  {
      dataField: 'address',
      text: 'Address'
  },
];