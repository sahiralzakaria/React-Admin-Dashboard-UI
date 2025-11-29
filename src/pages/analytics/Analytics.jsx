import "./analytics.css";
import Chart from "../../components/chart/Chart";

export default function Analytics() {
    const analyticsData = [
        { name: "Jan", "Active Users": 4000, "Page Views": 2400 },
        { name: "Feb", "Active Users": 3000, "Page Views": 1398 },
        { name: "Mar", "Active Users": 2000, "Page Views": 9800 },
        { name: "Apr", "Active Users": 2780, "Page Views": 3908 },
        { name: "May", "Active Users": 1890, "Page Views": 4800 },
        { name: "Jun", "Active Users": 2390, "Page Views": 3800 },
        { name: "Jul", "Active Users": 3490, "Page Views": 4300 },
    ];

    return (
        <div className="analytics">
            <h1 className="analyticsTitle">Analytics Dashboard</h1>

            <div className="analyticsFeatured">
                <div className="analyticsCard">
                    <span className="analyticsCardTitle">Bounce Rate</span>
                    <div className="analyticsCardContainer">
                        <span className="analyticsCardRate">42.5%</span>
                        <span className="analyticsCardIcon negative">-11.4% ▼</span>
                    </div>
                    <span className="analyticsSub">Compared to last month</span>
                </div>

                <div className="analyticsCard">
                    <span className="analyticsCardTitle">Traffic Source</span>
                    <div className="analyticsCardContainer">
                        <span className="analyticsCardRate">Direct</span>
                        <span className="analyticsCardIcon positive">+2.4% ▲</span>
                    </div>
                    <span className="analyticsSub">Most frequent source</span>
                </div>

                <div className="analyticsCard">
                    <span className="analyticsCardTitle">Avg. Session</span>
                    <div className="analyticsCardContainer">
                        <span className="analyticsCardRate">2m 45s</span>
                        <span className="analyticsCardIcon positive">+1.4% ▲</span>
                    </div>
                    <span className="analyticsSub">Time on site</span>
                </div>
            </div>

            <div className="analyticsChartContainer">
                <Chart
                    data={analyticsData}
                    title="User Traffic (Last 7 Months)"
                    grid
                    dataKey="Active Users"
                />
            </div>

            <div className="analyticsWidgets">
                <div className="analyticsWidgetItem">
                    <h3 className="widgetTitle">Top Referrals</h3>
                    <ul className="referralList">
                        <li className="referralItem">
                            <span>Facebook</span>
                            <div className="progressBar"><div className="progress" style={{ width: "70%" }}></div></div>
                            <span>70%</span>
                        </li>
                        <li className="referralItem">
                            <span>Instagram</span>
                            <div className="progressBar"><div className="progress" style={{ width: "50%" }}></div></div>
                            <span>50%</span>
                        </li>
                        <li className="referralItem">
                            <span>LinkedIn</span>
                            <div className="progressBar"><div className="progress" style={{ width: "30%" }}></div></div>
                            <span>30%</span>
                        </li>
                    </ul>
                </div>

                <div className="analyticsWidgetItem">
                    <h3 className="widgetTitle">Device Usage</h3>
                    <div className="deviceStats">
                        <div className="deviceItem">
                            <span className="deviceType">Desktop</span>
                            <span className="deviceCount">8,204</span>
                        </div>
                        <div className="deviceItem">
                            <span className="deviceType">Mobile</span>
                            <span className="deviceCount">15,102</span>
                        </div>
                        <div className="deviceItem">
                            <span className="deviceType">Tablet</span>
                            <span className="deviceCount">2,301</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}