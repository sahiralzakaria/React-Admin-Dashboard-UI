import "./transactions.css";
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { transactionRows } from "../../dummyData";

export default function Transactions() {


    const [data, setData] = useState(transactionRows);

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },

        {
            field: 'user',
            headerName: 'Customer',
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="transactionListUser">
                        <img className="transactionListImg" src={params.row.avatar} alt="" />
                        {params.row.name}
                    </div>
                );
            },
        },

        { field: 'date', headerName: 'Date', width: 150 },
        { field: 'amount', headerName: 'Amount', width: 120 },
        { field: 'method', headerName: 'Payment', width: 160 },

        {
            field: 'status',
            headerName: 'Status',
            width: 120,
            renderCell: (params) => {
                return (
                    <div className={`transactionListStatus ${params.row.status}`}>
                        {params.row.status}
                    </div>
                )
            }
        },

        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <div className="transactionListAction">
                        <Link to={'/transaction/' + params.row.id}>
                            <button className="transactionListEdit">Edit</button>
                        </Link>
                        <DeleteOutline
                            className="transactionListDelete"
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </div>
                );
            }
        },
    ];

    return (
        <div className='transactionList'>
            <DataGrid
                rows={data}
                columns={columns}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                disableRowSelectionOnClick
                initialState={{
                    pagination: { paginationModel: { pageSize: 8 } },
                }}
            />
        </div>
    );
}