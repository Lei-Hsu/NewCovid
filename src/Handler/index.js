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

//#region 算出五個國家的死亡率
/**
 * 
 * @param {} date 輸入一個資料算出一週時間
 * @param {*} TaiwanDeathsRatioData 輸入台灣資料
 * @param {*} UsaDeathsRatioData 輸入美國資料
 * @param {*} UkDeathsRatioData 輸入英國資料
 * @param {*} MexicoDeathsRatioData 輸入墨西哥資料
 * @param {*} IndiaDeathsRatioData 輸入印度資料
 * @returns 返回死亡率資料
 */
export const handleCountryDeathsRatio = (date, TaiwanDeathsRatioData, UsaDeathsRatioData, UkDeathsRatioData, MexicoDeathsRatioData, IndiaDeathsRatioData,) => {
  let DeathsRatioData = [{}, {}, {}, {}, {}, {}, {},]
  DeathsRatioData.forEach((item, index) => item.date = TaiwanDeathsRatioData[index].date)
  DeathsRatioData.forEach((item, index) => item.UsaDeathsRatio = UsaDeathsRatioData[index].deathsRatio)
  DeathsRatioData.forEach((item, index) => item.UkDeathsRatio = UkDeathsRatioData[index].deathsRatio)
  DeathsRatioData.forEach((item, index) => item.MexicoDeathsRatio = MexicoDeathsRatioData[index].deathsRatio)
  DeathsRatioData.forEach((item, index) => item.TaiwanDeathsRatio = TaiwanDeathsRatioData[index].deathsRatio)
  DeathsRatioData.forEach((item, index) => item.IndiaDeathsRatio = IndiaDeathsRatioData[index].deathsRatio)
  return DeathsRatioData.reverse()
}
//#endregion
