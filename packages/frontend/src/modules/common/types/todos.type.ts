export interface ITodo {
  id: string;
  description: string;
  title: string;
  complete: boolean;
  private: boolean;
  createdAt?: string;
  updatedAt?: string;
  user?: { email: string };
}

export interface ISearchParams {
  search?: string;
  status?: string;
  access?: string;
  page?: string;
}

export interface IFilterState {
  isPrivate: boolean;
  isPublic: boolean;
  isCompleted: boolean;
  isInProgress: boolean;
  isAll: boolean;
}

export interface ITodos {
  isMore: boolean;
  todos: ITodo[];
  isLoad?: boolean;
}
