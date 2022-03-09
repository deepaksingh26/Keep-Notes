const Footer = () => {
    let year=new Date().getFullYear();
    return ( 
        <>
        <p className="ft" >copyright © {year}</p>
        </>
     );
}
 
export default Footer;