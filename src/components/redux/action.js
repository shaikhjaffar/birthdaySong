export const nextStep = () => ({
    type: 'NEXT_STEP',
  });

  export const addData = (fieldName,value) => ({
    type: 'ADD_DATA',
    payload:{fieldName,value}
  }); 