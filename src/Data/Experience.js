import MDI from '../Assets/Images/MDI.jpeg';
import Ignition from '../Assets/Images/Ignition.png';
import PennState from '../Assets/Images/PennState.png';
import iCode from '../Assets/Images/iCode.png';
import StateFarm from '../Assets/Images/StateFarm.png';

class Experience{

    MDI(){
        const myData = {
            company:'Mutli-Dimensional Integration Advantage',
            position:'Software Control Engineer',
            location:'Allentown, PA',
            start:'May 2022',
            end:'Dec 2022',
            duration:'7mo',
            description:'Gained experience in analyzing project requirements and performing technical calculations '+
            'supporting design solutions. Worked to organize large data [system passwords, IP addresses, setpoints, alarms, etc.] to manageable formats using Python and Excel. '+
            'Worked directly with a client who desired a system that preserved data quality during energy loss or connection issues. Using Ignition, Python, Java and RestFulAPI concepts my team successfully '+
            'created a UI to interact with the data and created a system to ensure backloggin of "lost" data. Required to build a custom Network Time Protocol over a wireless network to sync servers and devices too. '+
            'Other projects included using Python and Ignition to control motor speeds, latches, and doors based on sensor input. ',
            tags:['Python', 'Javascript', 'Network Communication', 'REST-APIS'],
            icon1:MDI,
            icon2:Ignition,
        }
        return myData;
    }

    RESEARCH(){
        const myData = {
            company:'Penn State - University Park',
            position:'Research Assistant',
            location:'State College, PA',
            start:'March 2023',
            end:'Dec 2023',
            duration:'9mo',
            description:'Researched topics regarding blending AI with Programming Languages. '+
            'Focused on using file information to predict types of variables/return in a dynamic program setting. '+
            'Attempted to utilize Python libraries to web scrape open source pages in order to generate a feasible dataset. Lacked promising'+
            'results and found to much inconsistancy and errors in data. Sought to find an already existing dataset and reached out to researchers'+
            ' studying similar topics. No responses were collected so I deemed my research topic infeasible given my resources. '+
            'Check out the projects page to see more related to Artificial Intelligence knowledge.',
            tags:['AI', 'Machine Learning', 'WebScraping', 'Python', 'Data Analysis'],
            icon1:PennState
        }
        return myData;
    }

    ICODE(){
        const myData = {
            company:'iCode Edu',
            position:'Online Tutor',
            location:'(Remote)',
            start:'June 2023',
            end:'Aug 2023',
            duration:'3mo',
            description:'Tutored students from 4th-11th grade in computer science related courses. '+
            'Specifically in crypto-currency, web-development, and introductory level Python.',
            tags:['Python', 'Fundamental Coding Principles'],
            icon1:iCode
        }
        return myData;
    }

    STATEFARM(){
        const myData = {
            company:'State Farm Insurance',
            position:'Summer Intern (Paid)',
            location:'Fogelsville, PA',
            start:'June 2019',
            end:'Sept 2019',
            duration:'4mo',
            description:'Shadowed directly under Insurance Agent, Shawn Leh. Tasked with helping manage his client schedule. Was given responsibilities of writing procedures, reports, and technical documents in coherent terminology.'+
            'Proposed use of SQL for faster and more complex query parameters. Managed client database organization and migrations to other systems.'+
            'Utilized Excel equations to extract data from sheets.',
            tags:['Excel', 'SQL', 'Scheduling', 'Early Communication'],
            icon1:StateFarm
        }
        return myData;
    }

}


const experience = new Experience();

export default experience;