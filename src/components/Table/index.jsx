import React from 'react';
import { connect } from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min';

import { setFavourite } from '../../store/actions';

import './index.css';
import withRouter from '../../hoc/withRouter';


class Table extends React.Component {

    Saveformatter(_key, row, setFavourite) {

        const { isFavourite = false } = row;

        const handleClick = (e) => {
            e.stopPropagation();
            setFavourite(row.id)
        };

        return <div className="save-icon">
            <i
                className="fa-solid fa-bookmark"
                style={{ color: isFavourite ? '#000' : '#ccc' }}
                onClick={handleClick}
            >
            </i>
        </div>
    };

    render() {
        const { data, columns, setFavourite } = this.props;

        return (
            <div className="custom-table">

                <ToolkitProvider
                    columns={[...columns, {
                        dataField: 'save',
                        text: 'Save',
                        formatter: (key, row) => this.Saveformatter(key, row, (id) => setFavourite(id)),
                    }]}
                    data={data}
                    keyField="id"
                >
                    {
                        props => (
                            <div>
                                <hr />
                                <BootstrapTable
                                    {...props.baseProps}
                                    rowEvents={{
                                        onClick: (_e, row) => this.props.router.navigate(`/bank-details/${row.ifsc}`)
                                    }}
                                    pagination={paginationFactory()}
                                    striped
                                    hover
                                    condensed
                                    bordered={false}
                                />
                            </div>
                        )
                    }
                </ToolkitProvider>
            </div>
        )
    }
};

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch) => {
    return {
        setFavourite: (id) => {
            dispatch(setFavourite(id))
        }
    }
};

const WrappedComponent = withRouter(Table)

export default connect(mapStateToProps, mapDispatchToProps)(WrappedComponent);