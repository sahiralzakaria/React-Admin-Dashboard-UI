import './userList.css'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { uerRows } from '../../dummyData';
import { Link } from "react-router-dom";
import { useState } from 'react';

export default function UserList() {
    const [data, setData] = useState(uerRows);

    const handleDelete = (id) => {
        setData(data.filter(item => item.id != id));
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },

        { field: 'username', headerName: 'Username', width: 180 },

        {
            field: 'avatar',
            headerName: 'Avatar',
            width: 100,
            renderCell: (params) => (
                <img className='userListImg'
                    src={params.row.avatar}
                    alt="avatar"
                />
            )
        },

        { field: 'email', headerName: 'Email', width: 220 },

        { field: 'status', headerName: 'Status', width: 120 },

        {
            field: 'transactions',
            headerName: 'Transactions',
            width: 150,
            sortable: true,

        },

        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <div className="userListAction">
                        <Link to={'/user/' + params.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutline className="userListDelete"
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </div>
                );
            }


        },
    ];

    return (
        <div className='userList'>
            <DataGrid
                rows={data}
                columns={columns}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                disableRowSelectionOnClick

            />
        </div>
    )
}
