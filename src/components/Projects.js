import ProjectsCard from './projectsCard';
import FocusPoints from './focusPoints';
import Datas from '../data.json';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Projects() {
    console.log(Datas);
    const projectsTitle = Datas.pages.page4.content.title;
  return (
    <div>
        <Navbar />
        <div>
            <h2>{projectsTitle[0]}</h2>
            <h2>{projectsTitle[1]}</h2>
        </div>
        <div>
            <FocusPoints />
        </div>
        <div>
            <ProjectsCard />
        </div>
        <Footer />
    </div>
  );
}
