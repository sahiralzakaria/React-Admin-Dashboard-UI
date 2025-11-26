import './widgetLg.css'

export default function WidgetLg() {
    return (
        <div className='widgetLg'>
            <h3 className="widgetLgTitle">Latest transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className='widgetLgTr'>
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Liam Carter</span>
                    </td>
                    <td className="widgetLgDate">12 Jan 2025</td>
                    <td className="widgetLgAmount">$180.50</td>
                    <td className="widgetLgStatus">
                        <Button type='Declined' />
                    </td>
                </tr>
                <tr className='widgetLgTr'>
                    <td className="widgetLgUser">
                        <img
                            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
                            alt=""
                            className="widgetLgImg"
                        />
                        <span className="widgetLgName">Marcus Hale</span>
                    </td>
                    <td className="widgetLgDate">10 Feb 2025</td>
                    <td className="widgetLgAmount">$420.90</td>
                    <td className="widgetLgStatus">
                        <Button type='Approved' />
                    </td>
                </tr>

                <tr className='widgetLgTr'>
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Ethan Miller</span>
                    </td>
                    <td className="widgetLgDate">28 Jan 2025</td>
                    <td className="widgetLgAmount">$320.00</td>
                    <td className="widgetLgStatus">
                        <Button type='Pending' />
                    </td>
                </tr>


                <tr className='widgetLgTr'>
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Noah Reynolds</span>
                    </td>
                    <td className="widgetLgDate">2 Feb 2025</td>
                    <td className="widgetLgAmount">$540.75</td>
                    <td className="widgetLgStatus">
                        <Button type='Approved' />
                    </td>
                </tr>
            </table>
        </div>
    )
}

export const Button = ({ type }) => {
    return <button className={'widgetLgButton ' + type} > {type}</button >
}