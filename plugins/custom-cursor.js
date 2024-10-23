export default ({ app }) => {
    if (process.client) {
      const customCursor = document.createElement('div');
      customCursor.className = 'custom-cursor';
      document.body.appendChild(customCursor);
  
      const moveCursor = (event) => {
        const { clientX, clientY } = event;
        customCursor.style.left = `${clientX}px`;
        customCursor.style.top = `${clientY}px`;
      };
  
      window.addEventListener('mousemove', moveCursor);
  
    
      // app.router.afterEach(() => {
      //   window.removeEventListener('mousemove', moveCursor);
      //   document.body.removeChild(customCursor);
      // });
    }
  };
  