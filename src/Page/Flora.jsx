import ProjectPage from "../components/ProjectPage/ProjectPage"
import sallastore from "../assets/img/sallastore.png"
import flora from "../assets/img/flora.png"
import arrow_inside_circle from "../assets/img/arrow_inside_circle.svg"
const Flora = () => {
    return (
        <div>
            <ProjectPage
                img={flora}
                projectName="Flora"
                githubImg={arrow_inside_circle}
                date="12-5-2024"
                proectDescription=
                "A beautifully crafted website using HTML and CSS to help users explore and discover their dream homes. The platform showcases a variety of houses with detailed descriptions and appealing visuals. The responsive design ensures a smooth and enjoyable browsing experience on any device."
                lang="Html5 - Css3"
                Libraries="no libraries"
                Framework="no framework"
                btn="Github Repo"
                title="The Best "
                complementstitle="Projects"
                projects={[{ img: sallastore, name: "A Small Store", des: "HTML-css3", to: '/bilalportfolio/sallastore' }, { img: flora, name: "Discover places", des: "Html-css3", to: '' }]}
                to=" https://bilaldaadaa.github.io/flora/"
            />
        </div>
    )
}

export default Flora
