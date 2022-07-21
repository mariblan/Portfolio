import '../projects.css';
import Datas from '../data.json';
import gamifyYourDay from '../resources/portada_abajo.png';
import cookBook from '../resources/cookbookplaceholder.jpeg';
import hackerrank from '../resources/hackerrankplaceholder.jpeg';


export default function ProjectsCard() {
    const projects = Datas.pages.page4.projects;
    const preview = () => {
        const fotos = [gamifyYourDay, cookBook, hackerrank];
        fotos.forEach((foto, i) => {
            if(fotos.indexOf(foto) === projects[i]) {
                return foto[i];
            }
            return <img src={foto[i]} alt="description" style={{width: '100%'}} />;
        })
    } 
  return (
    <div className='projectscard'>
        {projects.map( (project, index) => {
            return(
                <div key={index} class="card">
                    <img src={gamifyYourDay} alt="description" style={{width: '100%'}} />
                    <div class="container">
                        <h4><b>{project.title}</b></h4>
                        <p>Used: {project.features.Used}</p>
                        <p>Done by: {project.features.Team}</p>
                        <p>{project.url}</p>
                    </div>
                </div>
            );
        })}
    </div>
  )
}
