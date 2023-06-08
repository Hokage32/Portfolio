import React from 'react'

const Projects = () => {
  return (
    <div className='projects'>
        <div className='projects-box'>
             <iframe width="560" height="315" src="https://www.youtube.com/embed/wjRuJFZmRao" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            
            
            <h2 className='project-title'>Strawberry</h2>
            <h4>React | Javascript | Framer Motion | CSS | PostgreSQL</h4>
            <p>Strawberry is a site where users can search through a collection of games and add games they wish to play to a playlist.</p>
           
        </div>


        <div className='projects-box'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/lpd6vWmXVVM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h2 className='project-title'>Macronutrient Calculator</h2>
            <h4>Javascript | CSS | HTML | PostgreSQL</h4>
            <p>App where users can input information such as weight, desired goal, and activity level, and they can then see the amount of calories and macronutrients they need to consume to reach selected goal.</p>
            

        </div>







    </div>
  )
}

export default Projects