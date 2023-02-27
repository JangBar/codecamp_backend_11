export interface IAllergiesServiceFindBynames {
  allergies: string[];
}

export interface IAllergiesServiceBulkInsert {
  names: {
    name: string;
  }[];
}
