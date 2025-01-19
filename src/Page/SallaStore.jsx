import ProjectPage from "../components/ProjectPage/ProjectPage"
import sallastore from "../assets/img/sallastore.png"
import flora from "../assets/img/flora.png"
import arrow_inside_circle from "../assets/img/arrow_inside_circle.svg"

const SallaStore = () => {
    return (
        <div>
            <ProjectPage
                img={sallastore}
                projectName="SallaStore"
                githubImg={arrow_inside_circle}
                date="12-5-2024"
                proectDescription="A simple online store designed using HTML and CSS, showcasing a variety of electronic gadgets in an attractive and organized layout. It offers an easy browsing experience for viewing smartphones, tablets, and tech accessories. The design is responsive to ensure optimal viewing across all devices."
                lang="Html5 - Css3"
                Libraries="no libraries"
                Framework="no framework"
                btn="Github Repo"
                title="The Best"
                complementstitle="Projects"
                projects={[{ img: sallastore, name: "A Small Store", des: "HTML-css3", to: '' }, { img: flora, name: "Discover places", des: "Html-css3", to: '/bilalportfolio/flora' }]}
                to="https://bilaldaadaa.github.io/salla-store/"
            />
        </div>
    )
}

export default SallaStore
