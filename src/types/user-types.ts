export interface User {
  picture: {
    large: string;
  };
  dob: {
    age: number;
  };
  email: string;
  name: {
    first: string;
    last: string;
  };
  gender: string;
}
