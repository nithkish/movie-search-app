//fuction to re-size the window and test
export const resizeWindow = (width:number=1080, height:number=520) => {
    window.innerWidth = width;
    window.innerHeight = height;
    window.dispatchEvent(new Event('resize'));
}