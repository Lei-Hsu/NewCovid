//#region 人數format
/**
 * 
 * @param population 輸入人數
 * @returns 千位格式
 */
export const populationFormat = (population) => {
  return population ? new Intl.NumberFormat().format(population) : '尚無最新資料'
}
//#endregion