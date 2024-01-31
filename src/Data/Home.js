import PennState from '../Assets/Images/PennState.png'
import Emmaus from '../Assets/Images/Emmaus.webp';
// Author : Justin Cote


class HomeData{
    
    Summary(){
        const myData = {
            title:'Summary',
            contents:"Self Driven Computer Scientist committed to reliability and high-quality work. Skilled in helping modernize workplaces and maintaining focus on company goals. A passionate individual with outstanding communication, analytical and critical thinking skills. Somebody who holds a high standard for production and success regarding their peers and themselves. Dedicated to continue the growth of their skills and mind."
        }
        return myData
    }

    Skills(){
        const myData = {
            title:'Skills',
            contents:[
                "Full Stack Dev",
                "Python",
                "Javascript",
                "React-CLI",
                "React-Native (mobile dev)",
                "NPM",
                "Relational DB: MySQL, MariaDB",
                "Document DB: MongoDB, FireBase",
                "Data Structures + Algorithms",
                "C (Programming Language)",
                "Embedded Programming",
                "Self Taught Guitarist :)"
            ]
        }
        return myData

    }

    Education(){
        const myData = {
            schools:[
                {
                    name:'Penn State - University Park',
                    location:'101 Hammond Bldg, University Park, PA 16802',
                    years:['2020', '2024'],
                    college:'College of Engineering',
                    degree: 'Bachelors of Science',
                    major:'Computer Science',
                    minor:'Entrepreunurship and Innovation in Engineering',
                    GPA:'3.2',
                    honors:["Dean's List"],
                    clubs:['Ski Club : 2022 - 2023','IM Flag Football : 2021 - 2023'],
                    icon:PennState
                },
                {
                    name:'Emmaus High School',
                    location:'500 Macungie Ave, Emmaus, PA 18049',
                    years:['2016',  '2020'],
                    GPA:'4.0',
                    honors:['Honors Roll'],
                    clubs:['National Honors Society : 2018 - 2020'],
                    awards:['Science Leadership Award 2016'],
                    icon: Emmaus
                }
            ]
        }
        return myData;
    }
}

const homeData = new HomeData()
export default homeData;