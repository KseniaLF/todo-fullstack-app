export interface ITodo {
  description: string;
  title: string;
  complete: boolean;
  private: boolean;
}

export interface IFilter {
  search?: string;
  status?: string;
  access?: string;
}
