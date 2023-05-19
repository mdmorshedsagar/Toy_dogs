

const ToysTable = (table) => {
    const {name , seller,category,quantity,price}=table.table;
    return (
        <tr>
        <td>{seller}</td>
        <td>{name}</td>
        <td>{category}</td>
        <td>{quantity}</td>
        <td>${price}</td>
        <td></td>
      </tr>
    );
};

export default ToysTable;