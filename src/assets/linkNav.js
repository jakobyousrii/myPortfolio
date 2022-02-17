const linkNav = (ref) =>{
    
   return window.scrollTo({top: ref.current.offsetTop, behavior: 'smooth'});
}


export const linkNavPrep = (ref, setIsClicked)=>{


   const portfolioLinkHandler = () => {
      linkNav(ref);
      setIsClicked(previous=> !previous);
    }

    return portfolioLinkHandler;
}



export default linkNav;


