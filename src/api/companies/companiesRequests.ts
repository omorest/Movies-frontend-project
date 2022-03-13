import { FullCompany } from './model'

export const fetchCompanies = async (url: string): Promise<FullCompany> => {
  const data = await fetch(url)
  const results = await data.json()
  results.results = results.results.filter((company: any) => company.logo_path !== null)
  return results
}
