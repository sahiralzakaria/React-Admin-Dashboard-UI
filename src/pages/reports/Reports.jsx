import { issuesData, reportsData } from "../../dummyData";
import "./reports.css";
import {
    GetApp,
    Description,
    CheckCircle,
    Flag
} from "@mui/icons-material";

export default function Reports() {

    return (
        <div className="reports">
            <h1 className="reportsTitle">System Reports</h1>

            <div className="reportsStats">
                <div className="reportStatItem">
                    <span className="reportStatTitle">Total Reports</span>
                    <div className="reportStatContainer">
                        <span className="reportStatValue">245</span>
                        <Description className="reportStatIcon" style={{ color: "#5550bd" }} />
                    </div>
                    <span className="reportStatSub">Generated this year</span>
                </div>

                <div className="reportStatItem">
                    <span className="reportStatTitle">Pending Issues</span>
                    <div className="reportStatContainer">
                        <span className="reportStatValue">12</span>
                        <Flag className="reportStatIcon" style={{ color: "orange" }} />
                    </div>
                    <span className="reportStatSub">Needs attention</span>
                </div>

                <div className="reportStatItem">
                    <span className="reportStatTitle">System Status</span>
                    <div className="reportStatContainer">
                        <span className="reportStatValue">Good</span>
                        <CheckCircle className="reportStatIcon" style={{ color: "green" }} />
                    </div>
                    <span className="reportStatSub">All services online</span>
                </div>
            </div>

            <div className="reportsContainer">

                <div className="reportsList">
                    <h3 className="reportsSectionTitle">Generated Reports</h3>
                    <table className="reportsTable">
                        <thead>
                            <tr>
                                <th>File Name</th>
                                <th>Type</th>
                                <th>Date Generated</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reportsData.map((report) => (
                                <tr key={report.id}>
                                    <td className="reportName">
                                        <Description className="fileIcon" />
                                        {report.name}
                                    </td>
                                    <td><span className={`fileType ${report.type}`}>{report.type}</span></td>
                                    <td className="reportDate">{report.date}</td>
                                    <td>
                                        <span className={`reportStatus ${report.status}`}>{report.status}</span>
                                    </td>
                                    <td>
                                        {report.status === "Ready" ? (
                                            <button className="reportDownloadBtn">
                                                <GetApp className="downloadIcon" /> Download
                                            </button>
                                        ) : (
                                            <button className="reportDownloadBtn disabled" disabled>
                                                Generating...
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="reportsIssues">
                    <h3 className="reportsSectionTitle">Recent Issues</h3>
                    <ul className="issueList">
                        {issuesData.map((issue) => (
                            <li className="issueItem" key={issue.id}>
                                <div className="issueInfo">
                                    <span className="issueTitle">{issue.title}</span>
                                    <span className="issueTime">{issue.time}</span>
                                </div>
                                <span className={`issuePriority ${issue.priority}`}>{issue.priority}</span>
                            </li>
                        ))}
                    </ul>
                    <button className="viewAllBtn">View All Issues</button>
                </div>
            </div>
        </div>
    );
}