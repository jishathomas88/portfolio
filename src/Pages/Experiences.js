import React from 'react';
import {VerticalTimeline,VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
function Experiences() {
  return (
    <div className='experience'>
   <VerticalTimeline lineColor="#3e497a">
    <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2005-2008"
    iconStyle={{background:"#3e497a",color:"#fff"}}
    icon={<SchoolIcon />}
    >
   <h3 className='vertical-timeline-element-title'>BSc Computer Science,Kerala University</h3>
   <p>Bachelor Degree</p>
    </VerticalTimelineElement>

    <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2008-2011"
    iconStyle={{background:"#3e497a",color:"#fff"}}
    icon={<SchoolIcon />}
    >
   <h3 className='vertical-timeline-element-title'>MCA,M G University,Kottayam</h3>
   <p>Master Degree</p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2014-2016"
    iconStyle={{background:"#e9d35b",color:"#fff"}}
    icon={<WorkIcon />}
    >
   <h3 className='vertical-timeline-element-title'>St.Marys Bethany School,Kottarakkara</h3>
   <p>Computer Teacher</p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2016-2022"
    iconStyle={{background:"#e9d35b",color:"#fff"}}
    icon={<WorkIcon />}
    >
   <h3 className='vertical-timeline-element-title'>Freelancer in Teaching</h3>
   <p>Computer Teacher</p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2022-present"
    iconStyle={{background:"#e9d35b",color:"#fff"}}
    icon={<WorkIcon />}
    >
   <h3 className='vertical-timeline-element-title'>Freelaner in Web Development</h3>
   <p>Web Developer</p>
    </VerticalTimelineElement>
   </VerticalTimeline>
    </div>
  )
}

export default Experiences
