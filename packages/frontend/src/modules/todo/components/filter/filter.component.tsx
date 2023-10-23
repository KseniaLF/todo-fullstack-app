import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { DebounceInput } from 'react-debounce-input';
import { Button } from '../../../theme/common.styled';
import { IFilterState, ISearchParams } from '../../../common/types/todos.type';
import { FilterOptions } from './filter.styled';

export const FilterComponent = ({
  setParam,
  clearParams,
  filterState
}: {
  setParam: (searchParams: ISearchParams) => void;
  clearParams: () => void;
  filterState: IFilterState;
}) => {
  const { isPrivate, isPublic, isCompleted, isInProgress, isAll } = filterState;

  return (
    <FilterOptions>
      <DebounceInput
        type="text"
        placeholder="search.."
        onChange={(e) => setParam({ search: e.target.value })}
        debounceTimeout={1000}
      />

      <div>
        <Button type="button" onClick={clearParams} inactive={!isAll}>
          All
        </Button>

        <Button type="button" onClick={() => setParam({ access: 'private' })} inactive={!isPrivate}>
          Private
        </Button>

        <Button type="button" onClick={() => setParam({ access: 'public' })} inactive={!isPublic}>
          Public
        </Button>

        <Button
          type="button"
          onClick={() => setParam({ status: 'completed' })}
          inactive={!isCompleted}
        >
          Completed
        </Button>

        <Button
          type="button"
          onClick={() => setParam({ status: 'inprogress' })}
          inactive={!isInProgress}
        >
          In progress
        </Button>
      </div>
    </FilterOptions>
  );
};
