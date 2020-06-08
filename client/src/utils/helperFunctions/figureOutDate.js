

export const figureOutDate =(startDate,endDate)=>  {
return  Math.ceil(Math.abs(new Date(startDate).getTime()- new Date(endDate).getTime()) / (1000 * 3600 * 24));
};
  