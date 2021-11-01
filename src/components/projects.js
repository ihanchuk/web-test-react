import { Heading } from "../ui/blocks/heading";
import { useFormValues } from "../ui/hooks/use-form-values";
import { NewProjectDetails } from "./new-project";
import { ProjectInfo } from "./project-info";

export const Projects = () => {
   const formValues = useFormValues();
   return <div className="projects" role="project-notes-cantainer">
       <Heading label="Projects">
            <NewProjectDetails />
        </Heading>
       {
           formValues
            .notes
            .map((n, index) =>{
                const path = `.notes[${index}]`;
                const base = ".notes";
                return  <ProjectInfo path={path} key={path} index={index} base={base} />
            })
       }
   </div>
}