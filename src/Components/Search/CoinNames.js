import DataCleaner from '../../Utils/Cleaners'

export const coinNames = async () => {
  const cleaner = new DataCleaner()
  console.log(await cleaner.getCoinNames())
  return await cleaner.getCoinNames()
}