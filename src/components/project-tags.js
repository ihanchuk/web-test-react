import { InputTag } from "../ui/form/input-tag";
import { Tag } from "../ui/form/tag";
import { useFormValues } from "../ui/hooks/use-form-values";

export const ProjectTags = () => {
   const formValues = useFormValues();
   return <div className="projects__tags" role="project-tags-cantainer">
       <div>
            {
                formValues
                    .projectNames
                    .map((v, index) =>{
                        const path = `.projectNames[${index}]`;
                        const base = ".projectNames";
                        return  <Tag path={path} key={path} index={index} base={base} label={v.value} />
                    })
            }
            <InputTag />
       </div>       
   </div>
}