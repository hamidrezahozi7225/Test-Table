const _=require("lodash")
export function Paginate(item,currentPage,pageSize) {
    const startIndex=(currentPage - 1)*pageSize
    return _(item).slice(startIndex).take(pageSize).value();
}