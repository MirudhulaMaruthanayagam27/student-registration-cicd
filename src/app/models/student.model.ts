// A "model" is just a shape. It describes what a student object looks like
// so TypeScript can catch mistakes before the code ever runs.
export interface Student {
  id?: number;        // "?" means optional - the API creates the id, not us
  name: string;
  email: string;
  department: string;
  phone: string;
}
