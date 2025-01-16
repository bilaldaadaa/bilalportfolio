import ProjectPage from "../components/ProjectPage/ProjectPage"

const Flora = () => {
    return (
        <div>
            <ProjectPage
                img="/public/assets/img/flora.png"
                projectName="Flora"
                githubImg='/public/assets/img/arrow_inside_circle.svg'
                date="12-5-2024"
                proectDescription=
                "A beautifully crafted website using HTML and CSS to help users explore and discover their dream homes. The platform showcases a variety of houses with detailed descriptions and appealing visuals. The responsive design ensures a smooth and enjoyable browsing experience on any device."
                lang="Html5 - Css3"
                Libraries="no libraries"
                Framework="no framework"
                btn="Github Repo"
                title="The Best "
                complementstitle="Projects"
                projects={[{ img: '/public/assets/img/sallastore.png', name: "A Small Store", des: "HTML-css3", to: '/sallastore' }, { img: '/public/assets/img/flora.png', name: "Discover places", des: "Html-css3", to: '' }]}
                to=" https://bilaldaadaa.github.io/flora/"
            />
        </div>
    )
}

export default Flora
