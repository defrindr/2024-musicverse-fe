export interface Response<T> {
  message: string;
  data: ResponseData<T> | null;
  timestamps: number;
  executionTime: number;
  environment: string;
  request?: any[];
}

export interface ResponseData<T> {
  items: T[];
  meta: MetaPage;
}

export interface Audition {
  id: number;
  title: string;
  skill_id: number;
  date: string;
  description: string;
  term: string;
  contract: string;
  status: string;
  created_by: number;
  skill: Skill;
  _date: string;
}

export interface AuditionAssesment {
  id: number;
  audition_id: number;
  assesment: string;
  weight: number;
  deleted_at: any;
}

export interface Skill {
  id: number;
  icon: string;
  name: string;
}

export interface MetaPage {
  currentPage: number;
  total: number;
  perPage: number;
  path: string;
  totalPage: number;
}
