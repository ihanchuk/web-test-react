import { If } from "./if"

export const Heading = ({label, type="h2", children}) => {
    return <div>
            <If condition={type==="h1"}>
                <h1> {label} {children} </h1>
            </If>
            <If condition={type==="h2"}>
                <h2> {label} {children} </h2>
            </If>
            <If condition={type==="h3"}>
                <h2> {label} {children} </h2>
            </If>
        </div>
}
