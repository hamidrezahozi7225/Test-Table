const _=require("lodash")
export function PaginateTest(data,currentpage,pagesize) {
    return _(data).slice(currentpage).take(pagesize).value();
}