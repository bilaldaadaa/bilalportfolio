import ProjectPage from "../components/ProjectPage/ProjectPage"


const SallaStore = () => {
    return (
        <div>
            <ProjectPage
                img="/public/assets/img/sallastore.png"
                projectName="SallaStore"
                githubImg='/public/assets/img/arrow_inside_circle.svg'
                date="12-5-2024"
                proectDescription="A simple online store designed using HTML and CSS, showcasing a variety of electronic gadgets in an attractive and organized layout. It offers an easy browsing experience for viewing smartphones, tablets, and tech accessories. The design is responsive to ensure optimal viewing across all devices."
                lang="Html5 - Css3"
                Libraries="no libraries"
                Framework="no framework"
                btn="Github Repo"
                title="The Best"
                complementstitle="Projects"
                projects={[{ img: '/public/assets/img/sallastore.png', name: "A Small Store", des: "HTML-css3", to: '' }, { img: '/public/assets/img/flora.png', name: "Discover places", des: "Html-css3", to: '/bilalportfolio/flora' }]}
                to="https://bilaldaadaa.github.io/salla-store/"
            />
        </div>
    )
}

export default SallaStore
