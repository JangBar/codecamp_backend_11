export interface IProductAllergiesServiceFindBynames {
  allergies: string[];
}

export interface IProductAllergiesServiceBulkInsert {
  names: {
    name: string;
  }[];
}
