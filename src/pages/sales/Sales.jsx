import "./sales.css";
import Chart from "../../components/chart/Chart";

export default function Sales() {

    const salesData = [
        { name: "Jan", Sales: 4000 },
        { name: "Feb", Sales: 3000 },
        { name: "Mar", Sales: 5000 },
        { name: "Apr", Sales: 4500 },
        { name: "May", Sales: 6000 },
        { name: "Jun", Sales: 5500 },
        { name: "Jul", Sales: 7000 },
        { name: "Aug", Sales: 6500 },
        { name: "Sep", Sales: 8000 },
        { name: "Oct", Sales: 7500 },
        { name: "Nov", Sales: 9000 },
        { name: "Dec", Sales: 10000 },
    ];

    return (
        <div className="sales">
            <h1 className="salesTitle">Sales Overview</h1>
            <div className="salesFeatured">
                <div className="salesCard">
                    <span className="salesCardTitle">Total Revenue</span>
                    <div className="salesCardContainer">
                        <span className="salesCardMoney">$54,230</span>
                        <span className="salesCardRate positive">+12.4% ▲</span>
                    </div>
                    <span className="salesSub">Compared to last month</span>
                </div>

                <div className="salesCard">
                    <span className="salesCardTitle">Total Cost</span>
                    <div className="salesCardContainer">
                        <span className="salesCardMoney">$12,450</span>
                        <span className="salesCardRate negative">+5.2% ▲</span>
                    </div>
                    <span className="salesSub">Operations & Marketing</span>
                </div>

                <div className="salesCard">
                    <span className="salesCardTitle">Net Profit</span>
                    <div className="salesCardContainer">
                        <span className="salesCardMoney">$41,780</span>
                        <span className="salesCardRate positive">+8.1% ▲</span>
                    </div>
                    <span className="salesSub">After taxes</span>
                </div>
            </div>

            <div className="salesChart">
                <Chart data={salesData} title="Sales Performance (Last Year)" grid dataKey="Sales" />
            </div>

            <div className="salesWidgets">

                <div className="salesWidgetSm">
                    <h3 className="salesWidgetTitle">Recent Transactions</h3>
                    <table className="salesWidgetTable">
                        <thead>
                            <tr>
                                <th>Customer</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="salesUser"><span className="salesName">Liam Carter</span></td>
                                <td className="salesDate">2 Jun 2025</td>
                                <td className="salesAmount">$122.00</td>
                                <td className="salesStatus"><button className="salesButton Approved">Approved</button></td>
                            </tr>
                            <tr>
                                <td className="salesUser"><span className="salesName">Sara W.</span></td>
                                <td className="salesDate">1 Jun 2025</td>
                                <td className="salesAmount">$90.50</td>
                                <td className="salesStatus"><button className="salesButton Pending">Pending</button></td>
                            </tr>
                            <tr>
                                <td className="salesUser"><span className="salesName">Karim Ahmed</span></td>
                                <td className="salesDate">31 May 2025</td>
                                <td className="salesAmount">$300.00</td>
                                <td className="salesStatus"><button className="salesButton Declined">Declined</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="salesWidgetLg">
                    <h3 className="salesWidgetTitle">Top Selling Products</h3>
                    <ul className="topProductsList">
                        <li className="topProductItem">
                            <div className="productInfo">
                                <div className="productImgContainer">
                                    <span className="rank">1</span>
                                </div>
                                <span className="productName">Apple Airpods</span>
                            </div>
                            <span className="productSales">$4,500</span>
                        </li>
                        <li className="topProductItem">
                            <div className="productInfo">
                                <div className="productImgContainer">
                                    <span className="rank">2</span>
                                </div>
                                <span className="productName">Samsung S24 Ultra</span>
                            </div>
                            <span className="productSales">$3,200</span>
                        </li>
                        <li className="topProductItem">
                            <div className="productInfo">
                                <div className="productImgContainer">
                                    <span className="rank">3</span>
                                </div>
                                <span className="productName">PlayStation 5</span>
                            </div>
                            <span className="productSales">$2,800</span>
                        </li>
                        <li className="topProductItem">
                            <div className="productInfo">
                                <div className="productImgContainer">
                                    <span className="rank">4</span>
                                </div>
                                <span className="productName">Mechanical Keyboard</span>
                            </div>
                            <span className="productSales">$1,100</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}