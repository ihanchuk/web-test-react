import { useFormValues } from "../ui/hooks/use-form-values"

export const Dump = () => {
    const values = useFormValues();
    return <div>
        <h1>Form dump</h1>
        <pre>
            {JSON.stringify(values, null, 2)}
        </pre>
    </div>
}