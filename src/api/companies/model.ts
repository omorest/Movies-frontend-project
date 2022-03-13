
export interface Company{
  name: string
  logo_path: string
}

export interface FullCompany {
  results: Company[]
  total_pages: number
}
