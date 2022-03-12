import { Company } from './model'

export const fetchCompanies = async (url: string): Promise<Company[]> => {
  const data = await fetch(url)
  const { results } = await data.json()
  return results.filter((company: any) => company.logo_path !== null)
}
