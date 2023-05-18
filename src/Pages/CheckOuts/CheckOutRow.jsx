
const CheckOutRow = ({ checkOut }) => {
    const { price, date, title, img } = checkOut
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="w-24 rounded">
                            <img src={img} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{title}</div>
                    </div>
                </div>
            </td>
            <td>${price}</td>
            <td>{date}</td>
            <th>
                <button className="btn btn-error">Pending</button>
            </th>
        </tr>
    );
};

export default CheckOutRow;