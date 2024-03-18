import React from 'react'
import Select, { ActionMeta, SingleValue } from 'react-select'

interface ICOntrolsProps {
  activeView: 'grid' | 'list'
  onAsideOpen: React.MutableRefObject<(() => void) | null>
  setActiveView: React.Dispatch<React.SetStateAction<'grid' | 'list'>>
  setSortBy: React.Dispatch<React.SetStateAction<string>>
}

type onSortChangeType = (
  newValue: SingleValue<{
    value: string
    label: string
  }>,
  actionMeta: ActionMeta<{
    value: string
    label: string
  }>,
) => void

export const FilterControls = React.forwardRef<HTMLButtonElement, ICOntrolsProps>(
  ({ onAsideOpen, setActiveView, activeView, setSortBy }, asideBtnRef) => {
    const sortOptions = [
      { value: 'maxHeight:', label: 'По высоте' },
      { value: 'liftingCapacity:', label: 'По грузоподъемности' },
      { value: 'arrowLength:', label: 'По длине' },
    ]

    const [activeSortType, setActiveSortType] = React.useState<
      SingleValue<{
        value: string
        label: string
      }>
    >({ value: 'maxHeight:', label: 'По высоте' })

    const onSortTypeChange: onSortChangeType = (value) => {
      setActiveSortType(value)

      if (value) {
        setSortBy(value.value)
      }
    }

    const onChangeViewGrid = () => {
      setActiveView('grid')
    }

    const onChangeViewList = () => {
      setActiveView('list')
    }

    return (
      <div className="catalog-content__controls catalog-controls rel flex aic jcsb">
        <div className="catalog-controls__aside-toggle aside-toggle">
          <button className="aside-toggle__btn" onClick={() => onAsideOpen.current?.()} ref={asideBtnRef}>
            <img src="/static/images/aside-toggle.svg" alt="иконка переключатель" />
          </button>
        </div>
        <div className="flex aic">
          <img src="/static/images/sort-icon.svg" alt="" />
          <Select
            value={activeSortType}
            className="catalog-controls__sort-select"
            options={sortOptions}
            onChange={onSortTypeChange}
          />
        </div>
        <div className="catalog-controls__view view flex aic">
          <button
            onClick={onChangeViewGrid}
            className={`catalog-controls__btn view__btn-grid ${
              activeView === 'grid' ? 'catalog-controls__btn--active' : ''
            }`}
          >
            <img src="/static/images/view-grid.svg" alt="Grid icon" />
          </button>
          <button
            onClick={onChangeViewList}
            className={`catalog-controls__btn view__btn-list ${
              activeView === 'list' ? 'catalog-controls__btn--active' : ''
            }`}
          >
            <img src="/static/images/view-list.svg" alt="List icon" />
          </button>
        </div>
      </div>
    )
  },
)

FilterControls.displayName = 'FilterControls'
