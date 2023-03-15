import { createSelector } from "reselect";

const selectCategoriesReducer = (state) => state.categories;

export const selectCategories = createSelector(
    [selectCategoriesReducer], // this will be called in output function
    (categoriesSlice) => categoriesSlice.categories
)

export const selectCategoriesMap = createSelector(
    [selectCategories], // As long as categories array doesn't change do not run the below method
    (categories) => categories.reduce((acc, category) => {
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
        return acc
    }, {})
)
