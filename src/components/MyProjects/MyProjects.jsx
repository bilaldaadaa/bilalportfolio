import MyProjectsCard from "../MyProjectsCard/MyProjectsCard"


const MyProjects = ({ title, complementstitle, btn, projects, imgbtn, onclick }) => {
    return (
        <div id="project" className="px-7 lg:px-[70px] mb-[94px] ">
            <div className="flex justify-between items-end mb-14 flex-wrap">
                <div className=" max-w-[381px]">
                    <p className="font-poppins font-medium text-xl ledaing-[30px]  mb-2 text-[#0C96E2] ">portfolio</p>
                    <h1 className="font-poppins font-semibold text-[40px] ledaing-[54px] text-[#1D2130] max-w-[381px] dark:text-white">{title} <span className="text-[#0C96E2]">{complementstitle}</span></h1>
                </div>
                <a href="https://github.com/bilaldaadaa">
                    <button className="flex items-center justify-center  bg-[#0C96E2] w-[163px] h-12 rounded-lg text-white cursor-pointer font-inter text-sm leading-6 font-medium" onClick={onclick} >
                        {btn}
                        {imgbtn}
                    </button>
                </a>
            </div>
            <div className=" flex items-center justify-center lg:justify-between flex-wrap gap-6">
                {projects.map((project, index) => {
                    return (
                        <MyProjectsCard key={index}
                            projectImg={project.img}
                            projectname={project.name}
                            projectdescription={project.des}
                            to={project.to}
                            demoProject={project.demo}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default MyProjects
