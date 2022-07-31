import React from "react";
import { GetApi} from "./Api/GetApi";
import {Paginate} from "./Paginate";
import Loader from "./Loader/Loader";
const _=require("lodash")
const titleTable=[
    {id:1,name:"Id"},
    {id:2,name:"UserId"},
    {id:3,name:"Title"},
    {id:4,name:"Body"},
    {id:5},
    {id:6},
];
const filterList=[
    {id:1,name:"All user"},
    {id:2,name:1},
    {id:3,name:2},
    {id:4,name:3},
    {id:5,name:4},
    {id:6,name:5},
    {id:7,name:6},
    {id:8,name:7},
    {id:9,name:8},
    {id:10,name:9},
    {id:11,name:10}
]
const FA=require("react-fontawesome")
class Table extends React.Component {
    state = {
        data: [],
        currentPage: 1,
        pageSize: 10,
        loaded: false
    }

    async componentDidMount() {
        const {data} = await GetApi();
        this.setState({data, loaded: true})
    }

    handleLike = item => {
        const data = [...this.state.data]
        const index = data.indexOf(item)
        data[index].liked = !data[index].liked;
        this.setState({data})
    }
    handleDelete = item => {
        const filter = [...this.state.data]
        const data = filter.filter(m => m.id !== item.id)
        this.setState({data})
        // await deleteApi(item.id) : my data is fake
    }
    handlePage = item => {
        const currentPage = item;
        this.setState({currentPage})
    }
    handlefilterList = async item => {
        const {data: users} = await GetApi();
        const data = item.name !== "All user" ? users.filter(m => m.userId === item.name) : users;
        this.setState({data, currentPage: 1})
    }

    render() {
        const {data, pageSize, currentPage} = this.state;
        const paginateNum = Math.ceil(data.length / pageSize)
        const numberpage = _.range(1, paginateNum + 1)
        const painate = Paginate(data, currentPage, pageSize)
        return (
            <>
                {this.state.loaded ?
                    <div className="container mt-2">
                        <h1 style={{color: "rebeccapurple"}}>Table with Fake Api</h1>
                        <div className="row mt-4">
                            <div className="col-12 col-sm-12 col-md-4 col-lg-3 mt-4">
                                <h3 style={{color: "coral"}}>Filter list</h3>
                                <ul className="list-group">
                                    {filterList.map(item => (
                                        <li
                                            className="list-group-item " key={item.id}
                                            onClick={() => this.handlefilterList(item)}
                                        >UserId {item.name}
                                        </li>
                                    ))}

                                </ul>
                            </div>
                            <div className="col mt-4">
                                <table className="table table-striped">
                                    <thead>
                                    <tr>
                                        {titleTable.map(item => (
                                            <th scope="col" key={item.id}> {item.name}</th>
                                        ))}

                                    </tr>
                                    </thead>
                                    <tbody>
                                    {painate.map(item => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.userId}</td>
                                            <td>{item.title}</td>
                                            <td>{item.body}</td>
                                            <td><FA
                                                name={item.liked ? "heart" : "heart-o"}
                                                onClick={() => this.handleLike(item)}/>
                                            </td>
                                            <td>
                                                <button
                                                    className="btn btn-danger p-2"
                                                    onClick={() => this.handleDelete(item)}> Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination">
                                        {numberpage.map(item => (
                                            <li
                                                key={item}
                                                className={item === currentPage ? "page-item active" : "page-item"}
                                                onClick={() => this.handlePage(item)}>
                                                <a className="page-link" href="#">{item}</a>
                                            </li>
                                        ))}

                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    : <Loader/>}
            </>
        );
    }
}
export default Table