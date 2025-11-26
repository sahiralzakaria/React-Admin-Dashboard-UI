import { Visibility } from '@mui/icons-material'
import './widgetSm.css'

export default function WidgetSm() {
    return (
        <div className='widgetSm'>
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">

                <li className="widgetSmListItem">
                    <img className='widgetSmImg' src="https://images.pexels.com/photos/30224050/pexels-photo-30224050.jpeg" alt="" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Sahir Zakaria</span>
                        <span className="widgetSmUserTitle">Computer Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='widgetSmIcon' />
                        Display
                    </button>
                </li>

                <li className="widgetSmListItem">
                    <img className='widgetSmImg' src="https://images.pexels.com/photos/30224050/pexels-photo-30224050.jpeg" alt="" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Ali Khaled</span>
                        <span className="widgetSmUserTitle">UI/UX Designer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='widgetSmIcon' />
                        Display
                    </button>
                </li>

                <li className="widgetSmListItem">
                    <img className='widgetSmImg' src="https://images.pexels.com/photos/30224050/pexels-photo-30224050.jpeg" alt="" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Omar Al-Hariri</span>
                        <span className="widgetSmUserTitle">Full-Stack Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='widgetSmIcon' />
                        Display
                    </button>
                </li>

                <li className="widgetSmListItem">
                    <img className='widgetSmImg' src="https://images.pexels.com/photos/30224050/pexels-photo-30224050.jpeg" alt="" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Hani Youssef</span>
                        <span className="widgetSmUserTitle">Digital Marketer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='widgetSmIcon' />
                        Display
                    </button>
                </li>

                <li className="widgetSmListItem">
                    <img className='widgetSmImg' src="https://images.pexels.com/photos/30224050/pexels-photo-30224050.jpeg" alt="" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Kareem Sultan</span>
                        <span className="widgetSmUserTitle">Data Analyst</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='widgetSmIcon' />
                        Display
                    </button>
                </li>

            </ul>
        </div>

    )
}
