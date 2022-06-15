
type MachineryTypesType = {
  mobile: boolean,
  tracked: boolean,
  lowBed: boolean,
  modular: boolean,
};


export const makeQueryFromParams = (
  paginate: number,
  sort: string,
  weights: number[],
  types: MachineryTypesType,
  liftingCapacityFrom: number,
  liftingCapacityTo: number,
  heightFrom: number,
  heightTo: number,
  arrowLengthFrom: number,
  arrowLengthTo: number,
) => {

  const weightsQuery = weights.reduce((accum, num) => accum + "&weight=" + num, "")
  
  let typesQuery = "";
  let key: keyof typeof types;
  for (key in types) {
    if (types[key]) {
      typesQuery += `&type=${key}`
    }
  }
  
  return `${weightsQuery.substr(1)}${typesQuery}&lifting_capacity_from=${liftingCapacityFrom}&lifting_capacity_to=${liftingCapacityTo}&height_from=${heightFrom}&height_to=${heightTo}&arrow_length_from=${arrowLengthFrom}&arrow_length_to=${arrowLengthTo}&paginate=${paginate}&sort=${sort}`;
};