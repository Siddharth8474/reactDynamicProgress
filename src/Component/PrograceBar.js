import React,{useState} from 'react'
import './PrograceBar.css'

const PrograceBar = ({percent}) => {

const getcolor = (percent) =>{
if(percent<=50) return 'red';
if(percent<=70) return 'yellow';
return 'green'
}

  return (
    <div className='progracebar-wrapper'>
        <div 
          className='progracebar'
          style={{width:`${percent}%`,
            backgroundColor:getcolor(percent)
          }}
          
        />
    </div>
  )
}

const StudentProgres = () =>{
    const [students] = useState([
        {
            name:'alice',
            subjects:{Math:50,History:75,Science:80}
        },

        {
            name:'john',
            subjects:{Math:55,History:49,Science:78}
        },

        {
            name:'adaar',
            subjects:{Math:78,History:44,Science:97}
        }
    ])

    const totalmarks = 100;

    return(
       <div>
        <h3>Student subjects progress</h3>
        {
            students.map((student,index) => (
                <div key={index} className='student-progress'>
                    <h4>{student.name}</h4>
                   {Object.entries(student.subjects).map(([subject,score],idx) => {
                    const percent = (score/totalmarks)*100;
                    return(
                        <div key={idx}>
                        <p>{subject}:{score}/{totalmarks}</p>
                        <PrograceBar percent={percent} />
                        </div>
                    )
                   })}
                 </div>
            ))
        }
       </div>
    )

}

export default StudentProgres