// Default to dark; legacy automatic preferences also resolve to dark.
export const themeBootstrap = `(function(){var t='dark';try{if(localStorage.getItem('blog-theme')==='light')t='light'}catch(e){}var d=document.documentElement;d.dataset.themePreference=t;d.dataset.theme=t})()`;
