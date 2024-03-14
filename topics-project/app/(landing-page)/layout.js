const LandingPageLayout = ({
    children
  }) => {
    return ( 
      <div className="h-full">
        <main className="h-full">
          {children}
        </main>
      </div>
     );
  }
   
  export default LandingPageLayout;