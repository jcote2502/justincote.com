import '../App.css';
import './CSS/About.css';
import suit from '../Assets/Images/About/Suit.PNG';
import guitar from '../Assets/Images/About/guitar.jpeg';
import Football from '../Assets/Images/About/Football.jpg';

// Author : Justin Cote

const About = () => {
    const guitarVideo = `${process.env.PUBLIC_URL}/Assets/Guitar.mp4`;
    const footballVideo = `${process.env.PUBLIC_URL}/Assets/Football.mp4`;
    const pianoVideo = `${process.env.PUBLIC_URL}/Assets/Piano.mp4`;
    const piano2Video = `${process.env.PUBLIC_URL}/Assets/Piano2.mp4`;

    const intro = `
        I was born and raised in the Lehigh Valley. Outside of highschool, extra-ciriculars, and sports, I 
        spent a lot of my time hanging out with friends, playing video games, and exploring around on my computer. I 
        wrote my first computer program my sophomore year of highschool for a javascript class. Ever since, I've been hooked 
        on computers and software. Some hobbies I enjoy now are playing IM football, playing pick-up basketball, playing the guitar, learning 
        music theory and concepts, following the NFL and NBA, and cooking. 
    `
    const flagFootball = `Flag Football :    I played in the Penn State IM Mens Flag Football league for 3 years. We made it to the fourth round of playoffs each year.
    `

    const guitarComment = `
        In January 2022, I got my very first guitar. Two years later and I'm still playing. I have had so much fun teaching myself the guitar and 
        bits of music theory along the way. It is a great way for me to relax and excersise my mind while taking some time to myself. Seeing my progress over time,
        is one of the most rewarding feelings ever. Everytime I look back, and see how much progress I have made it motivates me to keep playing. 
    `
    const pianoComment = `In addition to learning the guitar, I've also begun learning piano the past two years. I found it to be a helpful tool when learning about music theory. 
        I've enjoyed learning the keyboard to bring diversity to my instrumental arsenal. 
    `
    return (
        <div className='scaffold'>
            <div className='wrap-container'>
                <div className='topic-wrap'>
                    <img src={suit} alt='personal' className='bruh' />
                    <div className='intro-container'>
                        <div className='header'>About Me</div>
                        <div className='intro-paragraph'>{intro}</div>
                    </div>
                </div>
                <div className='topic-wrap'>
                    <video width='300px' className='video-container' controls>
                        <source src={guitarVideo} />
                    </video>
                    <div className='paragraph'>{guitarComment}</div>
                    <img src={guitar} alt='piano' className='image' />
                </div>
                <div className='topic-wrap'>
                    <video width='300px' className='video-container' controls>
                        <source src={piano2Video} />
                    </video>
                    <div className='paragraph'>{pianoComment}</div>
                    <video width='300px' className='video-container' controls>
                        <source src={pianoVideo} />
                    </video>
                </div>
                <div className='topic-wrap'>
                    <div className='paragraph'>{flagFootball}</div>
                    <video width='300px' className='video-container' controls>
                        <source src={footballVideo} />
                    </video>
                    <img src={Football} alt='football' className='image' />
                </div>
            </div>
        </div>
    )
}

export default About;