export const Container = ({children}) => {
    return <div className="layout"><div className="wrapper">
        <section className="content"> 
            <div className="columns">
                 {children}
            </div>  
        </section>
     </div>
    </div> 
}