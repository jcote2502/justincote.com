import './Styles.css';

const SchoolCard = (props) => {
    const data = props.data;

    return (
        <div className='CARD-SCHOOL-Container'>
            <img src={data.icon} alt='icon' className='CARD-SCHOOL-Icon-Container'/>
            <div >
            <h1>{data.name}</h1>
            <h3>{data.location}</h3>
            {data.college ? <h2>{data.college}</h2>: null}
            <span>
                GPA&nbsp;: &nbsp;{data.GPA}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; From {data.years[0]} : To {data.years[1]}
            </span>
            {data.major?<p>Studied {data.major},</p>:null}
            {data.minor?<p>while obtaining a minor in {data.minor}.</p>:null}
            {data.honors?<p>Achieved {data.honors[0]}</p>:null}
            {data.awards?<p>Awarded: {data.awards[0]}</p>:null}
            {data.clubs?<p>Participated In: {data.clubs[0]}, {data.clubs[1]}</p>:null}
            </div>
        </div>

    )
}

const ProjectCard = (props) => {
    const {index, data} = props;
    return(
        <div key={index} className='CARD-PROJ-Container'>
            <div className='CARD-PROJ-title'>{data.title}</div>
            <div className='CARD-PROJ-tags'>{
                data.tags.map((item,index)=>(
                    <div key={index}>{item};</div>
                ))
            }</div>
            
        </div>
    );
}

export {SchoolCard, ProjectCard};